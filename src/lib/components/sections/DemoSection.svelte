<script lang="ts">
	import { ArrowUpRight } from "lucide-svelte";

	import ItalicText from "$lib/components/typographie/ItalicText.svelte";
	import type { Tool } from "$lib/utils/types";
	import { getLastRealeaseVersion } from "$lib/utils/repositories";
	import BorderBeam from "$lib/components/BorderBeam.svelte";

	export let tool: Tool;
	let version: string = "";

	let BranchComponent: typeof import("svelte").SvelteComponent | null = null;

	$: loadBranchComponent(tool.name);

	async function loadBranchComponent(toolName: string) {
		try {
			const module = await import(`$lib/docs/${tool.name}.svx`);
			BranchComponent = module.default;
		} catch (error) {
			console.error(`Error during the loading of ${tool.name} doc file:`, error);
			BranchComponent = null;
		}

		try {
			const response = await getLastRealeaseVersion(tool.name);
			response instanceof Error ? console.error(response.message) : (version = response);
		} catch (error) {
			console.error(`Error during the fetching of the last release version of ${toolName}:`, error);
		}
	}
</script>

<section
	class="relative my-[15%] flex w-full flex-col items-start justify-between gap-12 rounded-lg border p-8 backdrop-blur-sm"
	id="demoSection"
>
	<BorderBeam />
	<div class="flex w-full flex-col items-start justify-start gap-2">
		<h3 class="flex-inline flex items-baseline gap-4 text-4xl">
			<ItalicText color="orange-500">
				{tool.name}
			</ItalicText>
			<span class="text-xl text-muted-foreground">--{version}</span>
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
