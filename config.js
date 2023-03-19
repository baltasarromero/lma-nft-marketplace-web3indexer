import nftMarketplaceArtifact from "./artifacts/NFTMarketplace.sol/NFTMarketplace.json" assert { type: "json" };

export const config = {
    providerUrl: "https://sepolia.infura.io/v3/25ac813a98f649fa9535eb1e18a796c4",
    connectionTimeout: 20000,
    schema: {
        ListingCreated: {
            nftAddress: "string",
            tokenId: "number",
            seller: "string",
            price: "number",
            startTimestamp: "number",
            endTimestamp: "number"
        },
    },
    pollInterval: 3000,
    apiPort: 9091,
    contractAddress: "0x7Ca20a4f45861BB10dcc3aEe5328D0c003D06C8e",
    contractAbi: nftMarketplaceArtifact.abi,
};
