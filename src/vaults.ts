import { Chain, CHAINS } from "./chains";
import { Token, TOKENS } from "./tokens";
import { hasUnique } from "./utils";

type Vault = {
	id: number; // pk
	address?: string; // no address for future vaults
	withdrawalApproverAddress?: string;
	tokenIdList: number[]; // fk to token
	displayName?: string;
};

type VaultExtended = Vault & {
	tokens: Token[];
	chain: Chain;
};

export const VAULTS: Vault[] = [
	{
		id: 1,
		tokenIdList: [3],
		address: "0x7dCBc948D57BC757391832B809490941473817eD",
		withdrawalApproverAddress: "0x90eA4C583aE79f1DABD8A46Fe5AF20952B61B706",
	},
	{
		id: 2,
		tokenIdList: [4, 5],
		address: "FPJXTFVW7nDovLWRdtCmjtuFyBymqfgrcfLkcPrMnZPY",
		withdrawalApproverAddress: "2qqQDEUwNsofpTt9mqr6UGzBJbCHx1QzThY6dbwtM88L",
	},
	{
		id: 3,
		tokenIdList: [11, 12, 13, 14, 15, 21, 22, 23, 24, 25],
	},
	{
		id: 4,
		tokenIdList: [15, 21],
	},
	{
		id: 5,
		tokenIdList: [1],
	},
	{
		id: 6,
		tokenIdList: [2],
	},
	{
		id: 7,
		tokenIdList: [26],
		address: "0xee0760309f6ac501828ba562b3a56d86e55c896fb272f474f3d98ae1c01c8f37",
		withdrawalApproverAddress: "0xfc1ce34c7bd5207295026d85e99386f596da0de431376fb995543690a1b3a9bc",
	},
	{
		id: 8,
		tokenIdList: [27],
		address: "0:a27885fa4db58f185341595ddd9f6a186c7ffe31b57e6bfcd5f96a8edd7c157d",
	},
];

const VAULTS_EXTENDED: VaultExtended[] = VAULTS.map((x) => {
	const tokens = TOKENS.filter((t) => x.tokenIdList.includes(t.id));
	if (!tokens.length) {
		throw new Error(`Tokens for vault ${x.id} not found`);
	}
	const chain = CHAINS.find((c) => c.cid === tokens[0].cid);
	if (!chain) {
		throw new Error(`Chain for vault ${x.id} not found`);
	}
	return { ...x, tokens, chain };
});

const generate = () => {
	if (!hasUnique("id", VAULTS_EXTENDED)) {
		throw new Error("Vault ids must be unique");
	}

	return JSON.stringify(VAULTS_EXTENDED);
};

export default { generate };
