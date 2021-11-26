import { utils } from 'ethers'
import ReNFAAbi from './abis/ReNonFungibleApes.json'

const { Interface } = utils

export const reNFAInterface = new Interface(ReNFAAbi.abi)

