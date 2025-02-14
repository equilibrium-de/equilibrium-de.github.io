import { Ecosystem, ECOSYSTEMS } from "./ecosystems";
import { hasUnique } from "./utils";

export type Chain = {
	cid: number; // pk
	name: string;
	ecosystemName: Ecosystem["name"]; // fk to ecosystems
	displayName: string;
	id?: number | string; // internal chain id like 17000 for holesky
};

export const CHAINS: Chain[] = [
	{
		cid: 1,
		ecosystemName: "evm",
		name: "mainnet",
		displayName: "Ethereum",
		id: 1,
	},
	{
		cid: 2,
		ecosystemName: "evm",
		name: "sepolia",
		displayName: "Sepolia",
		id: 11155111,
	},
	{
		cid: 3,
		ecosystemName: "evm",
		name: "arbitrum",
		displayName: "Arbitrum",
		id: 42161,
	},
	{
		cid: 4,
		ecosystemName: "evm",
		name: "bnb mainnet",
		displayName: "BNB Smart Chain",
		id: 56,
	},
	{
		cid: 5,
		ecosystemName: "solana",
		name: "solana mainnet",
		displayName: "Solana",
	},
	{
		cid: 6,
		ecosystemName: "solana",
		name: "solana devnet",
		displayName: "Solana Devnet",
	},
	{
		cid: 7,
		ecosystemName: "evm",
		name: "base",
		displayName: "Base",
		id: 8453,
	},
	{
		cid: 8,
		ecosystemName: "evm",
		name: "polygon",
		displayName: "Polygon",
		id: 137,
	},
	{
		cid: 9,
		ecosystemName: "sui",
		name: "sui mainnet",
		displayName: "Sui",
		id: "mainnet",
	},
	{
		cid: 10,
		ecosystemName: "sui",
		name: "sui testnet",
		displayName: "Sui Testnet",
		id: "testnet",
	},
	{
		cid: 11,
		ecosystemName: "ton",
		name: "ton mainnet",
		displayName: "Ton",
		id: "mainnet",
	},
	{
		cid: 12,
		ecosystemName: "ton",
		name: "ton testnet",
		displayName: "Ton Testnet",
		id: "testnet",
	},
];

export const CHAIN_IDS = CHAINS.map((x) => x.cid);

const hasCorrectEcosystem = (chain: Chain) =>
	ECOSYSTEMS.map((x) => x.name).includes(chain.ecosystemName);

const generate = () => {
	if (!CHAINS.every(hasCorrectEcosystem)) {
		throw new Error("Some chain has incorrect ecosystem");
	}
	if (!hasUnique("cid", CHAINS)) {
		throw new Error("Chain ids must be unique");
	}

	return JSON.stringify(CHAINS);
};

export default { generate };
