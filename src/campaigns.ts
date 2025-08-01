type BoostBase = {
	name: string;
	startedAt: string;
	endedAt: string;
	type:
		| "NftHolder"
		| "TwitterBoost"
		| "TokenBoost"
		| "SummerMadness"
		| "SummerGiveaway";
	boost: number;
};

type NftHolderBoost = BoostBase & {
	type: "NftHolder";
	nftStandard: "erc721" | "erc1155";
	nftContracts: {
		title?: string;
		address: string;
		imgSrc: string;
		uri: string;
		tokenId?: number;
	}[];
};

type TwitterBoost = BoostBase & {
	type: "TwitterBoost";
	partnerTwitter: string;
	partnerName: string;
	tokenId: number;
};

type SummerMadness = BoostBase & {
	type: "SummerMadness";
	partnerTwitter: string;
	partnerName: string;
	tokenId: number;
	nftBoost?: number;
	combinedBoost?: number;
	nftStandard?: "erc721" | "erc1155";
	nftContracts?: {
		title?: string;
		address: string;
		imgSrc: string;
		uri: string;
		tokenId?: number;
	}[];
};

type TokenBoost = BoostBase & {
	type: "TokenBoost";
	tokenId: number;
};
type SummerGiveaway = BoostBase & {
	type: "SummerGiveaway";
	giveawayUrl: string;
};

type Campaign =
	| NftHolderBoost
	| TwitterBoost
	| TokenBoost
	| SummerGiveaway
	| SummerMadness;

export const CDN_ORIGIN = "https://content.enjoyoors.xyz";

const MOCK_CAMPAIGNS = [
	{
		name: "muBOND summer",
		startedAt: "2025-07-04T13:00:00.000Z",
		endedAt: "2025-08-11T13:00:00.000Z",
		type: "SummerMadness",
		boost: 5,
		tokenId: 413, // wmon
		partnerTwitter: "@MuDigitalHQ",
		partnerName: "Mu Digital",
		nftStandard: "erc721",
		nftBoost: 2,
		combinedBoost: 7,
		nftContracts: [
			{
				address: "0x6370b232d67956bfEAb57508Eb889249664DBE71",
				imgSrc: `https://content.enjoyoors.xyz/img/mu-nft.png`,
				uri: "https://magiceden.io/collections/monad-testnet/0x6370b232d67956bfeab57508eb889249664dbe71",
			},
		],
	},
];

