'use client'
import { useTextCopy } from '@fische/react'
import * as css from './Code.css'
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons'
import { color } from 'styles/vars/color.css'

export function CopyBtn({ codeText }: { codeText: string }) {
  const [copy, isCopied] = useTextCopy(1000)
  return (
    <button type="button" className={css.copyCode} onClick={() => copy(codeText)}>
      {isCopied ? <CheckIcon color={color.ok} /> : <CopyIcon />}
    </button>
  )
}
