import { vars } from '@/_lib/styles/themes.css'
import { objectKeys } from '@syyu/util'
import { getRandomInt } from './get-random-int'
import { useCategory } from '@/_lib/hooks/use-category'
import { useRandomInt } from '@/_lib/hooks/use-random-int'

const N = objectKeys(vars.notion).length
const num = getRandomInt([0, N])
export const getRandomBackground = {
  backgroundColor: vars.notion[objectKeys(vars.notion)[num]],
}

export const useRandomBackground = () => {
  const { path } = useCategory()
  const P = useRandomInt([0, N])

  return {
    backgroundColor: vars.notion[objectKeys(vars.notion)[P]],
  }
}
