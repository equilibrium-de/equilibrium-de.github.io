import fs from "node:fs";
import tokens from "./tokens";
import ecosystems from "./ecosystems";
import chains from "./chains";

const entities = {
	ecosystems,
	chains,
	tokens,
} as const;

const updateJson = (entity: "ecosystems" | "chains" | "tokens") => {
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
