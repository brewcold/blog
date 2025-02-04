import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type ListProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export function List<T extends ElementType>({
  as,
  children,
  ...props
}: ListProps<T>) {
  const className = props.className
  const Component = as ?? 'ul'
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}
