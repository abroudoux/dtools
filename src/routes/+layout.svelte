<script lang="ts">
	import { ModeWatcher } from "mode-watcher";

	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>dtools</title>
	<meta name="description" content="dtools" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<main class="flex w-screen flex-col items-start justify-start overflow-x-hidden bg-foreground p-4">
	<div class="h-screen w-full rounded-xl bg-background px-24 py-16 text-foreground">
		{@render children()}
	</div>
</main>
<ModeWatcher defaultTheme={"dark"} />
