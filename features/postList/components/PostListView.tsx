'use client'
import type { NotionPageMeta } from 'features/notion/types'
import { getNotionPageMeta } from 'features/notion/utils/meta/getNotionPageMeta'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { postsAtom } from '../postList.atom'
import * as css from './PostListView.css'

export function PostListView() {
  const posts = useAtomValue(postsAtom)

  return (
    <div className={css.postListFrame}>
      <div className={css.viewLink}>
        {posts.map(p => (
          <PostListView.Row key={p.id} meta={p} />
        ))}
      </div>
    </div>
  )
}

PostListView.Row = ({ meta }: { meta: NotionPageMeta }) => {
  const postMeta = getNotionPageMeta(meta)
  const year = postMeta.date.slice(0, 4)
  const path = `/${year}/${postMeta.slug}`
  return (
    <li className={css.postLinkFrame}>
      <Link href={path} className={css.postLinkInner}>
        <span className={css.postLinkTitle}>{`${postMeta.title}`}</span>
      </Link>
    </li>
  )
}
