import { hasChildren, type NotionComponentProps } from 'features/notion/types'
import { ChildrenBlocks } from '../../containers/ChildrenBlocks'
import * as css from './Column.css'

export function Column({ block }: NotionComponentProps<'column'>) {
  if (!hasChildren(block)) return null

  return (
    <div className={css.column}>
      <ChildrenBlocks childrenBlocks={block.column.children} />
    </div>
  )
}
