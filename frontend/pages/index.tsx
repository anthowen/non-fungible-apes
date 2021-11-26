import NFTBox from 'components/NFTBox/NFTBox'
import useAccountNFTs from 'hooks/useAccountNFTs'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const { tokenMetadatas } = useAccountNFTs()

  return (
    <div className="block">
      <Head>
        <title>Home - ReNonFungibleApes</title>
        <meta
          name="description"
          content="Home page for Regenerated Non-fungible Apes"
        />
      </Head>

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
    </div>
  )
}

export default Home
