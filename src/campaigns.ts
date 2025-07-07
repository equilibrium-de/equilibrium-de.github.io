export type Campaign = {
	name: string;
	startedAt: string; // 2025-07-03T01:02:03.456Z
	endedAt: string;
	type: "NftHolder" | "TwitterBoost";
	boost: number;
	tokenId?: number;
	nftContracts?: string[];
};

export const CAMPAIGNS: Campaign[] = [
	{
		name: "smMON boost",
		startedAt: "2025-07-03T01:02:03.456Z",
		endedAt: "2026-07-03T01:02:03.456Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 411,
	},
	{
		name: "The10kSquad nft",
		startedAt: "2025-07-03T01:02:03.456Z",
		endedAt: "2026-07-03T01:02:03.456Z",
		type: "NftHolder",
		boost: 2,
		nftContracts: ["0x3a9454c1b4c84d1861bb1209a647c834d137b442"],
	},
];

const generate = () => {
	return JSON.stringify(CAMPAIGNS);
};

export default { generate };
