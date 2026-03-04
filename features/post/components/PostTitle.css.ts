import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { breakpoints } from 'styles/vars/breakpoints.css'
import { color } from 'styles/vars/color.css'

export const title = style({
  fontSize: dp(4.5),
  marginTop: dp(40),
  color: color.text,
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: 700,
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  lineHeight: 1.3,
  '@media': {
    [breakpoints.desktop]: {
      textAlign: 'left',
    },
    [breakpoints.desktop_wide]: {
      textAlign: 'left',
    },
  },
})
