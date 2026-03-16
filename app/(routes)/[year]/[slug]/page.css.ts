import { style } from '@vanilla-extract/css'
import { layouts } from 'styles/vars/layouts.css'

export const tocBreakpoint = 'screen and (min-width: 768px)'

export const contentLayout = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: layouts.width,
  width: '100%',
  marginInline: 'auto',
  '@media': {
    [tocBreakpoint]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
})
