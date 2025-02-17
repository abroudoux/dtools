import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { tools } from "$lib/utils/data";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function getToolsVersions() {
	for (const tool of tools) {
		const response = await fetch(`https://api.github.com/abroudoux/repos/${tool}/releases`);
		if (!response.ok) {
			return;
		}

		const releases = await response.json();
		tool.lastVersion = releases[0].tag_name ?? "--";
	}
}
