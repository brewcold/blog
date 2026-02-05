import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion/types'
import { hasChildren } from 'features/notion/types'
import { ChildrenBlocks } from '../../containers/ChildrenBlocks'
import { RichText } from '../richText/RichText'
import { li, liContent } from './NumberedList.css'

export function BulletedListItem({ block }: NotionComponentProps<'bulleted_list_item'>) {
  return (
    <li className={li}>
      <p className={liContent}>
        {block.bulleted_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <RichText key={`${txt.type}${idx}`} richText={txt} />
        ))}
      </p>
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.bulleted_list_item.children} />}
    </li>
  )
}
