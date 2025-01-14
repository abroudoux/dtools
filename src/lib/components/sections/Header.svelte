<script lang="ts">
	import { base } from "$app/paths";
	import { Trees } from "lucide-svelte";

	import TextAnimationDecoration from "$lib/components/TextAnimationDecoration.svelte";
	import ThemeModeToggle from "$lib/components/ThemeModeToggle.svelte";
</script>

<header class="flex w-full flex-row items-center justify-between">
	<a class="flex flex-row items-center justify-start gap-2" href={base}>
		<Trees size="32" class="text-orange-500" />
		<span class="text-3xl">dtools</span>
	</a>
	<div class="flex flex-row items-center justify-end gap-4">
		<TextAnimationDecoration href={"https://github.com/abroudoux/dtools"}>
			Source Code
		</TextAnimationDecoration>
		<!-- <ThemeModeToggle /> -->
	</div>
</header>
