import type { SvelteComponent } from "svelte";
import { Leaf, Clover, TreePalm, Flower } from "lucide-svelte";

import type { Tool } from "$lib/utils/types";

export const tools: Tool[] = [
	{
		name: "branch",
		description: "Enhance Git Branch Management",
		icon: Leaf as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/branch"
	},
	{
		name: "pm",
		description: "Manage Commands Inside Projects",
		icon: Clover as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/pm"
	},
	{
		name: "commit",
		description: "Quickly commits code",
		icon: TreePalm as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/commit"
	},
	{
		name: "repo",
		description: "Browser Github repositories",
		icon: Flower as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/repo"
	}
];
