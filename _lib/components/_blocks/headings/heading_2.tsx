import { Heading } from '../../basics/typography/heading/heading';
import { BASE, HEADING_2 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/block';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { ShareBtn } from '../../basics/button/share-btn/share-btn';
import { cleanUrl } from '@/utils/clean-url';
import { Spacing } from '../../basics/spacing/spacing';
import { View } from '../../basics/view/view';

export function Heading_2({ block }: NotionComponentProps<'heading_2'>) {
  const TITLE = block.heading_2.rich_text.map((txt: RichTextItemResponse) => txt.plain_text);
  return (
    <>
      <a id={cleanUrl(block.heading_2.rich_text[0].plain_text)} />
      <Spacing size="2rem" />
      <View className={BASE}>
        <Heading as="h3" className={HEADING_2}>
          {TITLE}
          <ShareBtn subtitle={block.heading_2.rich_text[0].plain_text} />
        </Heading>
      </View>
    </>
  );
}
