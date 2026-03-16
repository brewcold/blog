import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { layouts } from 'styles/vars/layouts.css'

export const aboutFrame = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: layouts.width,
  width: '100%',
  marginInline: 'auto',
  paddingTop: dp(18),
})

export const aboutContent = style({
  maxWidth: '42.5rem',
})
