// GetNft.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import './GetNft.css';

interface GetNftProps {
  address: string;
  onGetNft: (nftData: any) => void; // Adjust the type of nftData based on your response structure
}

function GetNft({ address, onGetNft }: GetNftProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [nftData, setNftData] = useState<any[]>([]);
  const [inputAddress, setInputAddress] = useState(address);

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAddress(event.target.value);
  };

  const handleGetNft = () => {
    setIsLoading(true);

    const apiKey = env.POLYGON_API_KEY;
    const url = `https://eth-sepolia.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;

    const options = {
      method: 'GET',
      url: url,
      params: { owner: inputAddress, withMetadata: 'true', pageSize: '100' },
      headers: { accept: 'application/json' },
    };

    axios
      .request(options)
      .then((response) => {
        const nfts = response.data.ownedNfts;
        console.log(nfts);
        // Extract names and descriptions of the NFTs
        const nftInfo = nfts.map((nft: any) => ({
          name: nft.contractMetadata.name,
          description: nft.description,
          media: nft.media[0].raw,
        }));

        // Call the onGetNft callback with the extracted data
        onGetNft(nftInfo);

        setIsLoading(false);
        setNftData(nftInfo);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setNftData([]);
      });
  };

  useEffect(() => {
    // You can add any additional logic here when the address prop changes.
    // For example, you may want to re-fetch data.
    setInputAddress(address);
  }, [address]);

  return (
    <div>
      <h3>Get NFT</h3>
      <div>
        <input
          type="text"
          placeholder="Enter Ethereum Address"
          value={inputAddress}
          onChange={handleAddressChange}
        />
        <button onClick={handleGetNft}>Get NFT</button>
      </div>
  
      {isLoading ? (
        <p>Loading NFT data...</p>
      ) : (
        <div>
          {nftData.length === 0 ? (
            <p>No NFTs found for the given address.</p>
          ) : (
            <ul className="nft-list cards">
              {nftData.filter((nft: any) => nft.media).map((nft: any, index: number) => (
                <li key={index} className="nft-tile">
                  <strong>Name:</strong> {nft.name}
                  <br />
                  <strong>Description:</strong> {nft.description}
                  <br />
                  {nft.media.toLowerCase().startsWith('data:image/svg') ? (
                    <img
                      src={nft.media}
                      alt="NFT"
                      style={{ width: '200px', height: '200px' }}
                    />
                  ) : nft.media.startsWith('ipfs://') ? (
                    <img
                      src={`https://ipfs.io/ipfs/${nft.media.split('ipfs://')[1]}`}
                      alt="NFT"
                      style={{ width: '200px', height: '200px' }}
                    />
                  ) : (
                    <p>Unsupported image format</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
  

              }
  export default GetNft;