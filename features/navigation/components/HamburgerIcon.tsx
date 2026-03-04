import * as css from './HamburgerIcon.css'

export function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className={css.wrapper} data-open={open}>
      <span className={css.top} />
      <span className={css.bottom} />
    </span>
  )
}
