/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: render codeblock html */
import hljs from 'highlight.js/lib/core'
import 'styles/hljs.css'
import bash from 'highlight.js/lib/languages/bash'
import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import python from 'highlight.js/lib/languages/python'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'
import plaintext from 'highlight.js/lib/languages/plaintext'
import type { NotionComponentProps } from 'features/notion/types'
import { getCodeLang } from './getCodeLang'
import { getPlainText } from '../richText/getPlainText'
import * as codeCss from './Code.css'
import { CopyBtn } from './CopyBtn'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('jsx', javascript)
hljs.registerLanguage('tsx', typescript)
hljs.registerLanguage('plaintext', plaintext)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('svg', xml)
hljs.registerLanguage('json', json)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('java', java)
hljs.registerLanguage('python', python)

export function highlightCode(code: string, language: string): string {
  if (!hljs.getLanguage(language)) return hljs.highlightAuto(code).value
  return hljs.highlight(code, { language }).value
}

export function Code({ block }: NotionComponentProps<'code'>) {
  const codeLang = getCodeLang(block.code.language)
  const codeText = getPlainText(block.code.rich_text)
  const codeHtml = highlightCode(codeText, block.code.language)

  return (
    <div className={codeCss.codeFrame}>
      <div className={codeCss.codeHeader}>
        <span className={codeCss.codeLang}>{codeLang}</span>
        <CopyBtn codeText={codeText} />
      </div>
      <pre dangerouslySetInnerHTML={{ __html: codeHtml }} className={codeCss.codeBlock} />
    </div>
  )
}
