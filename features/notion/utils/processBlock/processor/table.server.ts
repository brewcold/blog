import type { TableBlockObjectResponse } from '@notionhq/client'
import { registerProcessor } from '../registry.server'

registerProcessor('table', async (block: TableBlockObjectResponse) => {
  return block
})
