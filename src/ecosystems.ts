export type Ecosystem = {
	name: "evm" | "solana" | "aptos" | "sui"; // pk
	displayName?: string;
};

export const ECOSYSTEMS: Ecosystem[] = [
	{
		name: "evm",
	},
	{
		name: "solana",
	},
	{
		name: "sui",
	},
	{
		name: "aptos",
	},
];

const generate = () => {
	return JSON.stringify(ECOSYSTEMS);
};

export default { generate };
