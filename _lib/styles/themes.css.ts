import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

const RADIUS = {
  card: '0.625rem',
  btn_square: '0.625rem',
  btn_round: '2rem',
}

const PADDING = {
  card: '0.75rem 1rem 0.75rem 1rem',
  post_component: '0 1.25rem 0 1.25rem',
  btn_square: '0.4rem 0.55rem 0.4rem 0.55rem',
  btn_round: '0.65rem',
}

export const NOTION_THEMES = {
  blue: '#1b64da',
  blue_background: '#90c2ff',
  brown: '#8a775f',
  brown_background: '#dbd3c8',
  default: '#303236',
  gray: '#808286',
  gray_background: '#E6E6E7',
  green: '#13D483',
  green_background: '#E4FA98',
  orange: '#FA5A15',
  orange_background: '#eda16f',
  pink: '#ff6666',
  pink_background: '#ffcccc',
  purple: '#7F38EC',
  purple_background: '#DA98FA',
  red: '#e42939',
  red_background: '#feafb4',
  yellow: '#ffb331',
  yellow_background: '#ffe69b',
}

export const vars = createGlobalThemeContract({
  color: {
    theme: 'color-theme',
    background_filter: 'color-background-filter',
    white: 'color-white',
    whitegray: 'color-whitegray',
    lightgray: 'color-lightgray',
    default: 'color-default',
    invert: 'color-invert',
    blueblack: 'color-blueblack',
    gray: 'color-gray',
    highlight: 'color-highlight',
    b1: 'color-light-b1',
    b2: 'color-light-b2',
    b3: 'color-light-b3',
    b4: 'color-light-b4',
    btn_bg: 'color-btn-bg',
    nav_bg: 'color-nav-bg',
    postListTitleText: 'color-postlist-title-text',
    postListTextHoveredLight: 'color-postlist-text-hovered-light',
    postListTextHoveredDark: 'color-postlist-text-hovered-dark',
    postListBgLight: 'color-postlist-bg-light',
    postListBgDark: 'color-postlist-bg-dark',
  },
  notion: {
    blue: 'notion-blue',
    blue_background: 'notion-blue-background',
    brown: 'notion-brown',
    brown_background: 'notion-brown-background',
    default: 'notion-default',
    gray: 'notion-gray',
    gray_background: 'notion-gray-background',
    green: 'notion-green',
    green_background: 'notion-green-background',
    orange: 'notion-orange',
    orange_background: 'notion-orange-background',
    pink: 'notion-pink',
    pink_background: 'notion-pink-background',
    purple: 'notion-purple',
    purple_background: 'notion-purple-background',
    red: 'notion-red',
    red_background: 'notion-red-background',
    yellow: 'notion-yellow',
    yellow_background: 'notion-yellow-background',
  },
  padding: {
    card: 'padding-card',
    post_component: 'post-component',
    btn_round: 'padding-btn-round',
    btn_square: 'padding-btn-squre',
  },
  border: {
    radius: {
      card: 'border-radius-card',
      btn_square: 'border-radius-btn-square',
      btn_round: 'border-radius-btn-round',
    },
  },
})

createGlobalTheme('[data-theme="light"]', vars, {
  border: { radius: RADIUS },
  padding: PADDING,
  color: {
    theme: 'rgba(252, 254, 255, 1)',
    background_filter: 'rgba(88,91,94,0.5)',
    white: '#FFFFFF',
    whitegray: '#F7F8FB',
    lightgray: '#A0A2A6',
    default: 'rgba(64, 66, 70, 1)',
    invert: 'rgba(252, 254, 255, 1)',
    blueblack: '#404246',
    gray: '#808286',
    highlight: '#3696eb',
    b1: '#FFFFFF',
    b2: '#F7F8FB',
    b3: '#E6E9EA',
    b4: 'rgba(88,91,94,0.4)',
    btn_bg: 'rgba(230,232,236,0.5)',
    nav_bg: 'transparent',
    postListTitleText: 'rgba(255,255,0,1)',
    postListTextHoveredDark: 'rgba(64, 66, 70, 1)',
    postListTextHoveredLight: 'rgba(64, 66, 70, 1)',
    postListBgDark: 'rgba(252, 254, 255, 1)',
    postListBgLight: 'rgba(252, 254, 255, 1)',
  },
  notion: {
    blue: '#1b64da',
    blue_background: '#90c2ff',
    brown: '#8a775f',
    brown_background: '#dbd3c8',
    default: '#303236',
    gray: '#808286',
    gray_background: '#E6E6E7',
    green: '#13D483',
    green_background: '#E4FA98',
    orange: '#FA5A15',
    orange_background: '#eda16f',
    pink: '#ff6666',
    pink_background: '#ffcccc',
    purple: '#7F38EC',
    purple_background: '#DA98FA',
    red: '#e42939',
    red_background: '#feafb4',
    yellow: '#ffb331',
    yellow_background: '#ffe69b',
  },
})

createGlobalTheme('[data-theme="dark"]', vars, {
  border: { radius: RADIUS },
  padding: PADDING,
  color: {
    theme: '#101216',
    background_filter: 'rgba(88,91,94,0.5)',
    white: '#FFFFFF',
    whitegray: '#F7F8FB',
    lightgray: '#A0A2A6',
    default: 'rgba(252, 254, 255, 1)',
    invert: 'rgba(48,50,54,1)',
    blueblack: '#404246',
    gray: '#C3C5C9',
    highlight: '#3696eb',
    b1: '#202226',
    b2: '#303236',
    b3: '#404246',
    b4: 'rgba(48,50,54,0.4)',
    btn_bg: 'rgba(40,42,46,0.5)',
    nav_bg: 'transparent',
    postListTitleText: 'rgba(255,255,0,1)',
    postListTextHoveredDark: 'rgba(64, 66, 70, 1)',
    postListTextHoveredLight: 'rgba(64, 66, 70, 1)',
    postListBgDark: 'rgba(252, 254, 255, 1)',
    postListBgLight: 'rgba(252, 254, 255, 1)',
  },
  notion: {
    blue: '#4A90E2',
    blue_background: '#A6D4FF',
    brown: '#A68A6F',
    brown_background: '#EDE3D6',
    default: 'rgba(252, 254, 255, 1)',
    gray: '#C3C5C9',
    gray_background: '#F2F2F3',
    green: '#2EE59D',
    green_background: '#E8FFD5',
    orange: '#FF7F41',
    orange_background: '#FFC199',
    pink: '#FF8896',
    pink_background: '#FFE0E5',
    purple: '#9B6BFF',
    purple_background: '#E8D7FF',
    red: '#FF5A68',
    red_background: '#FFD6DA',
    yellow: '#FFD154',
    yellow_background: '#FFF2C2',
  },
})
