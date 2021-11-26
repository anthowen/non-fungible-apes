import React from 'react'
import MintBox from 'containers/MintBox'
import type { NextPage } from 'next'
import Head from 'next/head'

import { reNFAInterface } from '../contracts/interfaces'
import { ReNonFungibleApes as CA } from '../contracts/address.json'
import { useContractFunction, useEthers } from '@usedapp/core'
import { Contract } from 'ethers'

const MintPage: NextPage = () => {
  const { account, library } = useEthers()
  const [contract, setContract] = React.useState(new Contract(CA, reNFAInterface))
  const { state: stateClaim, send: sendClaim } = useContractFunction(contract, "claim")

  React.useEffect(() => {
    if (account && library) {
      setContract(new Contract(CA, reNFAInterface, library.getSigner(account)))
    }
  }, [account, library]);

  const handleMint = async (id: number) => {
    await sendClaim(id);
  }

  console.log({stateClaim});
  
  return (
    <div className="block">
      <Head>
        <title>Mint - ReNonFungibleApes</title>
        <meta
          name="description"
          content="This is the page for minting ReNonFungibleApes"
        />
      </Head>

      <div className="flex w-10/12 mx-auto">
        <MintBox className="mx-auto" onMintClick={handleMint} />
      </div>
    </div>
  )
}

export default MintPage
