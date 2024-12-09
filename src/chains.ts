import { Ecosystem, ECOSYSTEMS } from "./ecosystems";
import { hasUnique } from "./utils";

type Chain = {
	cid: number; // pk
	name: string;
	ecosystemName: Ecosystem["name"]; // fk to ecosystems
	displayName?: string;
	id?: number | string; // internal chain id like 17000 for holesky
};

const CHAINS: Chain[] = [
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
		name: "holesky",
		displayName: "Holesky",
		id: 17000,
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
		name: "solana testnet",
		displayName: "Solana Testnet",
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
