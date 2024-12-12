import { hasUnique } from "./utils";

type Group = {
	name: string;
	vaultIds: number[];
	rank?: number;
};

const GROUPS: Group[] = [
	{
		name: "BTC",
		vaultIds: [1],
	},
	{
		name: "ETH",
		vaultIds: [1],
	},
	{
		name: "ETH L2",
		vaultIds: [1],
	},
	{
		name: "L1 Networks",
		vaultIds: [1],
	},
	{
		name: "LP tokens",
		vaultIds: [1, 2],
	},
	{
		name: "Governance tokens",
		vaultIds: [2],
	},
	{
		name: "Memes",
		vaultIds: [1],
	},
	{
		name: "Stablecoins",
		vaultIds: [1],
	},
	{
		name: "Others",
		vaultIds: [1],
	},
];

const generate = () => {
	return JSON.stringify(GROUPS);
};

export default { generate };
