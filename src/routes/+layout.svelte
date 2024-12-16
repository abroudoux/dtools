<script lang="ts">
	import { ModeWatcher } from "mode-watcher";

	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>dtools</title>
	<meta name="description" content="dtools" />
</svelte:head>

<main class="flex w-screen flex-col items-start justify-start overflow-x-hidden bg-foreground p-4">
	{@render children()}
</main>
<ModeWatcher defaultTheme={"dark"} />
