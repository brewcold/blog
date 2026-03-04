'use client'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { nextTheme, ThemeContext } from 'features/theme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type MouseEvent, useContext } from 'react'
import { ExpandedNav } from '../components/ExpandedNav'
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
  const path = usePathname()
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { key, setOpenState } = useContext(NavContext)
  const handleMenuClose = () => setOpenState({ type: 'close' })
  const handleMenuButton = (e: MouseEvent, to: MenuKeys) => {
    e.stopPropagation()
    if (key === to) handleMenuClose()
    else setOpenState({ type: 'open', key: to })
  }

  const expandedNavContent = (key?: MenuKeys) => {
    switch (key) {
      case 'hamburger':
        return <HamburgerMenu onClose={handleMenuClose} />
      default:
        return null
    }
  }

  return (
    <>
      <div className={css.frame}>
        <div className={css.buttonGroup}>
          {(() => {
            switch (path) {
              case '/about':
                return (
                  <MenuBtn as={Link} href="/" aria-label={`메인 화면으로 이동합니다`}>
                    ←
                  </MenuBtn>
                )
              default:
                return (
                  <MenuBtn as={Link} href="/about" aria-label={`프로필 페이지로 이동합니다`}>
                    Seungyoon Yu
                  </MenuBtn>
                )
            }
          })()}
        </div>
        <div className={css.buttonGroup}>
          <MenuBtn type="button" onClick={e => handleMenuButton(e, 'hamburger')} aria-label={`모든 글 리스트를 펼칩니다`}>
            <HamburgerMenuIcon width="21" height="21" />
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
      <ExpandedNav isOpen={key !== null} onClose={handleMenuClose} content={expandedNavContent(key)} />
    </>
  )
}
