import { styleVariants } from '@vanilla-extract/css';

export const THEMES = {
  theme: '#97F3F9',
  white: '#FFFFFF',
  whitegray: '#FAFAFB',
  default: '#303336',
  blueblack: '#303336',
  gray: '#808386',
  highlight: '#2578BE',
  light_b1: '#F6F6F7',
  light_b2: '#F2F2F3',
  light_b3: '#E6E6E7',
};

export const COLORS = {
  blue: '#1b64da',
  blue_background: '#90c2ff',
  brown: '#8a775f',
  brown_background: '#dbd3c8',
  default: THEMES.default,
  gray: THEMES.gray,
  gray_background: THEMES.light_b3,
  green: '#13D483',
  green_background: '#E4FA98',
  orange: '#FA5A15',
  orange_background: THEMES.highlight,
  pink: '#ff6666',
  pink_background: '#ffcccc',
  purple: '#7F38EC',
  purple_background: '#DA98FA',
  red: '#e42939',
  red_background: '#feafb4',
  yellow: '#ffb331',
  yellow_background: '#ffe69b',
};

export const COLOR_STYLE_VARIANTS = styleVariants({
  default: { color: COLORS.default },
  blue: { color: COLORS.blue },
  blue_background: { backgroundColor: COLORS.blue_background },
  brown: { color: COLORS.brown },
  brown_background: { backgroundColor: COLORS.brown_background },
  gray: { color: COLORS.gray },
  gray_background: { backgroundColor: COLORS.gray_background },
  green: { color: COLORS.green },
  green_background: { backgroundColor: COLORS.gray_background },
  orange: { color: COLORS.orange },
  orange_background: { backgroundColor: COLORS.orange_background },
  pink: { color: COLORS.pink },
  pink_background: { backgroundColor: COLORS.pink_background },
  purple: { color: COLORS.purple },
  purple_background: { backgroundColor: COLORS.purple_background },
  red: { color: COLORS.red },
  red_background: { backgroundColor: COLORS.red_background },
  yellow: { color: COLORS.yellow },
  yellow_background: { backgroundColor: COLORS.yellow_background },
});
