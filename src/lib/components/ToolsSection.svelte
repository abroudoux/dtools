<script lang="ts">
	import type { SvelteComponent } from "svelte";

	import ToolCard from "$lib/components/ToolCard.svelte";
	import ItalicText from "$lib/components/ItalicText.svelte";
	import { tools } from "$lib/utils/data";
</script>

<section class="s flex w-full flex-col items-center justify-center gap-4" id="toolsSection">
	<div class="flex w-full flex-col items-start justify-start gap-2 py-4">
		<h2 class="text-4xl">
			Targeted tools for <ItalicText color="text-orange-500">developers</ItalicText>
		</h2>
		<p class="text-xl text-muted-foreground">
			Tools that help you with your projects, so you can focus on the important things
		</p>
	</div>
	<div class="grid w-full grid-cols-3 gap-4">
		<ToolCard tool={tools[0]} />
		<ToolCard tool={tools[1]} />
		<ToolCard tool={tools[2]} />
	</div>
	<div class="grid w-full grid-cols-2 gap-4">
		<ToolCard tool={tools[3]} />
		<ToolCard tool={tools[4]} />
	</div>
</section>
