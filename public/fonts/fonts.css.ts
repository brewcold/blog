import { fontFace } from '@vanilla-extract/css'

export const SANS_SERIF_SYNTHESIZED = fontFace([
  { src: 'url(/fonts/body-v.ttf)', fontWeight: 400 },
  {
    src: 'url(/fonts/body-v-it.ttf)',
    fontWeight: 400,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/body-v.ttf)', fontWeight: 500 },
  {
    src: 'url(/fonts/body-v-it.ttf)',
    fontWeight: 500,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/body-v.ttf)', fontWeight: 600 },
  {
    src: 'url(/fonts/body-v-it.ttf)',
    fontWeight: 600,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/body-v.ttf)', fontWeight: 700 },
  {
    src: 'url(/fonts/body-v-it.ttf)',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/body-v.ttf)', fontWeight: 900 },
  {
    src: 'url(/fonts/body-v-it.ttf)',
    fontWeight: 900,
    fontStyle: 'italic',
  },
])

export const MONOSPACE_SYNTHESIZED = fontFace([
  { src: 'url(/fonts/code-400.woff2)', fontWeight: 400 },
  {
    src: 'url(/fonts/code-400-it.woff2)',
    fontWeight: 400,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-400.woff2)', fontWeight: 500 },
  {
    src: 'url(/fonts/code-400-it.woff2)',
    fontWeight: 500,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-700.woff2)', fontWeight: 600 },
  {
    src: 'url(/fonts/code-700-it.woff2)',
    fontWeight: 600,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-700.woff2)', fontWeight: 700 },
  {
    src: 'url(/fonts/code-700-it.woff2)',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-900.ttf)', fontWeight: 900 },
  { src: 'url(/fonts/code-900.ttf)', fontWeight: 900, fontStyle: 'italic' },
])
