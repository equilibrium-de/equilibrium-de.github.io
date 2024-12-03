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
