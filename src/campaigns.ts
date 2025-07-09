export type Campaign = {
	name: string;
	startedAt: string; // 2025-07-03T01:02:03.456Z
	endedAt: string;
	type: "NftHolder" | "TwitterBoost";
	boost: number;
	tokenId?: number;
	nftStandard?: "erc721" | "erc1155";
	nftContracts?: string[];
	nftUri?: string;
	partnerTwitter?: string;
	partnerName?: string;
};

const nostraStart = "2025-07-09T01:00:00.000Z";
const nostraEnd = "2025-07-23T01:00:00.000Z";

export const CAMPAIGNS: Campaign[] = [
	{
		name: "shMON boost",
		startedAt: "2025-07-03T01:00:00.000Z",
		endedAt: "2025-07-03T01:02:03.456Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 411,
		partnerTwitter: "@0xFastLane",
		partnerName: "Fastlane",
	},
	{
		name: "Nostra boost",
		startedAt: nostraStart,
		endedAt: nostraEnd,
		type: "TwitterBoost",
		boost: 3,
		tokenId: 425,
		partnerTwitter: "@nostrafinance",
		partnerName: "Nostra",
	},
	{
		name: "Nostra boost",
		startedAt: nostraStart,
		endedAt: nostraEnd,
		type: "TwitterBoost",
		boost: 3,
		tokenId: 426,
		partnerTwitter: "@nostrafinance",
		partnerName: "Nostra",
	},
	{
		name: "Nostra boost",
		startedAt: nostraStart,
		endedAt: nostraEnd,
		type: "TwitterBoost",
		boost: 3,
		tokenId: 427,
		partnerTwitter: "@nostrafinance",
		partnerName: "Nostra",
	},
	{
		name: "Nostra boost",
		startedAt: nostraStart,
		endedAt: nostraEnd,
		type: "TwitterBoost",
		boost: 3,
		tokenId: 428,
		partnerTwitter: "@nostrafinance",
		partnerName: "Nostra",
	},
	{
		name: "The10kSquad",
		startedAt: "2025-07-08T01:00:00.000Z",
		endedAt: "2026-07-29T01:00:00.000Z",
		type: "NftHolder",
		nftStandard: "erc721",
		boost: 2,
		nftContracts: ["0x3a9454c1b4c84d1861bb1209a647c834d137b442"],
		nftUri:
			"https://magiceden.io/collections/monad-testnet/0x3a9454c1b4c84d1861bb1209a647c834d137b442",
	},
	{
		name: "LilChogstarts",
		startedAt: "2025-07-01T01:00:00.000Z",
		endedAt: "2026-08-01T01:00:00.000Z",
		type: "NftHolder",
		nftStandard: "erc1155",
		boost: 2,
		nftContracts: ["0x26c86f2835c114571df2b6ce9ba52296cc0fa6bb"],
		nftUri:
			"https://magiceden.io/collections/monad-testnet/0x26c86f2835c114571df2b6ce9ba52296cc0fa6bb",
	},
];

const generate = () => {
	return JSON.stringify(CAMPAIGNS);
};

export default { generate };
