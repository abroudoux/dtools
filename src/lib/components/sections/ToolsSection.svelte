<script lang="ts">
	import ToolCard from "$lib/components/ToolCard.svelte";
	import ItalicText from "$lib/components/ItalicText.svelte";
	import { tools } from "$lib/utils/data";
	import type { Tool } from "$lib/utils/types";
	import { selectedTool } from "$lib/stores/toolStore";

	function selectTool(tool: Tool) {
		selectedTool.set(tool);
	}
</script>

<section class="my-[15%] flex w-full flex-col items-center justify-center gap-4" id="toolsSection">
	<div class="flex w-full flex-col items-start justify-start gap-2 py-4">
		<h2 class="text-4xl">
			Targeted tools for <ItalicText color="text-orange-500">developers</ItalicText>
		</h2>
		<p class="text-xl text-muted-foreground">
			Tools that help you with your projects, so you can focus on the important things
		</p>
	</div>
	<div class="grid w-full grid-cols-3 gap-4">
		{#each tools.slice(0, 3) as tool}
			<ToolCard {tool} onClick={() => selectTool(tool)} />
		{/each}
	</div>
	<div class="grid w-full grid-cols-2 gap-4">
		{#each tools.slice(3) as tool}
			<ToolCard {tool} onClick={() => selectTool(tool)} />
		{/each}
	</div>
</section>
