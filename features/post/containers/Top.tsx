'use client'
import type { getNotionPageMeta } from 'features/notion/utils/meta/getNotionPageMeta'
import { PostInfo } from '../components/PostInfo'
import { PostTitle } from '../components/PostTitle'
import * as css from './Top.css'

export function Top({ meta }: { meta: ReturnType<typeof getNotionPageMeta> }) {
  const title = meta.title
  return (
    <div className={css.frame}>
      <PostTitle title={title} />
      <PostInfo meta={meta} />
    </div>
  )
}
