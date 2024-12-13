import { Chain, CHAINS } from "./chains";
import { Token, TOKENS } from "./tokens";
import { hasUnique } from "./utils";

type Vault = {
	id: number; // pk
	address: string;
	withdrawalApproverAddress: string;
	tokenIdList: number[]; // fk to token
	displayName?: string;
};

type VaultExtended = Vault & {
	tokens: Token[];
	chain: Chain;
};

const VAULTS: Vault[] = [
	{
		id: 1,
		tokenIdList: [3],
		address: "0x7dCBc948D57BC757391832B809490941473817eD",
		withdrawalApproverAddress: "0x90eA4C583aE79f1DABD8A46Fe5AF20952B61B706",
	},
	{
		id: 2,
		tokenIdList: [4],
		address: "H7C5br4xbRa8C3CrKAYb3iiwoQzmwWwWDeyg7JV31ZNa",
		withdrawalApproverAddress: "B6vVuf2Q1TGp1PnoyiyHiLGYZBXRBuj9M82TnPTcvTbg",
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
