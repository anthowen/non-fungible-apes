import { useEffect } from "react"
import { useEthers, ChainId } from "@usedapp/core"

const ALLOWED_NETWORK = ChainId.BSCTestnet

const BSCTestnetInfo = {
  blockExplorerUrls: ['https://testnet.bscscan.com/'],
  chainName: 'Binance Smart Chain Testnet',
  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  nativeCurrency: {
    name: 'Test BNB',
    symbol: 'tBNB',
    decimals: 18,
  }
}

function switchNetwork(chainId: ChainId, info: any) {
  return new Promise(async (resolve) => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      })
      resolve(true)
    } catch (error: any) {
      
      if (error.code === 4902) {
        try {
          console.log('error', error);
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                ...info,
                chainId: `0x${chainId.toString(16)}`,
              },
            ],
          })
          resolve(true)
        } catch (error) {
          resolve(false)
        }
      } else {
        resolve(false)
      }
    }
  })
}

export default function useSwitchWalletNetwork() {
  const { account, active } = useEthers()

  useEffect(() => {
    if (active && !account) {
      console.log('switch network')
      switchNetwork(ALLOWED_NETWORK, BSCTestnetInfo)
    }
  }, [account, active])
}
