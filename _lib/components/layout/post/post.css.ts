import { fontFamilyCode } from '@/_lib/styles/fonts.css';
import { BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const ABOUT = style([
  {
    maxWidth: '41rem',
    width: '100%',
    wordBreak: 'keep-all',
    '@media': {
      '(0 <= width <= 768px)': {
        wordBreak: 'break-all',
      },
    },
  },
]);

export const ABOUT_INNER = style([
  {
    '@media': {
      '(0 <= width <= 768px)': {},
    },
  },
]);

export const ABOUT_SITE_TITLE = style({
  textTransform: 'uppercase',
  fontWeight: 900,
  fontFamily: fontFamilyCode,
  fontSize: '3.25rem',
});
