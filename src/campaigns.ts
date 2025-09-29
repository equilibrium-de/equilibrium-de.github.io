type BoostBase = {
	name: string;
	startedAt: string;
	endedAt: string;
	type:
		| "NftHolder"
		| "TwitterBoost"
		| "TokenBoost"
		| "SummerMadness"
		| "SummerGiveaway"
		| "ZerionTokenBoost";
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
type ZerionTokenBoost = BoostBase & {
	type: "ZerionTokenBoost";
	tokenId: number;
};

type Campaign =
	| NftHolderBoost
	| TwitterBoost
	| TokenBoost
	| SummerGiveaway
	| SummerMadness
	| ZerionTokenBoost;

export const CDN_ORIGIN = "https://content.enjoyoors.xyz";

export const CAMPAIGNS: Campaign[] = [
	{
		name: "Zerion Wallet Boost",
		startedAt: "2025-09-29T10:00:00.000Z",
		endedAt: "2025-10-06T13:00:00.000Z",
		type: "ZerionTokenBoost",
		boost: 20,
		tokenId: 2,
	},
];

const generate = () => {
	return JSON.stringify(CAMPAIGNS);
};

export default { generate };
