import { About } from 'features/about'
import { PostListContainer } from 'features/postList'

export default async function Home() {
  return (
    <>
      <About />
      <PostListContainer />
    </>
  )
}
