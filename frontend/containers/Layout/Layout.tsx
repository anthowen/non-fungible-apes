import Navbar from '../../containers/Navbar'
import { useEthers } from '@usedapp/core'
import { useReconnectWallet } from '../../hooks'
import { removeWalletAddress } from '../../hooks/useReconnectWallet'

interface Props {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { activateBrowserWallet, account, deactivate } = useEthers()

  const handleDisconnect = () => {
    deactivate()
    removeWalletAddress()
  }

  useReconnectWallet()

  return (
    <>
      <Navbar
        address={account}
        onConnect={() => activateBrowserWallet()}
        onDisconnect={handleDisconnect}
      />
      <div className="flex pt-[96px]">
        <main className="flex-1 overflow-y-scroll bg-white main-container">
          {!account && <h1 className="text-lg text-center text-red-500">Please connect your wallet</h1>}
          <div className="max-w-[1120px] mx-auto my-[32px]">{children}</div>
        </main>
      </div>
    </>
  )
}
