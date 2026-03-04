import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { hasChildren, type NotionComponentProps } from 'features/notion/types'
import { RichText } from '../richText/RichText'
import * as css from './Table.css'

export function Table({ block }: NotionComponentProps<'table'>) {
  if (!hasChildren(block)) return null

  const rows = block.table.children
  const hasColumnHeader = block.table.has_column_header
  const hasRowHeader = block.table.has_row_header

  return (
    <div className={css.tableWrapper}>
      <table className={css.table}>
        {hasColumnHeader && rows.length > 0 && (
          <thead>
            <tr>
              {(rows[0] as any).table_row.cells.map((cell: RichTextItemResponse[], cellIdx: number) => (
                <th key={cellIdx} className={css.th}>
                  {cell.map((txt: RichTextItemResponse, txtIdx: number) => (
                    <RichText key={`${txt.type}${txtIdx}`} richText={txt} />
                  ))}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.slice(hasColumnHeader ? 1 : 0).map((row: any) => (
            <tr key={row.id}>
              {row.table_row.cells.map((cell: RichTextItemResponse[], cellIdx: number) => {
                const isRowHeader = hasRowHeader && cellIdx === 0
                const Tag = isRowHeader ? 'th' : 'td'
                return (
                  <Tag key={cellIdx} className={isRowHeader ? css.th : css.td}>
                    {cell.map((txt: RichTextItemResponse, txtIdx: number) => (
                      <RichText key={`${txt.type}${txtIdx}`} richText={txt} />
                    ))}
                  </Tag>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
