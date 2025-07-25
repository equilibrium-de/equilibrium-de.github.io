import fs from "node:fs";
import tokenLinks from "./token-links";
import tokens from "./tokens";
import ecosystems from "./ecosystems";
import chains from "./chains";
import vaults from "./vaults";
import groups from "./groups";
import translations from "./translations";
import campaigns from "./campaigns";

const entities = {
	ecosystems,
	chains,
	tokens,
	vaults,
	groups,
	translations,
	campaigns,
	tokenLinks,
} as const;

const updateJson = (
	entity:
		| "ecosystems"
		| "chains"
		| "tokens"
		| "vaults"
		| "groups"
		| "translations"
		| "campaigns"
		| "tokenLinks"
) => {
	fs.writeFile(`${entity}/index.json`, entities[entity].generate(), (err) => {
		if (err) {
			console.error(err);
		}
		console.log(`Successfully updated ${entity}`);
	});
};

updateJson("tokenLinks");
updateJson("translations");
updateJson("campaigns");
