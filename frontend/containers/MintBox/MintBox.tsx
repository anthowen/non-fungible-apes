import React from 'react';
import Button from '../../components/Button'
import Input from '../../components/Input'

interface Props {
  className?: string;
  onMintClick?: (id: number) => void  
}

function MintBox({ onMintClick, className }: Props) {
  const [tokenId, setTokenId] = React.useState(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenId(parseInt(e.target.value));
  };

  const handleMintClick = () => {
    onMintClick && onMintClick(tokenId);
  }

  return (
    <div className={`flex items-center space-x-4 ${className || ''}`}>
      <Input type="number" className="flex-1" value={tokenId} onChange={handleInputChange} />
      <Button primary onClick={handleMintClick}>Mint</Button>
    </div>
  )
}

export default MintBox
