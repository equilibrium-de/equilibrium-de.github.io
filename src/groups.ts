import { hasUnique } from "./utils";

type Group = {
	name: string;
	tokenIdList: number[];
	rank?: number;
};

const GROUPS: Group[] = [
	{
		name: "BTC",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "ETH",
		tokenIdList: [21, 22, 23, 24, 25],
	},
	{
		name: "ETH L2",
		tokenIdList: [22, 23, 21, 25.24],
	},
	{
		name: "L1 Networks",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "LP tokens",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "Governance tokens",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "Memes",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "Stablecoins",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "Others",
		tokenIdList: [11, 12, 13, 14, 15],
	},
];

const generate = () => {
	return JSON.stringify(GROUPS);
};

export default { generate };
