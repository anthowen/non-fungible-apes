import React from 'react';
import Button from '../../components/Button'
import Input from '../../components/Input'

interface Props {
  /**
   * Class name to be added to the root element.
   */
  className?: string;
  /**
   * Callback to be called when the mint button is clicked.
   */
  onMint?: (id: number) => void  
}

function MintBox({ onMint, className }: Props) {
  const [tokenId, setTokenId] = React.useState<number | undefined>(undefined);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenId(parseInt(e.target.value));
  };

  const handleMintClick = () => {
    if (tokenId && onMint)
      onMint(tokenId);
  }

  return (
    <div className={`flex items-center space-x-4 ${className || ''}`}>
      <Input type="number" className="flex-1" value={tokenId} onChange={handleInputChange} placeholder="Token id" />
      <Button primary onClick={handleMintClick}>Mint</Button>
    </div>
  )
}

export default MintBox
