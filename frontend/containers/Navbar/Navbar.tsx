import Button from '../../components/Button'
import Link from 'next/link'
import { shortenWalletAddress } from '../../utils/string'

interface Props {
  address?: string | null
  onDisconnect?: () => void
  onConnect?: () => void
}

function Navbar({ address, onDisconnect, onConnect }: Props) {
  return (
    <div className="flex justify-between px-[48px] py-[20px] items-center fixed top-0 w-full shadow">
      <div className="flex items-center">
        <Link href="/" passHref>
          <span className="mx-3 text-2xl font-semibold cursor-pointer">
            ReNFA
          </span>
        </Link>
        <ul className="ml-6">
          <li>
            <Link href="/mint">
              <a>Mint</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
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
