'use client'
import { aboutPostBlockAtom } from 'features/about/aboutPost.atom'
import { RenderNotion } from 'features/notion/containers/_RenderNotion'
import { useAtomValue } from 'jotai'
import * as css from './About.css'

export function About() {
  const aboutBlocks = useAtomValue(aboutPostBlockAtom)
  return (
    <div className={css.aboutFrame}>
      <div className={css.aboutContent}>
        <RenderNotion blocks={aboutBlocks} />
      </div>
    </div>
  )
}
