import { CHAIN_IDS } from "./chains";
import { hasUnique } from "./utils";

type Token = {
	id: number; // pk
	name: string;
	decimals: number;
	cid: number; // fk to chain id
	displayName?: string;
};

const TOKENS: Token[] = [
	{
		id: 1,
		cid: 1,
		name: "ETH",
		decimals: 18,
	},
	{
		id: 2,
		cid: 1,
		name: "USDc",
		decimals: 6,
	},
];

export const hasCorrectChain = (token: Token) => CHAIN_IDS.includes(token.cid);

const generate = () => {
	if (!hasUnique("id", TOKENS)) {
		throw new Error("Token ids must be unique");
	}
	if (!TOKENS.every(hasCorrectChain)) {
		throw new Error("Some token has incorrect cid");
	}

	return JSON.stringify(TOKENS);
};

export default { generate };
