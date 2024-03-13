import { meta } from '@/constants/meta';
import { getPost, getPostMetaData } from '@/fetch/notion';
import { Block } from '@/_lib/components/block/block';
import { Article } from '@/_lib/components/layout/post/article';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { groupedBlocks } from '@/utils/grouped-blocks';
import { Txt } from '@/_lib/components/typography/txt/txt';

export const revalidate = 3600;

export default async function Post() {
  const blocks = groupedBlocks(await getPost(process.env.NOTION_ABOUT_ID as string));

  return (
    <>
      <Article>
        <Txt as="Link" href="/" size="XL">
          {'←'}
        </Txt>
        <Spacing size="5rem" />
        {blocks.map(b => (
          <Block key={b.id} block={b} />
        ))}
      </Article>
      <Spacing size="10rem" />
    </>
  );
}

export async function generateMetadata() {
  return {
    title: `About – ${meta.siteTitle}`,
    description: meta.siteDiscription,
  };
}
