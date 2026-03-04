'use client'
import type { TraversableBlock } from 'features/notion/types'
import { currentPostAtom } from 'features/post/post.atom'
import { useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect } from 'react'

interface Props {
  state: {
    currentPost: TraversableBlock[]
  }
}

export function Hydrate({ state }: Props) {
  useHydrateAtoms([[currentPostAtom, state.currentPost]])
  const setCurrentPost = useSetAtom(currentPostAtom)

  useEffect(() => {
    setCurrentPost(state.currentPost)
  }, [state.currentPost, setCurrentPost])

  return null
}
