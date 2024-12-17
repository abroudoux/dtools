<script lang="ts">
	import { Trees } from "lucide-svelte";

	import GridPattern from "$lib/components/GridPattern.svelte";
	import ItalicText from "$lib/components/ItalicText.svelte";
	import { Button } from "$lib/components/ui/button/index";
	import { cn } from "$lib/utils";
</script>

<section class="my-[15%] flex h-2/3 w-full flex-row items-center justify-between">
	<div class="flex flex-col items-start justify-center gap-4">
		<p class="flex flex-row items-center justify-start gap-2">
			<Trees size="42" class="text-orange-500" />
			<span class="text-4xl">dtools</span>
		</p>
		<h1 class="max-w-4xl text-8xl">
			Tools built to <ItalicText color="text-orange-500">help you</ItalicText> develop better.
		</h1>
		<p class="max-w-5xl text-2xl text-muted-foreground">
			We provide a set of tools to help you develop better, faster, and more efficiently. Our tools
			are designed to help you focus on what you do best, and leave the rest to us
		</p>
		<div class="flex flex-row items-center justify-start gap-4 py-4">
			<Button href="#toolsSection" size="lg">Get Started</Button>
			<Button href="https://github.com/abroudoux/dtools" variant="secondary" size="lg"
				>Source Code</Button
			>
		</div>
	</div>
	<GridPattern
		squares={[
			[4, 4],
			[5, 1],
			[8, 2],
			[6, 6],
			[10, 5],
			[13, 3]
		]}
		class={cn(
			"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
			"fixed inset-x-[20%] inset-y-[-55%] h-[200%] skew-y-12"
		)}
	/>
</section>
