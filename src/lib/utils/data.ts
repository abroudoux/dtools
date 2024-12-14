import type { SvelteComponent } from "svelte";
import { Leaf, FolderOpenDot, Volleyball, Globe, Drama } from "lucide-svelte";

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
		icon: FolderOpenDot as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/pm"
	},
	{
		name: "commit",
		description: "Quickly commits code",
		icon: Volleyball as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/commit"
	},
	{
		name: "repo",
		description: "Browser Github repositories",
		icon: Globe as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/repo"
	},
	{
		name: "al",
		description: "Create local aliases, like package.json but everywhere",
		icon: Drama as typeof SvelteComponent,
		repositoryUrl: "https://github.com/abroudoux/al"
	}
];
