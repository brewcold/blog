import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { layouts } from 'styles/vars/layouts.css'

const tocBreakpoint = 'screen and (min-width: 62rem)'

export const aside = style({
  paddingInline: layouts.full,
  order: -1,
  marginBlock: dp(6),

  '@media': {
    [tocBreakpoint]: {
      position: 'sticky',
      top: dp(6),
      alignSelf: 'flex-start',
      width: '17.5rem',
      flexShrink: 0,
      paddingInline: 0,
      marginLeft: dp(6),
      order: 0,
      marginBottom: 0,
    },
  },
})

export const frame = style({})

export const title = style({
  fontSize: dp(5.75),
  fontWeight: 600,
  fontFamily: '"Mona Sans", "Pretendard", sans-serif',
  marginBottom: dp(6),
  '@media': {
    [tocBreakpoint]: {
      fontSize: dp(4.5),
      marginBottom: dp(3),
    },
  },
})

export const tocFrame = style({
  display: 'flex',
  flexDirection: 'column',
})
