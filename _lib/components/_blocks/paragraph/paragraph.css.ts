import { style } from '@vanilla-extract/css';
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css';

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
]);
