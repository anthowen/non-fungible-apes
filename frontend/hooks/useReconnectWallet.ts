import { useEffect } from 'react'
import { useEthers } from '@usedapp/core'

const ADDRESSS_STORAGE_KEY = '_ConnectedWalletAddress_'

export default function useReconnectWallet() {
  const { activateBrowserWallet, account } = useEthers()

  useEffect(() => {
    const sessionAddress = localStorage.getItem(ADDRESSS_STORAGE_KEY)

    if (sessionAddress && !account) {
      activateBrowserWallet()
    }
  }, [account, activateBrowserWallet])

  useEffect(() => {
    if (account) {
      localStorage.setItem(ADDRESSS_STORAGE_KEY, account)
    }
  }, [account])
}

export function removeWalletAddress() {
  localStorage.removeItem(ADDRESSS_STORAGE_KEY)
}
