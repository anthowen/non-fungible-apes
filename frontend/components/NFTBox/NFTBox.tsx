import Image from 'next/image'

interface Props {
  /**
   * Name of the NFT
   */
  name?: string
  /**
   * Description of the NFT
   */
  description?: string
  /**
   * Description of the NFT
   */
  image: string
  /**
   * Class names to be added to the root element.
   */
  className?: string
  /**
   * Width of the image
   */
  width: number
  /**
   * Height of the image
   */
  height: number
}

function NFTBox({ className, description, image, name, width, height }: Props) {
  return (
    <div className={`flex items-center space-y-12 sm:space-x-12 mx-auto flex-col sm:flex-row ${className || ''}`}>
      <div className="block shadow-md">
        <Image src={image} alt={name} width={width} height={height} />
      </div>
      <div className={`flex flex-col space-y-6 p-2`} style={{maxWidth: width * 1.2}}>
        <h1 className="text-xl text-indigo-700">{name}</h1>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default NFTBox
