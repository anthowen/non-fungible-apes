import React from 'react'
import MintBox from 'containers/MintBox'
import type { NextPage } from 'next'
import Head from 'next/head'

import { reNFAInterface } from '../contracts/interfaces'
import { ReNonFungibleApes as CA } from '../contracts/address.json'
import { useContractFunction, useEthers } from '@usedapp/core'
import { Contract } from 'ethers'
import Message from '../components/Message'
import Spinner from 'components/Spinner/Spinner'

const MintPage: NextPage = () => {
  const { account, library } = useEthers()
  const [contract, setContract] = React.useState(
    new Contract(CA, reNFAInterface)
  )
  const { state: stateClaim, send: sendClaim } = useContractFunction(
    contract,
    'claim'
  )

  React.useEffect(() => {
    if (account && library) {
      setContract(new Contract(CA, reNFAInterface, library.getSigner(account)))
    }
  }, [account, library])

  const handleMint = async (id: number) => {
    await sendClaim(id)
  }

  return (
    <div className="block">
      <Head>
        <title>Mint - ReNonFungibleApes</title>
        <meta
          name="description"
          content="This is the page for minting ReNonFungibleApes"
        />
      </Head>

      <div className="flex flex-col items-center justify-center w-10/12 mx-auto">
        <MintBox className="mx-auto" onMintClick={handleMint} />
        <div className="flex items-center mt-10 space-x-4">
          {stateClaim.status === 'Mining' ? (
            <>
              <Message text="The transaction is in progress" />
              <Spinner className="text-indigo-600" />
            </>
          ) : stateClaim.status === 'Success' ? (
            <Message type="success" text="Successfully minted" />
          ) : stateClaim.status === 'Fail' ? (
            <Message  type="error" text="There was an error during the transaction" />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default MintPage