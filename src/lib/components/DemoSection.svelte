<script lang="ts">
	import type { Tool } from "$lib/utils/types";

	export let tool: Tool;
</script>

<section class="my-64 flex w-full flex-col items-start justify-start gap-4">
	{#if tool}
		<p>{tool.name}</p>
	{:else}
		<p>Nothing to show here!</p>
	{/if}
</section>
