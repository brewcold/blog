import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const frame = style({
  zIndex: 999,
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
})

export const backdrop = style({
  position: 'absolute',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  transition: 'opacity 150ms ease',
  pointerEvents: 'auto',
})

export const base = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  margin: 0,
  maxHeight: 'calc(100dvh - 4.5rem)',
  background: color.background,
  borderTopLeftRadius: dp(4),
  borderTopRightRadius: dp(4),
  pointerEvents: 'auto',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  paddingBottom: 'env(safe-area-inset-bottom)',
})

export const handleArea = style({
  width: '100%',
  textAlign: 'center',
  border: 'none',
  padding: `${dp(3)} 0`,
  touchAction: 'none',
  cursor: 'grab',
  background: 'transparent',
  flexShrink: 0,
})

export const handleBar = style({
  display: 'inline-block',
  width: dp(10),
  height: dp(1),
  borderRadius: dp(2),
  background: color.text,
  opacity: 0.2,
  transition: 'scale ease 0.15s',
  ':active': {
    scale: '0.85',
  },
})

export const contentFrame = style({
  padding: dp(6),
})
