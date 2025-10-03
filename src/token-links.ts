const LINKS = {
	"411": {
		id: 411,
		symbol: "shMON",
		getLink: "https://shmonad.xyz/",
	},
	"412": {
		id: 412,
		symbol: "WBTC",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d",
	},
	"413": {
		id: 413,
		symbol: "WMON",
		getLink: "https://app.enjoyoors.xyz/monad/wrap",
	},
	"414": {
		id: 414,
		symbol: "WETH",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37",
	},
	"415": {
		id: 415,
		symbol: "mamBTC",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0x3B428Df09c3508D884C30266Ac1577f099313CF6",
	},
	"416": {
		id: 416,
		symbol: "stMON",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0x199c0Da6F291a897302300AAAe4F20d139162916",
	},
	"417": {
		id: 417,
		symbol: "ETH",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0x836047a99e11F376522B447bffb6e3495Dd0637c",
	},
	"418": {
		id: 418,
		symbol: "WSOL",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0x5387C85A4965769f6B0Df430638a1388493486F1",
	},
	"419": {
		id: 419,
		symbol: "sMON",
		getLink: "https://kintsu.xyz/staking",
	},
	"420": {
		id: 420,
		symbol: "aprMON",
		getLink: "https://stake.apr.io/",
	},
	"421": {
		id: 421,
		symbol: "iceMON",
		getLink: "https://glacierfi.com/wrap",
	},
	"422": {
		id: 422,
		symbol: "gMON",
		getLink: "https://www.magmastaking.xyz/",
	},
	"423": {
		id: 423,
		symbol: "USDC",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
	},
	"424": {
		id: 424,
		symbol: "USDT",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D",
	},
	"425": {
		id: 425,
		symbol: "iWBTC",
		getLink: "https://blog.enjoyoors.xyz/3x-boost/",
	},
	"426": {
		id: 426,
		symbol: "iUSDC",
		getLink: "https://blog.enjoyoors.xyz/3x-boost/",
	},
	"427": {
		id: 427,
		symbol: "iUSDT",
		getLink: "https://blog.enjoyoors.xyz/3x-boost/",
	},
	"428": {
		id: 428,
		symbol: "iWETH",
		getLink: "https://blog.enjoyoors.xyz/3x-boost/",
	},
	"431": {
		id: 431,
		symbol: "FIABTC",
		getLink: "https://beta-test-bridge.fiammalabs.io/bridge",
	},
	"432": {
		id: 432,
		symbol: "wWETH",
		getLink:
			"https://monad.ambient.finance/swap/chain=0x279f&tokenA=0x0000000000000000000000000000000000000000&tokenB=0xA296f47E8Ff895Ed7A092b4a9498bb13C46ac768",
	},
	"434": {
		id: 434,
		symbol: "LP gigaETH",
		getLink:
			"https://blog.enjoyoors.xyz/1st-gigaeth-wweth-swap-pool-is-live-on-ambient/",
	},
	"435": {
		id: 435,
		symbol: "LP (WMON/USDC) (PancakeSwap)",
		getLink:
			"https://pancakeswap.finance/v2/add/MON/0xf817257fed379853cDe0fa4F97AB987181B1E5Ea?chain=monadTestnet",
	},
	"436": {
		id: 436,
		symbol: "sBLP",
		getLink: "https://perp.bean.exchange/#/turbo-vault",
	},
	"437": {
		id: 437,
		symbol: "jBLP",
		getLink: "https://perp.bean.exchange/#/turbo-vault",
	},
	"438": {
		id: 438,
		symbol: "muBOND",
		getLink: "https://testnet.mudigital.net/",
	},
	"472": {
		id: 472,
		symbol: "Stake LP (gigaETH/WMON)",
		getLink:
			"https://octo.exchange/add-liquidity-v1?pair=0xc9f572900a770422db3a5053f3c265f858eafe18",
	},
	"471": {
		id: 471,
		symbol: "Stake LP (gigaETH/wWETH)",
		getLink:
			"https://octo.exchange/add-liquidity-v1?pair=0x063660ce4655bf07445014f96e4a4df92f5f75da",
	},
	"133": {
		id: 133,
		symbol: "rsETH",
		getLink: "https://kerneldao.com/kelp/restake/",
	},
	"135": {
		id: 135,
		symbol: "pufETH",
		getLink: "https://app.puffer.fi/",
	},
	"138": {
		id: 138,
		symbol: "ezETH",
		getLink: "https://app.renzoprotocol.com/ezeth",
	},
	"477": {
		id: 477,
		symbol: "pzETH",
		getLink: "https://app.renzoprotocol.com/pzeth",
	},
	"93": {
		id: 93,
		symbol: "rETH",
		getLink: "https://stake.rocketpool.net/",
	},
	"131": {
		id: 131,
		symbol: "weETH",
		getLink: "https://www.ether.fi/app/weeth",
	},
	"112": {
		id: 112,
		symbol: "sfrxETH",
		getLink: "https://app.frax.finance/frxeth/stake",
	},
	"480": {
		id: 480,
		symbol: "ynETHx",
		getLink: "https://app.yieldnest.finance/token/ynETHx",
	},
	"479": {
		id: 479,
		symbol: "ynETH",
		getLink: "https://app.yieldnest.finance/token/ynETH",
	},
	"481": {
		id: 481,
		symbol: "ynUSDx",
		getLink: " https://app.yieldnest.finance/token/ynUSDx",
	},
};

const generate = () => {
	return JSON.stringify(LINKS);
};

export default { generate };
