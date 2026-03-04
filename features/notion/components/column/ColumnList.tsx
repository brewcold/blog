import { hasChildren, type NotionComponentProps } from 'features/notion/types'
import { ChildrenBlocks } from '../../containers/ChildrenBlocks'
import * as css from './ColumnList.css'

export function ColumnList({ block }: NotionComponentProps<'column_list'>) {
  if (!hasChildren(block)) return null
  const columnCount = block.column_list.children?.length ?? 1

  return (
    <div className={css.columnList} style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
      <ChildrenBlocks childrenBlocks={block.column_list.children} />
    </div>
  )
}
