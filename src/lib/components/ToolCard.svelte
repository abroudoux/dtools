<script lang="ts">
	import MagicCard from "$lib/components/MagicCard.svelte";

	import type { Tool } from "$lib/utils/types";

	export let tool: Tool;
</script>

<div class="h-64 rounded-lg">
	<MagicCard
		class={`group flex cursor-pointer flex-col items-start justify-center gap-4 whitespace-nowrap p-12 text-4xl shadow-2xl transition-all duration-300 hover:border-[#2effbd9e]`}
		gradientColor={"#043634"}
		gradientSize={300}
	>
		<svelte:component this={tool.icon} class="h-10 w-10 text-orange-500" />
		<h3 class="text-3xl">{tool.name}</h3>
		<p class="text-xl text-muted-foreground">{tool.description}</p>
	</MagicCard>
</div>
