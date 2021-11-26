import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Message from '../components/Message/Message'
import NFTBox from '../components/NFTBox/NFTBox'
import useAccountNFTs from '../hooks/useAccountNFTs'

const Home: NextPage = () => {
  const { isConnected, tokenMetadatas } = useAccountNFTs()

  return (
    <div className="block">
      <Head>
        <title>Home - ReNonFungibleApes</title>
        <meta
          name="description"
          content="Home page for Regenerated Non-fungible Apes"
        />
      </Head>

      {isConnected && tokenMetadatas.length === 0 ? (
        <div className="flex items-center justify-center space-x-8">
          <Message text="You don't have any NFT yet." />
          <Link href="/mint">
            <a className="text-gray-600 hover:underline">Claim here</a>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col space-y-12">
          {tokenMetadatas
            .filter((d) => !!d)
            .map(({ description, name, image }) => (
              <NFTBox
                key={name}
                description={description}
                name={name}
                image={image}
                width={250}
                height={250}
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default Home
