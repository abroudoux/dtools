import type { SvelteComponent } from "svelte";

export interface ToolCardType {
	name: string;
	description: string;
	icon: typeof SvelteComponent;
}
