import 'server-only'

import { Client } from '@notionhq/client'
import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  GetBlockResponse,
  PartialBlockObjectResponse,
  QueryDataSourceParameters,
} from '@notionhq/client/build/src/api-endpoints'
import { cacheLife } from 'next/cache'
import { ENV } from 'static/env'
import type { NotionPageMeta } from '../types'

const createNotionClient = () => new Client({ auth: ENV.NOTION_KEY })
export const notion: Client = createNotionClient()

const GET_DATASRC_ID = async (database_id: string): Promise<{ id: string; name: string }[]> => {
  const result = (await notion.databases.retrieve({ database_id })) as DatabaseObjectResponse
  return result.data_sources
}

export const getCachedPostList = async (database_id: string): Promise<NotionPageMeta[]> => {
  'use cache'
  cacheLife('minutes')
  const [dataSrc] = await GET_DATASRC_ID(database_id ?? ENV.NOTION_DATABASE_ID)
  const { id: data_source_id } = dataSrc

  const query: QueryDataSourceParameters = {
    data_source_id,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  }
  try {
    const response = await notion.dataSources.query(query)
    return response.results as NotionPageMeta[]
  } catch (err) {
    console.error('\n', data_source_id, err, '\n', 'xxxx POSTLIST FETCH ERROR')
    return []
  }
}

export const getPostMetaData = async (page_id: string): Promise<NotionPageMeta> => {
  'use cache'
  cacheLife('minutes')
  const result = await notion.pages.retrieve({ page_id })

  return result as NotionPageMeta
}

const getChildrenBlocks = async (parent_block_id: string): Promise<(BlockObjectResponse | PartialBlockObjectResponse)[]> => {
  'use cache'
  cacheLife('minutes')
  console.warn(`**${parent_block_id.slice(0, 4)}`, '>>>> CHILDREN BLOCK FETCH')
  let results = []
  let blocks = await notion.blocks.children.list({
    block_id: parent_block_id,
    page_size: 100,
  })
  results = [...blocks.results]
  while (blocks.has_more) {
    parent_block_id = blocks.next_cursor ?? ''
    blocks = await notion.blocks.children.list({
      block_id: parent_block_id,
      page_size: 100,
    })
    results = [...results, ...blocks.results]
  }
  return results
}

const getDepthChildrenBlocks = async (blocks: BlockObjectResponse[]): Promise<BlockObjectResponse[]> => {
  return await Promise.all(
    blocks.map(async b => {
      if (!b.has_children) return b
      const children = await getChildrenBlocks(b.id)
      const resolved = await getDepthChildrenBlocks(children as BlockObjectResponse[])
      const type = b.type
      return { ...b, [type]: { ...(b as any)[type], children: resolved } }
    }),
  )
}

export const getPost = async (block_id: string): Promise<BlockObjectResponse[]> => {
  const blocks = await getChildrenBlocks(block_id)
  return await getDepthChildrenBlocks(blocks as BlockObjectResponse[])
}

export const getSingleBlock = async (block_id: string): Promise<GetBlockResponse> => {
  console.warn(`************${block_id.slice(0, 4)}`, '>>>> SINGLE BLOCK FETCH')
  return await notion.blocks.retrieve({ block_id })
}
