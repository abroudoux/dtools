<script lang="ts">
	import { ModeWatcher } from "mode-watcher";

	import "../app.css";

	let { children } = $props();
</script>

<main class="w-screen bg-foreground p-4">
	<div class="h-screen w-full rounded-lg bg-background p-4 text-foreground">
		{@render children()}
	</div>
</main>
<ModeWatcher defaultTheme={"dark"} />
