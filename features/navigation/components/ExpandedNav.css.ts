import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { breakpoints } from 'styles/vars/breakpoints.css'
import { color } from 'styles/vars/color.css'

export const wrapper = style({
  width: '100vw',
  backgroundColor: color.background,
  zIndex: 9,
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'opacity .2s cubic-bezier(.4, 0, .4, 1)',
  selectors: {
    '&[data-open="false"]': {
      opacity: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
    },
    '&[data-open="true"]': {
      opacity: 0.9,
      pointerEvents: 'auto',
      visibility: 'visible',
    },
  },
})

export const frame = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  paddingTop: dp(12),
  overflow: 'hidden',
  transition: 'transform .2s cubic-bezier(.4, 0, .4, 1)',
  transform: 'translateY(5%)',
  '@media': {
    [breakpoints.desktop]: {
      transform: 'translateX(5%)',
    },
  },
  selectors: {
    '[data-open="true"] &': {
      transform: 'translateX(0) translateY(0)',
    },
  },
})

export const contentFrame = style({
  height: `calc(100dvh - ${dp(12)})`,
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  marginBottom: dp(6),
})
