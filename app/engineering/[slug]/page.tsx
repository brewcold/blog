import { getSummary } from '@/utils/get-summary'
import { getTitle } from '@/utils/get-title'
import { parsedSlug } from '@/utils/parsed-slug'
import { meta } from '@/constants/meta'
import { getCachedPostList, getPost, getPostMetaData } from '@/fetch/notion'
import { PostTitle } from '@/_lib/components/layout/post-title/post-title'
import { Spacing } from '@/_lib/components/basics/spacing/spacing'
import { processedBlock } from '@/utils/process-block'
import { View } from '@/_lib/components/basics/view/view'
import { notion_env } from '@/env'
import { ShareBtn } from '@/_lib/components/basics/button/share-btn/share-btn'
import { Flex } from '@/_lib/components/basics/flex/flex'
import { OtherArticlesBtn } from '@/_lib/components/basics/button/other-articles-btn/other-articles-btn'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '@/_lib/components/_blocks/block-layout.css'
import RenderBlocks from '@/_lib/components/render-blocks'
import { ArticleRecommend } from '@/_lib/components/layout/article-recommend/article-recommend'
import { POST_LAYOUT } from '@/app/page.css'
import { PostBorder } from '@/_lib/components/layout/post-border/post-border'
import { BackButton } from '@/_lib/components/layout/back-button/back-button'
import { Footer } from '@/_lib/components/layout/footer/footer'
import { randomTheme } from '@/utils/random-theme'
import { Metadata, Viewport } from 'next'
import { vars } from '@/_lib/styles/themes.css'
import { useSystemTheme } from '@/_lib/hooks/use-system-theme'

export interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getCachedPostList(notion_env.database_id)

  return posts.map(post => {
    return {
      slug: parsedSlug(post),
    }
  })
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const posts = await getCachedPostList(notion_env.database_id)
  const { slug } = await params
  const [matchPost] = posts.filter(post => parsedSlug(post) === slug)

  return {
    title: `${getTitle(matchPost)} – ${meta.siteTitle}`,
    description: getSummary(matchPost),
  }
}

export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: '#303236',
  }
}

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList(notion_env.database_id)
  const { slug } = await params
  const [matchPost] = posts.filter(post => parsedSlug(post) === slug)
  const meta = await getPostMetaData(matchPost.id)
  const blocks = await processedBlock(await getPost(matchPost.id))

  return (
    <View className={POST_LAYOUT}>
      <PostBorder>
        <BackButton className={NOTION_PARAGRAPH_BLOCK_LAYOUT} />
        <Spacing size="1rem" />
        <PostTitle {...meta} />
        <RenderBlocks blocks={blocks} />
        <View className={NOTION_PARAGRAPH_BLOCK_LAYOUT}>
          <Spacing size="3rem" dir="vert" />
          <Flex justifyContent="spaceBetween">
            <ShareBtn />
            <OtherArticlesBtn />
          </Flex>
          <Spacing size="1rem" />
          <ArticleRecommend
            id={matchPost.id}
            posts={posts}
            targets={matchPost.properties.tags.multi_select}
          />
          <Spacing size="10rem" />
          <Footer />
        </View>
      </PostBorder>
    </View>
  )
}
