const TRANSLATIONS = {
	"The Omni-asset Liquidity Primitive": "全资产流动性平台",
	"Stake anything, earn yield": "质押任意资产，获得收益",
	"Join waitlist": "加入等待名单",
	"enjoyoors Magic": "enjoyoors的独特功能",
	Yield: "获得收益",
	"Any underutilized asset": "质押任意闲置资产",
	"As simple as that": "赚钱就是这么简单",
	"Deposit any asset": "存入任意资产",
	"Transact on the native network": "在原生网络上交易",
	"No switching wallets or bridging": "不用切换钱包或跨链",
	"Enjoy yield accrued weekly": "每周都可累积收益",
	"Withdraw funds anytime": "资金可随时取出",
	"We Accept": "平台接受的资产种类",
	"Top 300 cryptocurrencies": "排名前300的加密货币",
	"Top 300": "排名前300",
	cryptocurrencies: "的加密货币",
	"Governance tokens": "治理代币",
	Governance: "治理",
	tokens: "代币",
	"Liquid staking tokens": "流动性质押代币",
	"Liquid restaking tokens": "流动性再质押代币",
	derivatives: "衍生品",
	"The Enjoyoors protocol works its magic": "Enjoyoors协议拥有独特功能",
	"Far beyond trendy narratives, not another restaking":
		"不止于跟风热门叙事，并非普通的再质押协议",
	Decentralized: "去中心化",
	"Non-custodial": "非托管",
	Novel: "创新",
	"Chain-agnostic": "兼容任何区块链",
	"Provides Liquidity Mainline for DeFi protocols": "为DeFi协议注入流动性",
	"Wanna become an Enjoyoor?": "想要加入我们吗？",
	"Your email": "邮箱地址",
	"I consent to the processing of my data for newsletters and communications":
		"我同意将我的数据用于订阅和沟通。",
	"Enjoyoors liberalizes yield and liquidity for all market players by unifying value across a wide range of assets and routing it to where it's needed most.":
		"Enjoyoors整合了各类资产的价值，并将这些价值传输到需求最大的市场，为所有市场参与者解锁收益和流动性。",
	"/img/magic.webp": "/img/magic-zh.webp",
	"/img/magic-desktop.webp": "/img/magic-desktop-zh.webp",
	"/img/xl-group.svg": "/img/xl-group-zh.svg",
	"/img/2xl-group.svg": "/img/2xl-group-zh.svg",
	"/img/md-group.svg": "/img/md-group-zh.svg",
	"/img/sm-group.svg": "/img/sm-group-zh.svg",
	"/img/lg-group.svg": "/img/lg-group-zh.svg",
	REWARDS: "领取奖励",
	"Now Live On Monad Testnet, Soon — Everywhere! Earn":
		"现已上线 Monad 测试网，即将席卷全网！赚取",
	"pokeMON and claim rewards on our TGE": "pokeMON，TGE 时领取奖励！",
	"Learn More": "了解更多信息",
	CONNECT: "连接钱包",
	"THE OMNIASSET LIQUIDITY PRIMITIVE": "全资产流动性原语",
};

const generate = () => {
	return JSON.stringify(
		Object.entries(TRANSLATIONS)
			.map(([k, v]) => {
				return {
					key: k.toLowerCase().replace(/\s|\'|\"/g, ""),
					en: k,
					zh: v,
				};
			})
			.reduce((acc, { key, en, zh }) => {
				return { ...acc, [key]: { en, zh } };
			}, {})
	);
};

export default { generate };
