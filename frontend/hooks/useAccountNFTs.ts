import { useContractCalls, useEthers, useTokenBalance } from '@usedapp/core'
import { reNFAInterface } from '../contracts/interfaces'
import { ReNonFungibleApes as CA } from '../contracts/address.json'

export default function useAccountNFTs() {
  const { account } = useEthers()
  const balance = useTokenBalance(CA, account)
  const indexes = new Array(balance?.toNumber()).fill(0).map((_, i) => i)

  const tokenIds = useContractCalls(
    account ? indexes.map((i) => ({
      abi: reNFAInterface,
      address: CA,
      method: 'tokenOfOwnerByIndex',
      args: [account, i],
    })) : [],
  )

  let tokenIdNumbers: number[] = []

  try {
    tokenIdNumbers = tokenIds
      .map((id) => (id ? Number(id.toString()) : -1))
      .filter((id) => id > 0)
  } catch (e) {
    console.log(e)
  }

  const tokenURIs = useContractCalls(
    tokenIdNumbers.map((id) => ({
      abi: reNFAInterface,
      address: CA,
      method: 'tokenURI',
      args: [id],
    }))
  )

  // tokenURI is a base64 encoded string of the token metadata, which includes the name, descriptiona and the on-chain SVG image
  const tokenMetadatas = tokenURIs.map((uri) => {
    if (!uri) return null

    try {
      const json = window.atob(uri[0].substring(29))
      return JSON.parse(json)
    } catch (e) {
      console.log('parse error', e)
      return null
    }
  })

  return {
    isConnected: !!account,
    tokenURIs,
    tokenIds,
    tokenMetadatas,
  }
}
