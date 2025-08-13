type BoostBase = {
	name: string;
	startedAt: string;
	endedAt: string;
	type:
		| "NftHolder"
		| "TwitterBoost"
		| "TokenBoost"
		| "SummerMadness"
		| "SummerGiveaway";
	boost: number;
};

type NftHolderBoost = BoostBase & {
	type: "NftHolder";
	nftStandard: "erc721" | "erc1155";
	nftContracts: {
		title?: string;
		address: string;
		imgSrc: string;
		uri: string;
		tokenId?: number;
	}[];
};

type TwitterBoost = BoostBase & {
	type: "TwitterBoost";
	partnerTwitter: string;
	partnerName: string;
	tokenId: number;
};

type SummerMadness = BoostBase & {
	type: "SummerMadness";
	partnerTwitter: string;
	partnerName: string;
	tokenId: number;
	nftBoost?: number;
	combinedBoost?: number;
	activatesViaTwitter?: boolean;
	nftStandard?: "erc721" | "erc1155";
	nftContracts?: {
		title?: string;
		address: string;
		imgSrc: string;
		uri: string;
		tokenId?: number;
	}[];
};

type TokenBoost = BoostBase & {
	type: "TokenBoost";
	tokenId: number;
};
type SummerGiveaway = BoostBase & {
	type: "SummerGiveaway";
	giveawayUrl: string;
};

type Campaign =
	| NftHolderBoost
	| TwitterBoost
	| TokenBoost
	| SummerGiveaway
	| SummerMadness;

export const CDN_ORIGIN = "https://content.enjoyoors.xyz";

const MOCK_CAMPAIGNS = [
	{
		name: "muBOND summer",
		startedAt: "2025-07-04T13:00:00.000Z",
		endedAt: "2025-08-11T13:00:00.000Z",
		type: "SummerMadness",
		boost: 5,
		tokenId: 438, // wmon
		partnerTwitter: "@MuDigitalHQ",
		partnerName: "Mu Digital",
		nftStandard: "erc721",
		nftBoost: 2,
		combinedBoost: 7,
		nftContracts: [
			{
				address: "0x6370b232d67956bfEAb57508Eb889249664DBE71",
				imgSrc: `https://content.enjoyoors.xyz/img/mu-nft.png`,
				uri: "https://magiceden.io/collections/monad-testnet/0x6370b232d67956bfeab57508eb889249664dbe71",
			},
		],
	},
];

export const CAMPAIGNS: Campaign[] = [
	{
		name: "cUSDC boost",
		startedAt: "2025-08-14T13:00:00.000Z",
		endedAt: "2025-08-28T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 473,
		partnerTwitter: "@curvance",
		partnerName: "Curvance",
	},
	{
		name: "cWBTC boost",
		startedAt: "2025-08-14T13:00:00.000Z",
		endedAt: "2025-08-28T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 474,
		partnerTwitter: "@curvance",
		partnerName: "Curvance",
	},
	{
		name: "Second summer giveaway",
		startedAt: "2025-08-11T13:00:00.000Z",
		endedAt: "2025-08-18T13:00:00.000Z",
		type: "SummerGiveaway",
		giveawayUrl: "https://x.com/enjoyoorsxyz/status/1954894552159916282",
		boost: 1,
	},

	{
		name: "OctoSwap LP gigaETH",
		startedAt: "2025-08-06T13:00:00.000Z",
		endedAt: "2025-08-20T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 471,
		partnerTwitter: "@OctoSwapDex",
		partnerName: "OctoSwapDex",
	},
	{
		name: "OctoSwap LP gigaETH",
		startedAt: "2025-08-06T13:00:00.000Z",
		endedAt: "2025-08-20T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 472,
		partnerTwitter: "@OctoSwapDex",
		partnerName: "OctoSwapDex",
	},
	{
		name: "Overnads",
		startedAt: "2025-08-12T13:00:00.000Z",
		endedAt: "2025-08-26T13:00:00.000Z",
		type: "NftHolder",
		nftStandard: "erc1155",
		boost: 2,
		nftContracts: [
			{
				address: "0x49D54cd9CA8C5ecADbB346DC6B4e31549F34E405",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2FO1GmUbX%252FvNODx2ebXhWa13YNaLqlU1ap4vRPu9NeHK1a0owFF3TAnFPHmWE1asq0O9SBzFBg2lv0AJyrrwIBEkXzq4U6A4o%252FD3DGncPUZ7nNgPnggI48%252BjnaBUqNUSchKnQ2hvc0RuOt%252FLonB6i96A%253D%253D`,
				title: "Overnads: Whitelist Pass",
				uri: "https://magiceden.io/collections/monad-testnet/0x49D54cd9CA8C5ecADbB346DC6B4e31549F34E405",
				tokenId: 0,
			},
			{
				address: "0x66B655de495268eb4C7B70Bf4Ac1AB4094589F93",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2FxGIQsppdhx9jPELiWEASU2LsiUBmfVp%252Bclc%252FufPLbAeZkbIIdMQWrND1kpiC3Zk8zWq2JjL6qDi744rf32gJVkoTZHCY4Fnn2gJQE1HXisROCnXe7vJKXw2VBy6iBo3w52uDTQmyUfrVQFf32ONuZw%253D%253D`,
				title: "overnads",
				uri: "https://magiceden.io/collections/monad-testnet/0x66B655de495268eb4C7B70Bf4Ac1AB4094589F93",
				tokenId: 0,
			},
			{
				address: "0xE07e2B21FFEa47f5092CB03b3a19350002715299",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2FLFeMvbt0QQs11I7vzdGRoEZ26mOcTVaoQBGGYqklhnwdZkysFD1cw6yDlOljSPGQIPR7EYXlzXa%252FbY6b%252FfSBjOtO%252BcX8%252BUvasEWcrBHuG3ZfUwdTnAACLSLiuA51Wy%252BBkABn51lja2rs1YVoJkhKWw%253D%253D`,
				title: "Oververse",
				uri: "https://magiceden.io/collections/monad-testnet/oververse",
				tokenId: 0,
			},
		],
	},
];

const generate = () => {
	return JSON.stringify(CAMPAIGNS);
};

export default { generate };
