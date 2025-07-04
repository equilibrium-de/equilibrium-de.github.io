export type Campaign = {
	name: string;
	startedAt: string; // 2025-07-03T01:02:03.456Z
	endedAt: string;
	type: "NftHolder" | "TwitterBoost";
	boost: number;
	tokenId: number;
	nftContracts?: string[];
};

export const CAMPAIGNS: Campaign[] = [
	{
		name: "smMON boost",
		startedAt: "2025-07-03T01:02:03.456Z",
		endedAt: "2025-07-03T01:02:03.456Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 411,
	},
];

const generate = () => {
	return JSON.stringify(CAMPAIGNS);
};

export default { generate };
