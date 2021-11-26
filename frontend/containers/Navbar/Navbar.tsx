import Button from '../../components/Button'
import Link from 'next/link'
import { shortenWalletAddress } from '../../utils/string'

interface Props {
  /**
   * Address of the connected wallet
   */
  address?: string | null
  /**
   * Callback to be called when the disconnect button is called
   */
  onDisconnect?: () => void
  /**
   * Callback to be called when the connect button is called
   */
  onConnect?: () => void
}

function Navbar({ address, onDisconnect, onConnect }: Props) {
  return (
    <div className="flex justify-between px-[48px] py-[20px] items-center fixed top-0 w-full shadow">
      <div className="flex items-center">
        <Link href="/" passHref>
          <span className="mx-3 text-3xl font-semibold cursor-pointer">
            ReNFA
          </span>
        </Link>
        <ul className="flex ml-6 space-x-6">
          <li>
            <Link href="/mint">
              <a>Mint</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-6">
        <span className="italic text-yellow-400">BSC Testnet</span>
        {address ? (
          <Button onClick={onDisconnect}>
            {shortenWalletAddress(address)}
          </Button>
        ) : (
          <Button primary onClick={onConnect}>
            Connect
          </Button>
        )}
      </div>
    </div>
  )
}

export default Navbar
