import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { layouts } from 'styles/vars/layouts.css'

export const aboutFrame = style({
  paddingTop: dp(18),
  width: '100%',
  height: '100%',
  maxWidth: layouts.width,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
})
