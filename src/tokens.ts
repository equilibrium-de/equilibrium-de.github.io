import { CHAIN_IDS } from "./chains";
import { hasUnique } from "./utils";

export type Token = {
	id: number; // pk
	address: string;
	name: string;
	decimals: number;
	cid: number; // fk to chain id
	displayName?: string;
};

const TOKENS: Token[] = [
	{
		id: 1,
		address: "x",
		cid: 1,
		name: "ETH",
		decimals: 18,
	},
	{
		id: 2,
		address: "y",
		cid: 1,
		name: "USDc",
		decimals: 6,
	},
	{
		id: 3,
		address: "0x748017AEA3d1075df4Fd1e1e743780526757b379",
		cid: 9,
		name: "Token1",
		decimals: 18,
	},
	{
		id: 4,
		address: "mZf5RyCosgCz93YBWzLf7876ThhviA5J5c9LdQgX5Kc",
		cid: 6,
		name: "Token2",
		decimals: 18,
	},
];

export const TOKEN_IDS = TOKENS.map((x) => x.id);

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
