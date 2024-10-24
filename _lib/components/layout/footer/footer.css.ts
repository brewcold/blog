import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { fontFamilyCode } from '@/_lib/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const BASE = style([
  {
    marginTop: '1.25rem',
    marginBottom: '0.75rem',
    textAlign: 'center',
    width: '100%',
    padding: '0 2rem 0 2rem',
    '@media': {
      '(0 <= width <= 768px)': {
        padding: '0 1.5rem 0 1.5rem',
      },
    },
  },
]);

export const FOOTER_SITE_TITLE = style({
  fontSize: '0.75rem',
  fontWeight: 400,
});

export const FOOTER_DECORATION = style({
  fontSize: '0.75rem',
  cursor: 'default',
});

export const FOOTER_LINK = style({
  fontSize: '0.8rem',
  transition: 'color 0.15s',
  selectors: {
    '&:hover': {
      color: THEMES.highlight,
    },
    '&:after': {
      marginLeft: '0.25rem',
      // marginRight: '0.5rem',
      fontSize: '0.85rem',
      fontFamily: fontFamilyCode,
      content: '↗︎',
    },
  },
});

export const FOOTER_COPYRIGHT = style({
  fontSize: '0.75rem',
  color: THEMES.gray,
});
