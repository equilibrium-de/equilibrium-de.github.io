export type Campaign = {
	name: string;
	startedAt: string; // 2025-07-03T01:02:03.456Z
	endedAt: string;
	type: "NftHolder" | "TwitterBoost";
	boost: number;
	tokenId?: number;
	nftStandard?: "erc721" | "erc1155";
	nftContracts?: {
		address: string;
		imgSrc: string;
		uri: string;
		tokenId?: number;
	}[];
	partnerTwitter?: string;
	partnerName?: string;
};

export const CDN_ORIGIN = "https://content.enjoyoors.xyz";

const nostraStart = "2025-07-09T01:00:00.000Z";
const nostraEnd = "2025-07-23T01:00:00.000Z";

export const CAMPAIGNS: Campaign[] = [
	{
		name: "shMON boost",
		startedAt: "2025-07-03T01:00:00.000Z",
		endedAt: "2025-07-03T01:02:03.456Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 411,
		partnerTwitter: "@0xFastLane",
		partnerName: "Fastlane",
	},
	{
		name: "Nostra boost",
		startedAt: nostraStart,
		endedAt: nostraEnd,
		type: "TwitterBoost",
		boost: 3,
		tokenId: 425,
		partnerTwitter: "@nostrafinance",
		partnerName: "Nostra",
	},
	{
		name: "Nostra boost",
		startedAt: nostraStart,
		endedAt: nostraEnd,
		type: "TwitterBoost",
		boost: 3,
		tokenId: 426,
		partnerTwitter: "@nostrafinance",
		partnerName: "Nostra",
	},
	{
		name: "Nostra boost",
		startedAt: nostraStart,
		endedAt: nostraEnd,
		type: "TwitterBoost",
		boost: 3,
		tokenId: 427,
		partnerTwitter: "@nostrafinance",
		partnerName: "Nostra",
	},
	{
		name: "Nostra boost",
		startedAt: nostraStart,
		endedAt: nostraEnd,
		type: "TwitterBoost",
		boost: 3,
		tokenId: 428,
		partnerTwitter: "@nostrafinance",
		partnerName: "Nostra",
	},
	{
		name: "The10kSquad",
		startedAt: "2025-07-08T01:00:00.000Z",
		endedAt: "2026-07-29T01:00:00.000Z",
		type: "NftHolder",
		nftStandard: "erc721",
		boost: 2,
		nftContracts: [
			{
				address: "0x3a9454c1b4c84d1861bb1209a647c834d137b442",
				imgSrc: `${CDN_ORIGIN}/img/the-10k-squad.svg`,
				uri: "https://magiceden.io/collections/monad-testnet/0x3a9454c1b4c84d1861bb1209a647c834d137b442",
			},
		],
	},
	{
		name: "LilChogstarts",
		startedAt: "2025-07-01T01:00:00.000Z",
		endedAt: "2026-08-01T01:00:00.000Z",
		type: "NftHolder",
		nftStandard: "erc1155",
		boost: 2,
		nftContracts: [
			{
				address: "0x26c86f2835c114571df2b6ce9ba52296cc0fa6bb",
				imgSrc: `${CDN_ORIGIN}/img/lil-chogstars.webp`,
				uri: "https://magiceden.io/collections/monad-testnet/0x26c86f2835c114571df2b6ce9ba52296cc0fa6bb",
				tokenId: 0,
			},
		],
	},
	{
		name: "Monadverse",
		startedAt: "2025-07-01T01:00:00.000Z",
		endedAt: "2026-08-01T01:00:00.000Z",
		type: "NftHolder",
		nftStandard: "erc1155",
		boost: 2,
		nftContracts: [
			{
				address: "0xe25c57ff3eea05d0f8be9aaae3f522ddc803ca4e",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvf2ME9ilfqTiN3oLgxc6lg8oJPFyFYK1sI6Rx7ZlHO%252Fp1%252FOSIAsp2ceTM%252BIx1HK5Q%252BpaFxZ43SQF0SSPHGMs%252BC3J696O563J3CFkiiBCQY4Dh.png`,
				uri: "https://magiceden.io/collections/monad-testnet/0xe25c57ff3eea05d0f8be9aaae3f522ddc803ca4e",
				tokenId: 1,
			},
			{
				address: "0x3a9acc3be6e9678fa5d23810488c37a3192aaf75",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvfylzAOg2N3k8YB%252FKp4ZnUHGKdjI7UgbXn5pkTVQw9UC10KXNOzNr1jDDSQUG6GG3XGQs07wAUQSZosF7%252FKTI03p7i7%252F%252BVcisUXE%252F6Dj%252Bstuc.png`,
				uri: "https://magiceden.io/collections/monad-testnet/0x3a9acc3be6e9678fa5d23810488c37a3192aaf75",
				tokenId: 2,
			},
			// {
			// 	address: "",
			// 	imgSrc: ``,
			// 	uri: "",
			// 	tokenId: 0,
			// },
		],
	},
];

const generate = () => {
	return JSON.stringify(CAMPAIGNS);
};

export default { generate };
