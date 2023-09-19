// GetNft.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

interface GetNftProps {
  address: string;
  onGetNft: (nftData: any) => void; // Adjust the type of nftData based on your response structure
}

function GetNft({ address, onGetNft }: GetNftProps) {
  useEffect(() => {
    // const apiKey = env.SEPOLIA_API_KEY;
    const apiKey = env.POLYGON_API_KEY;
    
    const url = `https://eth-sepolia.g.alchemy.com/nft/v2/${apiKey}/getNFTs`

    const options = {
      method: 'GET',
      url: url,
      params: { owner: address, withMetadata: 'true', pageSize: '100' },
      headers: { accept: 'application/json' },
    };
    interface NftInfo {
  name: string;
  description: string;
}

    axios
      .request(options)
      .then((response) => {
        const nfts = response.data.ownedNfts;
        // Extract names and descriptions of the NFTs
        const nftInfo = nfts.map((nft: any) => ({
          name: nft.contractMetadata.name,
          description: nft.description,
        }));
    
        // Call the onGetNft callback with the extracted data
        onGetNft(nftInfo);
      })
    
      .catch((error) => {
        console.error(error);
      });
  }, [address, onGetNft]);

  return (
    <div>
      {/* Your component's UI goes here */}
    </div>
  );
}

export default GetNft;
