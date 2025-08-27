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

export const CAMPAIGNS: Campaign[] = [
	{
		name: "Fourth summer giveaway",
		startedAt: "2025-08-25T13:00:00.000Z",
		endedAt: "2025-09-01T13:00:00.000Z",
		type: "SummerGiveaway",
		giveawayUrl: "https://x.com/enjoyoorsxyz/status/1959989147126411324",
		boost: 1,
	},

	{
		name: "cshMON boost",
		startedAt: "2025-08-27T13:00:00.000Z",
		endedAt: "2025-09-10T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 476,
		partnerTwitter: "@curvance",
		partnerName: "Curvance",
	},

	{
		name: "PumpBTC",
		startedAt: "2025-08-21T13:00:00.000Z",
		endedAt: "2025-09-04T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 430,
		partnerTwitter: "@Pumpbtcxyz",
		partnerName: "Pumpbtc",
	},
];

const generate = () => {
	return JSON.stringify(CAMPAIGNS);
};

export default { generate };
