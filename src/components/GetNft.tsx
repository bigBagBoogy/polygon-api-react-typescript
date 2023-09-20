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
      <div>
      <h2>Get NFT</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Ethereum Address"
          value={address}
          onChange={handleAddressChange}
        />
        <button onClick={handleGetNft}>Get NFT</button>
      </div>

      {isLoading ? (
        <p>Loading NFT data...</p>
      ) : (
        <div>{nftData.length === 0 ? (
          <p>No NFTs found for the given address.</p>
        ) : (
          <ul>
            {nftData.map((nft: NftInfo, index: number) => (
              <li key={index}>
                <strong>Name:</strong> {nft.name}
                <br />
                <strong>Description:</strong> {nft.description}
              </li>
            ))}
          </ul>
    
        
                )}
        </div>
      )}
    </div>
    </div>
  );
}

export default GetNft;
