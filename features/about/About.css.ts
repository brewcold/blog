import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

export const aboutFrame = style({
  paddingTop: dp(18),
  height: '100%',
  backgroundColor: 'transparent',
  width: 'clamp(20rem, 100%, 42.5rem)',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})
