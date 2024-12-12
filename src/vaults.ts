import { CHAIN_IDS } from "./chains";
import { TOKEN_IDS } from "./tokens";
import { hasUnique } from "./utils";

type Vault = {
	id: number; // pk
	address: string;
	withdrawalApproverAddress: string;
	tokenId: number; // fk to token
	displayName?: string;
};

const VAULTS: Vault[] = [
	{
		id: 1,
		tokenId: 3,
		address: "0x7dCBc948D57BC757391832B809490941473817eD",
		withdrawalApproverAddress: "0x90eA4C583aE79f1DABD8A46Fe5AF20952B61B706",
	},
	{
		id: 2,
		tokenId: 4,
		address: "H7C5br4xbRa8C3CrKAYb3iiwoQzmwWwWDeyg7JV31ZNa",
		withdrawalApproverAddress: "B6vVuf2Q1TGp1PnoyiyHiLGYZBXRBuj9M82TnPTcvTbg",
	},
];

export const hasCorrectToken = (vault: Vault) =>
	TOKEN_IDS.includes(vault.tokenId);

const generate = () => {
	if (!hasUnique("id", VAULTS)) {
		throw new Error("Vault ids must be unique");
	}
	if (!VAULTS.every(hasCorrectToken)) {
		throw new Error("Some vault has incorrect token");
	}

	return JSON.stringify(VAULTS);
};

export default { generate };
