import RSS from 'rss'
import { meta } from '@/constants/meta'
import { notion_env, site_env } from '@/env'
import { getCachedPostList } from '@/fetch/notion'
import { getTitle } from '@/utils/get-title'
import { getSummary } from '@/utils/get-summary'
import { parsedSlug } from '@/utils/parsed-slug'
import { getDate } from '@/utils/get-date'

export async function GET() {
  const feed = new RSS({
    title: meta.siteTitle,
    description: meta.siteDiscription,
    site_url: meta.og.url,
    feed_url: `${site_env.root}/feed.xml`,
    copyright: 'Brewcold',
    language: 'ko',
    pubDate: new Date(),
  })
  try {
    const postList = await getCachedPostList(notion_env.database_id)
    postList.map(post => {
      feed.item({
        title: getTitle(post),
        description: getSummary(post),
        url: `${site_env.engineering}/${parsedSlug(post)}`,
        date: getDate(post),
        author: 'Brewcold',
      })
    })
    return new Response(feed.xml(), {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    })
  } catch (err) {
    console.error(err)
    return new Response('error')
  }
}
