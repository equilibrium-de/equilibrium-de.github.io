export const hasUnique = (prop: string, items: any[]): boolean => {
	const idSet = new Set<number | string>();

	for (const item of items) {
		if (!Reflect.has(item, prop)) return false;
		if (idSet.has(item[prop])) {
			return false;
		}
		idSet.add(item[prop]);
	}

	return true;
};