export const CAMPAIGNS: Campaign[] = [
	{
		name: "gMON boost",
		startedAt: "2025-07-29T13:00:00.000Z",
		endedAt: "2025-08-12T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 422,
		partnerTwitter: "@MagmaStaking",
		partnerName: "Magma",
	},
	{
		name: "First summer giveaway",
		startedAt: "2025-07-28T13:00:00.000Z",
		endedAt: "2025-08-03T13:00:00.000Z",
		type: "SummerGiveaway",
		giveawayUrl: "https://x.com/enjoyoorsxyz/status/1949815747103863112",
		boost: 1,
	},
	{
		name: "muBOND summer",
		startedAt: "2025-08-04T13:00:00.000Z",
		endedAt: "2025-08-11T13:00:00.000Z",
		type: "SummerMadness",
		boost: 5,
		tokenId: 438,
		partnerTwitter: "@MuDigitalHQ",
		partnerName: "Mu Digital",
		nftStandard: "erc721",
		nftBoost: 2,
		combinedBoost: 7,
		nftContracts: [
			{
				address: "0x6370b232d67956bfEAb57508Eb889249664DBE71",
				imgSrc: `${CDN_ORIGIN}/img/mu-nft.png`,
				uri: "https://magiceden.io/collections/monad-testnet/0x6370b232d67956bfeab57508eb889249664dbe71",
			},
		],
	},
	{
		name: "shMON boost",
		startedAt: "2025-07-14T13:00:00.000Z",
		endedAt: "2025-07-28T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 411,
		partnerTwitter: "@0xFastLane",
		partnerName: "Fastlane",
	},
	{
		name: "BEAN boost",
		startedAt: "2025-07-22T13:00:00.000Z",
		endedAt: "2025-08-05T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 436,
		partnerTwitter: "@Bean_DEX",
		partnerName: "Bean",
	},
	{
		name: "BEAN boost",
		startedAt: "2025-07-22T13:00:00.000Z",
		endedAt: "2025-08-05T13:00:00.000Z",
		type: "TwitterBoost",
		boost: 3,
		tokenId: 437,
		partnerTwitter: "@Bean_DEX",
		partnerName: "Bean",
	},
	{
		name: "The10kSquad",
		startedAt: "2025-07-08T13:00:00.000Z",
		endedAt: "2025-07-29T13:00:00.000Z",
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
		name: "LilChogstars",
		startedAt: "2025-07-11T13:00:00.000Z",
		endedAt: "2025-08-01T13:00:00.000Z",
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
		startedAt: "2025-07-10T13:00:00.000Z",
		endedAt: "2025-07-31T13:00:00.000Z",
		type: "NftHolder",
		nftStandard: "erc1155",
		boost: 2,
		nftContracts: [
			{
				title: "Monadverse: Chapter 1",
				address: "0xe25c57ff3eea05d0f8be9aaae3f522ddc803ca4e",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvf2ME9ilfqTiN3oLgxc6lg8oJPFyFYK1sI6Rx7ZlHO%252Fp1%252FOSIAsp2ceTM%252BIx1HK5Q%252BpaFxZ43SQF0SSPHGMs%252BC3J696O563J3CFkiiBCQY4Dh.png`,
				uri: "https://magiceden.io/collections/monad-testnet/0xe25c57ff3eea05d0f8be9aaae3f522ddc803ca4e",
				tokenId: 1,
			},
			{
				title: "Monadverse: Chapter 2",
				address: "0x3a9acc3be6e9678fa5d23810488c37a3192aaf75",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvfylzAOg2N3k8YB%252FKp4ZnUHGKdjI7UgbXn5pkTVQw9UC10KXNOzNr1jDDSQUG6GG3XGQs07wAUQSZosF7%252FKTI03p7i7%252F%252BVcisUXE%252F6Dj%252Bstuc.png`,
				uri: "https://magiceden.io/collections/monad-testnet/0x3a9acc3be6e9678fa5d23810488c37a3192aaf75",
				tokenId: 2,
			},
			{
				title: "Monadverse: Chapter 3",
				address: "0xcab08943346761701ec9757befe79ea88dd67670",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252B5X5v3mmKMnD5vOj6wE06%252FGl%252BVSKrufFWFBChTKZugjCGr6HRBZf5eZVe2j4ut2TrxptzmHg0XJu5J6%252BKTkh20j1XAsrdH4NSv5gxr9iHKU.png`,
				uri: "https://magiceden.io/collections/monad-testnet/0xcab08943346761701ec9757befe79ea88dd67670",
				tokenId: 3,
			},
			{
				title: "Monadverse: Chapter 4",
				address: "0xba838e4cca4b852e1aebd32f248967ad98c3aa45",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvf580abzh2cEYdyw%252Bfm9ex9AFPekadT9pB1%252Fynph09eDAaHYwR6%252BBMnQtH1vKCa4gFP%252BcL%252FEvYJZgedDyKveegI6hmIBeSYEdXObOb5UcF%252FWX.png`,
				uri: "https://magiceden.us/collections/monad-testnet/0xba838e4cca4b852e1aebd32f248967ad98c3aa45",
				tokenId: 5,
			},
			{
				title: "Monadverse: Chapter 5",
				address: "0x5d2a7412872f9dc5371d0cb54274fdb241171b95",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvf8PELbYr%252FqnbVReKHn4%252FIAlB5T3kHZ1jVLL66ZY74dZYVHdt2%252BC7xt8quNNUu%252BPHMlT1OyixrRQZVZJsvWTvHskrahHf9BP%252Fx7Yzs%252BYk4Yi1.png`,
				uri: "https://magiceden.us/collections/monad-testnet/0x5d2a7412872F9dC5371D0Cb54274fDB241171b95",
				tokenId: 6,
			},
			{
				title: "Monadverse: Chapter 6",
				address: "0x813fa68dd98f1e152f956ba004eb2413fcfa7a7d",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvf9NA2KpiMAp72MTPaXeuIqqXkUxIkPIMAbKansSa2BijZledL6tfDneR8k6gGQdrMUcaNTvXHGGWnT7xhCZSK3VZ3jxCz8F7UFJx11PrQwgY.png`,
				uri: " https://magiceden.us/collections/monad-testnet/0x813FA68Dd98F1E152F956Ba004eB2413Fcfa7A7D",
				tokenId: 7,
			},
			{
				title: "Monadverse: Chapter 7",
				address: "0xc29b98dca561295bd18ac269d3d9ffdfcc8ad426",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvfw00uDWvGMCSQZ6i2AIEOr7xakvgVwpvAo2TwB3KenkhJF8I6jJyYzHyiP0vp2EG4w0PO8MiawMj9pB5a39d5EAbnuCiCew3Sncx58eUGeYk.png`,
				uri: " https://magiceden.us/collections/monad-testnet/0xc29b98dca561295bd18ac269d3d9ffdfcc8ad426",
				tokenId: 9,
			},
			{
				title: "Monadverse: Chapter 8",
				address: "0xce3be27bdf0922e92bbf3c2eefbb26487946ed4c",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvf7eMuQ0lbK9TrPfi7A3wlF2gHtv9pSZmlHb%252FCMbEp41J%252Fm43vr4psNJFAKs61Z%252F0wrH369aEwkgXd%252FgNE2XAitpKOWJK9jQm6S2sZSkS7dca.png`,
				uri: "https://magiceden.us/collections/monad-testnet/0xce3be27bdf0922e92bbf3c2eefbb26487946ed4c",
				tokenId: 12,
			},
			{
				title: "Monadverse: Chapter 9",
				address: "0xe61efb2d71d7db90bfe3b697ee9e2fe977017b56",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2FiBD2%252FpCm6OBssJ1DRZJUhuyDIYtweWGg%252Bwp4mR0FGRFmhyAKWliNGg5mqrpQsTVueplIFT6lXyJo1%252FVYcI3NuqkemcMElESNjQ0zO%252F5QDZ28r3d5snD72mbo6KpX4Kv5xKJw%252BGVr%252B8jOn8dPgFHOf8lP%252FguC9oXKc5Bq8iAMErY%253D.png`,
				uri: "https://magiceden.us/collections/monad-testnet/0xe61efb2d71d7db90bfe3b697ee9e2fe977017b56",
				tokenId: 1,
			},
			{
				title: "Monadverse: Chapter 10",
				address: "0xa18e1c7c6e8c663c5d835fffd70ef07b482fe884",
				imgSrc: `https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2Fi9YO%252F4yHXUdJsWcTqhqvf5cBkt4y%252FGA%252F9GeLVsXTM5y8qi4eXlxxCLW1dlqmmGpXFl0jZxBM0w0xC%252BRFOJXY8rdTsEx%252BasTUgus731BoEl0zqWLZHL5l0uiTtRQWiYkD.png`,
				uri: "https://magiceden.us/collections/monad-testnet/0xa18e1c7c6e8c663c5d835fffd70ef07b482fe884",
				tokenId: 1,
			},
			{
				title: "Monadverse Genesis Hatch",
				address: "0x2ace467d5c55d75cf04ae7b9c7672bc499d8e246",
				imgSrc: `https://img-cdn.magiceden.dev/autoquality:size:1024000:20:80/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmonad-testnet%2FrSNTYhb5erNxjAvRIO43VmyRWA65FLBByGN48YnLWEaK1qhgk0UdUhpIzDeYZajJDUHBbk7Vw%252BRf7ieKh8bG8cfRHt8dabqwxqUT7fGDRQ2jQ9xbclnJkgXu4f4ivW2Q.gif`,
				uri: "https://magiceden.io/collections/monad-testnet/0x2ace467d5c55d75cf04ae7b9c7672bc499d8e246",
				tokenId: 0,
			},
		],
	},
];

const generate = () => {
	return JSON.stringify(CAMPAIGNS);
};

export default { generate };
