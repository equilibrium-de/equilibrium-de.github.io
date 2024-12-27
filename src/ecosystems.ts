export type Ecosystem = {
	name: "evm" | "solana" | "aptos" | "sui"; // pk
	displayName?: string;
	subtitle?: string;
};

export const ECOSYSTEMS: Ecosystem[] = [
	{
		name: "evm",
		displayName: "Ethereum + 94",
		subtitle: "Arbitrum, BNB, Base, etc.",
	},
	{
		name: "solana",
		displayName: "Solana",
	},
	{
		name: "sui",
		displayName: "Sui",
	},
	{
		name: "aptos",
		displayName: "Aptos",
	},
];

const generate = () => {
	return JSON.stringify(ECOSYSTEMS);
};

export default { generate };
