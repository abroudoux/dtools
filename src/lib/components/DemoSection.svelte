<script lang="ts">
	import { ArrowUpRight } from "lucide-svelte";

	import ItalicText from "$lib/components/ItalicText.svelte";
	import type { Tool } from "$lib/utils/types";

	export let tool: Tool;

	let BranchComponent: typeof import("svelte").SvelteComponent | null = null;

	$: loadBranchComponent(tool.name);

	async function loadBranchComponent(toolName: string) {
		try {
			const module = await import(`$lib/docs/${toolName}.svx`);
			BranchComponent = module.default;
		} catch (error) {
			console.error(`Error during the loading of ${toolName}.svx:`, error);
			BranchComponent = null;
		}
	}
</script>

<section class="my-64 flex w-full flex-col items-start justify-between gap-8">
	<div class="w-full flex-col items-start justify-start gap-4">
		<h3 class="text-4xl">
			<ItalicText color="orange-500">
				{tool.name}
			</ItalicText>
		</h3>
		<p class="text-xl text-foreground">
			{tool.description}
		</p>
	</div>
	{#if BranchComponent}
		<svelte:component this={BranchComponent} />
	{:else}
		<p class="text-muted-foreground">Loading...</p>
	{/if}
	<a
		href={tool.repositoryUrl}
		class="flex-inline justify-baseline group flex items-center gap-1 text-xl text-muted-foreground transition-all hover:gap-2 hover:text-foreground"
	>
		Repository <ArrowUpRight class="transition-all group-hover:rotate-45" />
	</a>
</section>
