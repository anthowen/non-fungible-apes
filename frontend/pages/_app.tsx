import '../styles/globals.css'
import { ChainId, DAppProvider, Config } from '@usedapp/core'
import type { AppProps } from 'next/app'
import Layout from '../containers/Layout'

const config: Config = {
  readOnlyChainId: ChainId.BSCTestnet,
  readOnlyUrls: {
    [ChainId.BSCTestnet]: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  },
  multicallAddresses: {
    [ChainId.BSCTestnet]: '0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C',
  },
  supportedChains: [ChainId.BSCTestnet],
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DAppProvider>
  )
}

export default MyApp
