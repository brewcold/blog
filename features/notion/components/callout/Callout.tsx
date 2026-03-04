import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion/types'
import { RichText } from '../richText/RichText'
import * as css from './Callout.css'

export function Callout({ block }: NotionComponentProps<'callout'>) {
  return (
    <div className={css.calloutFrame}>
      <span className={css.icon}>{'emoji' in block.callout.icon! && block.callout.icon.emoji}</span>
      <div className={css.content}>
        {block.callout.rich_text.map((txt: RichTextItemResponse, idx) => (
          <RichText key={`${txt.type}${idx}`} richText={txt} />
        ))}
      </div>
    </div>
  )
}
