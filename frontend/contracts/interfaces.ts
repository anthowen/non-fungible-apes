import { utils } from 'ethers'
import ReNFAAbi from '../../hardhat/artifacts/contracts/ReNonFungibleApes.sol/ReNonFungibleApes.json'

const { Interface } = utils

export const reNFAInterface = new Interface(ReNFAAbi.abi)

