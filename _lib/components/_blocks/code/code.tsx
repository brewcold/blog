import { View } from '../../basics/view/view';
import hljs from 'highlight.js';
import { CODE_BLOCK, CODE_LANGUAGE, CODE_PRE } from './code.css';
import { Txt } from '../../basics/typography/txt/txt';
import { Flex } from '../../basics/flex/flex';
import { getCodeLanguage } from '@/utils/get-code-language';
import type { NotionComponentProps } from '@/_lib/types/block';

export function Code({ block }: NotionComponentProps<'code'>) {
  const codeHtml = hljs.highlight(block.code.rich_text.map(txt => txt.plain_text).join('\n'), {
    language: block.code.language,
  }).value;
  return (
    <View as="div" className={CODE_BLOCK}>
      <Flex justifyContent="spaceBetween" alignItems="center">
        <Txt className={CODE_LANGUAGE}>{getCodeLanguage(block.code.language)}</Txt>
      </Flex>
      <pre className={CODE_PRE} dangerouslySetInnerHTML={{ __html: codeHtml }} />
    </View>
  );
}
