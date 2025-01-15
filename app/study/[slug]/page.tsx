import { getSummary } from '@/utils/get-summary';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { meta } from '@/constants/meta';
import { getCachedPostList, getPost, getPostMetaData } from '@/fetch/notion';
import { PostTitle } from '@/_lib/components/layout/post-title/post-title';
import { Spacing } from '@/_lib/components/basics/spacing/spacing';
import { processedBlock } from '@/utils/process-block';
import { View } from '@/_lib/components/basics/view/view';
import { LAYOUT_CENTERED } from '@/_lib/components/basics/article/article.css';
import { notion_env } from '@/env';
import { ShareBtn } from '@/_lib/components/basics/button/share-btn/share-btn';
import { Flex } from '@/_lib/components/basics/flex/flex';
import { OtherArticlesBtn } from '@/_lib/components/basics/button/other-articles-btn/other-articles-btn';
import { NOTION_BLOCK_LAYOUT } from '@/_lib/components/_blocks/block-layout.css';
import RenderBlocks from '@/_lib/components/render-blocks';
import { LAYOUT_INNER, POST_LAYOUT } from '@/app/page.css';
import { ReadingPosition } from '@/_lib/components/layout/reading-position/reading-position';
import { PostBorder } from '@/_lib/components/layout/post-border/post-border';

export interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getCachedPostList(notion_env.study_database_id);

  return posts.map(post => {
    return {
      slug: parsedSlug(post),
    };
  });
}

export async function generateMetadata({ params }: PostPageProps) {
  const posts = await getCachedPostList(notion_env.study_database_id);
  const { slug } = await params;
  const [matchPost] = posts.filter(post => parsedSlug(post) === slug);

  return {
    title: `${getTitle(matchPost)} – ${meta.siteTitle}`,
    description: getSummary(matchPost),
  };
}

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList(notion_env.study_database_id);
  const { slug } = await params;
  const [matchPost] = posts.filter(post => parsedSlug(post) === slug);
  const meta = await getPostMetaData(matchPost.id);
  const blocks = await processedBlock(await getPost(matchPost.id));

  return (
    <View className={POST_LAYOUT}>
      <PostBorder>
        <View id="post" className={LAYOUT_CENTERED}>
          <PostTitle {...meta} />
          <RenderBlocks blocks={blocks} />
          <View className={NOTION_BLOCK_LAYOUT}>
            <Spacing size="3rem" dir="vert" />
            <Flex justifyContent="spaceBetween">
              <ShareBtn />
              <OtherArticlesBtn />
            </Flex>
          </View>
          <Spacing size="10rem" />
        </View>
      </PostBorder>
    </View>
  );
}
