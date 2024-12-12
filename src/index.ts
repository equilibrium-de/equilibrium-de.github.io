import fs from "node:fs";
import tokens from "./tokens";
import ecosystems from "./ecosystems";
import chains from "./chains";
import vaults from "./vaults";
import groups from "./groups";

const entities = {
	ecosystems,
	chains,
	tokens,
	vaults,
	groups,
} as const;

const updateJson = (
	entity: "ecosystems" | "chains" | "tokens" | "vaults" | "groups"
) => {
	fs.writeFile(`${entity}/index.json`, entities[entity].generate(), (err) => {
		if (err) {
			console.error(err);
		}
		console.log(`Successfully updated ${entity}`);
	});
};

updateJson("ecosystems");
updateJson("chains");
updateJson("tokens");
updateJson("vaults");
updateJson("groups");
