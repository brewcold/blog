import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const postInfoFrame = style({
  marginTop: dp(1.5),
})

export const postInfoText = style({
  fontSize: dp(3.75),
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  fontWeight: 500,
  color: color.notion_gray,
})
