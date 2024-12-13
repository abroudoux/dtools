<script lang="ts">
	import MagicCard from "$lib/components/MagicCard.svelte";

	import type { ToolCardType } from "$lib/utils/interfaces";

	export let tool: ToolCardType;
</script>

<div class="rounded-lg">
	<MagicCard
		class={`group flex cursor-pointer flex-col items-start justify-center whitespace-nowrap p-12 text-4xl shadow-2xl transition-all duration-300 hover:border-[#2effbd9e]`}
		gradientColor={"#043634"}
		gradientSize={300}
	>
		<svelte:component this={tool.icon} class="h-8 w-8 text-orange-500" />
		<h3 class="text-3xl">{tool.name}</h3>
		<p class="text-xl text-muted-foreground">{tool.description}</p>
	</MagicCard>
</div>
