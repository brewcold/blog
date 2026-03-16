'use client'
import { HamburgerIcon } from '../components/HamburgerIcon'
import { BottomSheet } from 'components/layout/BottomSheet'
import { nextTheme, ThemeContext } from 'features/theme'
import Link from 'next/link'
import { type MouseEvent, useContext, useRef } from 'react'
import { overlay } from 'overlay-kit'
import { HamburgerMenu } from './HamburgerMenu'
import { MenuBtn } from './MenuButton'
import * as css from './Navigation.css'
import { type MenuKeys, NavContext, NavProvider } from './NavigationProvider'

export function Navigation() {
  return (
    <NavProvider>
      <NavigationContent />
    </NavProvider>
  )
}

function NavigationContent() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { key, setOpenState } = useContext(NavContext)
  const overlayIdRef = useRef<string | null>(null)

  const handleMenuClose = () => {
    setOpenState({ type: 'close' })
    if (overlayIdRef.current) {
      overlay.close(overlayIdRef.current)
      overlayIdRef.current = null
    }
  }

  const handleMenuButton = (e: MouseEvent, to: MenuKeys) => {
    e.stopPropagation()
    if (key === to) {
      handleMenuClose()
      return
    }
    setOpenState({ type: 'open', key: to })

    const content = (() => {
      switch (to) {
        case 'hamburger':
          return <HamburgerMenu onClose={handleMenuClose} />
        default:
          return null
      }
    })()

    const id = overlay.open(({ isOpen, close, unmount }) => (
      <BottomSheet
        isOpen={isOpen}
        close={() => {
          close()
          setOpenState({ type: 'close' })
          overlayIdRef.current = null
        }}
        unmount={unmount}
        size="full">
        {content}
      </BottomSheet>
    ))
    overlayIdRef.current = id
  }

  return (
    <div className={css.container}>
      <div className={css.frame}>
        <div className={css.buttonGroup}>
          <MenuBtn as={Link} href="/" aria-label={`글 리스트 페이지로 이동합니다`}>
            Seungyoon Yu
          </MenuBtn>
        </div>
        <div className={css.buttonGroup}>
          <MenuBtn type="button" onClick={e => handleMenuButton(e, 'hamburger')} aria-label={`모든 글 리스트를 펼칩니다`}>
            <HamburgerIcon open={key === 'hamburger'} />
          </MenuBtn>
          <MenuBtn type="button">
            <Link href="https://thoughts.yooooon.com" target="_blank" rel="noopener noreferrer" aria-label={`신변잡기 블로그로 이동합니다`}>
              🤔
            </Link>
          </MenuBtn>
          <MenuBtn
            type="button"
            onClick={toggleTheme}
            aria-label={`현재 색상 테마는 ${theme}입니다. 버튼을 누르면 ${nextTheme(theme)} 테마로 바뀝니다.`}>
            {(() => {
              switch (theme) {
                case 'system':
                  return '👽'
                case 'light':
                  return '🌞'
                case 'dark':
                  return '🌚'
              }
            })()}
          </MenuBtn>
        </div>
      </div>
    </div>
  )
}
