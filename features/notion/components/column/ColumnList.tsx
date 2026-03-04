import { hasChildren, type NotionComponentProps } from 'features/notion/types'
import { ChildrenBlocks } from '../../containers/ChildrenBlocks'
import * as css from './ColumnList.css'

export function ColumnList({ block }: NotionComponentProps<'column_list'>) {
  if (!hasChildren(block)) return null
  const count = (block.column_list.children?.length ?? 1) as 1 | 2 | 3 | 4 | 5

  return (
    <div className={css.columnCount[count]}>
      <ChildrenBlocks childrenBlocks={block.column_list.children} />
    </div>
  )
}
