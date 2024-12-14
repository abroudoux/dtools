import type { SvelteComponent } from "svelte";

export type Tool = {
	name: string;
	description: string;
	icon: typeof SvelteComponent;
	repositoryUrl: string;
};
