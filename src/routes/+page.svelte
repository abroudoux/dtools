<script lang="ts">
	import Header from "$lib/components/sections/Header.svelte";
	import HeroSection from "$lib/components/sections/HeroSection.svelte";
	import ToolsSection from "$lib/components/sections/ToolsSection.svelte";
	import DemoSection from "$lib/components/sections/DemoSection.svelte";
	import Footer from "$lib/components/sections/Footer.svelte";
	import { selectedTool } from "$lib/stores/toolStore";
	import type { Tool } from "$lib/utils/types";

	let currentTool: Tool | null = null;

	selectedTool.subscribe((value) => {
		currentTool = value;
	});
</script>

<div class="h-auto min-h-screen w-full rounded-xl bg-background px-24 py-16 text-foreground">
	<!-- <div class="fixed left-0 top-0 z-50 h-4 w-screen bg-foreground"></div> -->
	<Header />
	<HeroSection />
	<ToolsSection />
	{#if currentTool}
		<DemoSection tool={currentTool} />
	{/if}
	<Footer />
	<!-- <div class="fixed bottom-0 left-0 z-50 h-4 w-screen bg-foreground"></div> -->
</div>
