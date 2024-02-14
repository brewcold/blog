import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { Heading } from '../../typography/heading/heading';
import { RichText } from '@/_lib/types/block';
import { HEADING_2 } from './headings.css';

export function Heading_2({ block }: NotionPolymorphicComponentProps<'heading_2'>) {
  return (
    <Heading as="h2" size="XL" styleVariant={HEADING_2}>
      {block.heading_2.rich_text.map((txt: RichText) => txt.plain_text)}
    </Heading>
  );
}
