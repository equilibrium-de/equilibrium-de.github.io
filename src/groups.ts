import { hasUnique } from "./utils";
import { VAULTS } from "./vaults";

type Group = {
	name: string;
	tokenIdList: number[];
	rank?: number;
};

const GROUPS: Group[] = [
	{
		name: "BTC",
		tokenIdList: [11, 12, 13, 14, 15, 21, 22, 23, 24, 25],
	},
	{
		name: "ETH",
		tokenIdList: [3, 21, 22, 23, 24, 25, 12, 13, 14, 15],
	},
	{
		name: "ETH L2",
		tokenIdList: [22, 23, 21, 25, 24, 15, 14, 13, 12, 11],
	},
	{
		name: "L1 Networks",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "LP tokens",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "Governance tokens",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "Memes",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "Stablecoins",
		tokenIdList: [11, 12, 13, 14, 15],
	},
	{
		name: "Others",
		tokenIdList: [11, 12, 13, 14, 15],
	},
];

const GROUPS_EXTENDED = GROUPS.map((group) => {
	const tokensWithVaults = group.tokenIdList.map((id) => {
		const vaultIds = VAULTS.filter((v) => v.tokenIdList.includes(id)).map(
			(v) => v.id
		);
		if (vaultIds.length === 0) {
			throw new Error(
				`Vaults not found for group ${group.name} and token ${id}`
			);
		}
		return { tokenId: id, vaultIds };
	});
	return { ...group, tokensWithVaults };
});

const generate = () => {
	return JSON.stringify(GROUPS_EXTENDED);
};

export default { generate };
