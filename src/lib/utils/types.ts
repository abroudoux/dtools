import type { SvelteComponent } from "svelte";

export interface Tool {
	name: string;
	description: string;
	icon: typeof SvelteComponent;
}
