<script lang="ts">
	import { ModeWatcher } from "mode-watcher";

	import { getToolsVersions } from "$lib/utils";
	import "../app.css";

	let { children } = $props();

	getToolsVersions();
</script>

<svelte:head>
	<title>dtools</title>
	<meta name="description" content="dtools" />
</svelte:head>

<main
	class="flex w-screen flex-col items-start justify-start overflow-x-hidden bg-foreground p-4 font-sans"
>
	{@render children()}
</main>
<ModeWatcher defaultTheme={"dark"} />
