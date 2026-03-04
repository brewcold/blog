import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const tocWrapper = style({
  marginInline: layouts.full,
  marginBlock: dp(4),
  padding: dp(4),
  borderRadius: dp(2),
  backgroundColor: color.notion_background_gray,
})

export const tocList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
})

export const tocItem = style({
  lineHeight: 1.8,
  fontSize: dp(3.75),
})

export const tocLink = style({
  textDecoration: 'none',
  color: color.notion_gray,
  ':hover': {
    textDecoration: 'underline',
  },
})
