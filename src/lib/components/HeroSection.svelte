<script lang="ts">
	import { Trees } from "lucide-svelte";

	import ItalicText from "$lib/components/ItalicText.svelte";
	import { Button } from "$lib/components/ui/button/index";
</script>

<section class="flex h-2/3 w-full flex-row items-center justify-between">
	<div class="flex flex-col items-start justify-center gap-4">
		<p class="flex flex-row items-center justify-start gap-2">
			<Trees size="42" class="text-orange-500" />
			<span class="text-4xl">dtools</span>
		</p>
		<h1 class="max-w-4xl text-8xl">
			Tools built to <ItalicText>help you</ItalicText> develop better.
		</h1>
		<p class="max-w-5xl text-2xl text-muted-foreground">
			We provide a set of tools to help you develop better, faster, and more efficiently. Our tools
			are designed to help you focus on what you do best, and leave the rest to us
		</p>
		<div class="flex flex-row items-center justify-start gap-4 py-4">
			<Button href="/docs" size="lg">Get Started</Button>
			<Button href="/docs" variant="secondary" size="lg">Learn More</Button>
		</div>
	</div>
</section>
