import '@/_lib/components/_blocks/code/hljs.css'
import '@/_lib/styles/themes.css'
import '@/_lib/styles/global.css'
import '@/_lib/components/_blocks/toggle/details-summary-global.css'
import '@/_lib/components/_blocks/numbered-list-item/ol-global.css'
import '@/_lib/components/_blocks/bulleted-list-item/ul-global.css'

import { meta } from '@/_lib/constants/meta'
import type { Metadata } from 'next'
import { View } from '@/_lib/components/basics/view/view'
import { notion_env, site_env } from '@/env'
import { Providers } from '@/_lib/components/providers'
import { Navigation } from '@/_lib/components/layout/navigation/navigation'
import { getPost } from '@/_lib/utils/fetch/notion'
import { processedBlock } from '@/_lib/utils/block-processing/process-block'
import { BackgroundControl } from '@/_lib/components/layout/background/background-control'
import { getBackgroundImgs } from '@/_lib/utils/fetch/get-background-imgs'

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.siteDiscription,
  authors: [{ name: 'Seungyoon Yu', url: meta.og.url }],
  creator: 'Seungyoon Yu',
  publisher: 'Seungyoon Yu',

  openGraph: {
    url: meta.og.url,
    title: meta.og.title,
    type: meta.og.type,
    description: meta.og.description,
    images: meta.og.images.src,
    siteName: meta.og.title,
  },
  alternates: {
    canonical: site_env.root,
    types: {
      'application/rss+xml': [{ url: 'feed.xml', title: 'RSS' }],
    },
  },
  verification: {
    google: site_env.gv,
    other: {
      'naver-site-verification': site_env.nv,
    },
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const profile = await getPost(notion_env.about_id)
  const blocks = await processedBlock(profile)
  const imgSrcList = await getBackgroundImgs()

  return (
    <html lang="ko">
      <Providers>
        <View as="body">
          <Navigation profile={blocks} />
          <BackgroundControl imgSrcList={imgSrcList} />
          {children}
        </View>
      </Providers>
    </html>
  )
}
