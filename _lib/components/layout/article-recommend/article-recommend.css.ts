import { style } from '@vanilla-extract/css';
import { RELEASED_DATE } from '../post-list/post-list.css';
import { BASE as BTN_BASE } from '../../basics/button/btn.css';
import { TYPOGRAPHY } from '../../basics/typography/typography.css';
import { vars } from '@/_lib/styles/themes.css';

export const BASE = style({
  marginTop: '2rem',
  marginBottom: '3rem',
  width: '100%',
});

export const UL = style({
  listStyleType: 'none',
  width: '100%',
  maxWidth: '30rem',
});

export const POST_LIST = style([
  BTN_BASE,
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
]);

export const TITLE = style({
  textAlign: 'center',
  fontSize: TYPOGRAPHY.XS.fontSize,
  color: vars.color.default,
  fontWeight: 600,
});

export const DATE = style([
  RELEASED_DATE,
  {
    color: `${vars.color.gray} !important`,
  },
]);
