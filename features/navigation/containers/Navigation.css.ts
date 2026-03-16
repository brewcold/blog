import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { breakpoints } from 'styles/vars/breakpoints.css'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const container = style({
  zIndex: 99,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  paddingTop: dp(3),
  paddingBottom: 'env(safe-area-inset-bottom)',
  paddingInline: dp(3),
  transform: 'translateY(0)',
})

export const frame = style({
  backgroundColor: 'transparent',
  color: color.notion_default,
  flexDirection: 'row',
  display: 'flex',
  maxWidth: layouts.width,
  justifyContent: 'space-between',
  borderTop: 'none',
  height: dp(12),
  width: '100%',
  alignItems: 'center',
})

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  gap: dp(2),
})

export const categoryBtn = style({
  margin: 0,
  display: 'inline-flex',
  paddingInline: dp(0),
  paddingBlock: dp(0),
  justifyContent: 'flex-start',
  alignItems: 'center',
  border: 'none',
  fontSize: dp(4.5),
  backgroundColor: 'transparent',
  color: color.text,
  fontWeight: 800,
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  cursor: 'pointer',
})
