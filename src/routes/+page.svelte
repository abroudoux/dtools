<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import HeroSection from "$lib/components/HeroSection.svelte";
	import ToolsSection from "$lib/components/ToolsSection.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="h-auto min-h-screen w-full rounded-xl bg-background px-24 py-16 text-foreground">
	<Header />
	<HeroSection />
	<ToolsSection />
	<Footer />
</div>
