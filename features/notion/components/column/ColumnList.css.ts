import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { layouts } from 'styles/vars/layouts.css'

export const columnList = style({
  display: 'grid',
  marginInline: layouts.full,
  padding: 0,
  marginBlock: dp(2),
  gap: dp(4),
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
})
