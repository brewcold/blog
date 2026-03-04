'use client'

import { useEffect, useState } from 'react'
import { getHeadingId } from '../heading/getHeadingId'
import * as css from './TableOfContents.css'

type TocItem = {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])

  useEffect(() => {
    const elements = document.querySelectorAll('h2[id], h3[id], h4[id]')
    const items: TocItem[] = Array.from(elements).map(el => ({
      id: el.id,
      text: el.textContent ?? '',
      level: Number(el.tagName[1]),
    }))
    setHeadings(items)
  }, [])

  if (headings.length === 0) return null

  const minLevel = Math.min(...headings.map(h => h.level))

  return (
    <nav className={css.tocWrapper}>
      <ul className={css.tocList}>
        {headings.map(heading => (
          <li
            key={heading.id}
            className={css.tocItem}
            style={{ paddingLeft: `${(heading.level - minLevel) * 16}px` }}
          >
            <a href={`#${heading.id}`} className={css.tocLink}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
