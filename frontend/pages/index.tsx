import useAccountNFTs from 'hooks/useAccountNFTs'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const { tokenMetadatas } = useAccountNFTs()

  console.log('metadata', tokenMetadatas.length);
  
  return (
    <div className="block">
      <Head>
        <title>Home - ReNonFungibleApes</title>
        <meta name="description" content="Home page for Regenerated Non-fungible Apes" />
      </Head>

      {tokenMetadatas
        .filter((d) => !!d)
        .map(({ description, name, image }) => (
          <div key={name}>
            <h1 className="text-lg text-red-500">{name}</h1>
            <p>{description}</p>
            <Image src={image} alt={name} width="250" height="250" />
          </div>
        ))}
    </div>
  )
}

export default Home
