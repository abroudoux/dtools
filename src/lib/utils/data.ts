import type { SvelteComponent } from "svelte";
import { Leaf, Clover, TreePalm, Flower, Heart } from "lucide-svelte";

import type { Tool } from "$lib/utils/types";

export const tools: Tool[] = [
	{
		name: "branch",
		description: "Enhance Git Branch Management",
		icon: Leaf as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/branch",
		lastVersion: ""
	},
	{
		name: "dk",
		description: "A minimalist TUI to interact faster with Docker",
		icon: Heart as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/dk",
		lastVersion: ""
	},
	{
		name: "pm",
		description: "Manage Commands Inside Projects",
		icon: Clover as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/pm",
		lastVersion: ""
	},
	{
		name: "commit",
		description: "Quickly commits code",
		icon: TreePalm as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/commit",
		lastVersion: ""
	},
	{
		name: "repo",
		description: "Browse Github repositories",
		icon: Flower as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/repo",
		lastVersion: ""
	}
];
