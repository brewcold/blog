import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BASE } from './article.css';

interface ArticleProps extends ComponentPropsWithoutRef<'article'> {
  children: ReactNode;
}
export function Article({ children, ...props }: ArticleProps) {
  const cn = `${props.className ?? BASE}`;
  return <article className={cn}>{children}</article>;
}
