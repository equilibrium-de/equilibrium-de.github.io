import { CHAIN_IDS } from "./chains";
import { hasUnique } from "./utils";

export type Token = {
	id: number; // pk
	address?: string; // no address for future tokens
	name: string;
	decimals: number;
	cid: number; // fk to chain id
	displayName?: string;
};

export const TOKENS: Token[] = [
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
		cid: 2,
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
	{
		// test btc group 11-15
		id: 11,
		address: "x",
		cid: 2,
		name: "IBTC",
		displayName: "InterBTC",
		decimals: 18,
	},
	{
		id: 12,
		address: "x",
		cid: 2,
		name: "eBTC",
		displayName: "ether.fi Staked BTC",
		decimals: 18,
	},
	{
		id: 13,
		address: "x",
		cid: 2,
		name: "WBTC",
		displayName: "Wrapped BTC",
		decimals: 18,
	},
	{
		id: 14,
		address: "x",
		cid: 2,
		name: "dlcBTC",
		decimals: 18,
	},
	{
		id: 15,
		address: "x",
		cid: 2,
		name: "TBTC",
		displayName: "tBTC",
		decimals: 18,
	},
	{
		// test eth group 21-25
		id: 21,
		address: "x",
		cid: 2,
		name: "ETH",
		displayName: "Ether",
		decimals: 18,
	},
	{
		id: 22,
		address: "x",
		cid: 2,
		name: "amphrETH",
		displayName: "Amphor ETH",
		decimals: 18,
	},
	{
		id: 23,
		address: "x",
		cid: 2,
		name: "uniETH",
		displayName: "Universal ETH",
		decimals: 18,
	},
	{
		id: 24,
		address: "x",
		cid: 2,
		name: "agETH",
		displayName: "Kelp Gain",
		decimals: 18,
	},
	{
		id: 25,
		address: "x",
		cid: 2,
		name: "amphr2ETH",
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
