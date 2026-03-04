import { style } from '@vanilla-extract/css'

const tocBreakpoint = 'screen and (min-width: 62rem)'

export const contentLayout = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [tocBreakpoint]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
})
