import Navbar from '../../containers/Navbar'
import { useEthers } from '@usedapp/core'
import { useReconnectWallet } from '../../hooks'
import { removeWalletAddress } from '../../hooks/useReconnectWallet'
import Message from '../../components/Message'
import { useRouter } from 'next/router'
import useSwitchWalletNetwork from '../../hooks/useSwitchNetwork'

interface Props {
  children?: React.ReactNode
}

const generalRoutes = ['/about']

export default function Layout({ children }: Props) {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  const { pathname } = useRouter()

  const handleDisconnect = () => {
    deactivate()
    removeWalletAddress()
  }

  useReconnectWallet()
  useSwitchWalletNetwork()

  return (
    <>
      <Navbar
        address={account}
        onConnect={() => activateBrowserWallet()}
        onDisconnect={handleDisconnect}
      />
      <div className="flex pt-[96px]">
        <main className="flex-1 overflow-y-scroll bg-white main-container">
          {generalRoutes.includes(pathname) || account ? (
            <div className="max-w-[1120px] mx-auto my-[32px]">{children}</div>
          ) : !account ? (
            <Message
              className="mt-12 text-center"
              type="error"
              text="Please connect your wallet"
            />
          ) : null}
        </main>
      </div>
    </>
  )
}
