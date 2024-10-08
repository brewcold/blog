import { Heading } from '../../typography/heading/heading';
import { HEADING_1 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/block';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { ShareBtn } from '../../interaction/button/share-btn/share-btn';
import { cleanUrl } from '@/utils/clean-url';
import { Spacing } from '../../layout/spacing/spacing';

export function Heading_1({ block }: NotionComponentProps<'heading_1'>) {
  return (
    <>
      <a id={cleanUrl(block.heading_1.rich_text[0].plain_text)} />
      <Spacing size="2.5rem" />
      <Heading as="h2" styleVariant={HEADING_1}>
        {block.heading_1.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)}
        <ShareBtn subtitle={block.heading_1.rich_text[0].plain_text} />
      </Heading>
    </>
  );
}
