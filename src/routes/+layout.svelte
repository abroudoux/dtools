<script lang="ts">
	import { ModeWatcher } from "mode-watcher";

	import "../app.css";

	let { children } = $props();
</script>

<main class="h-screen w-screen bg-foreground p-4">
	<div class="h-screen w-full rounded-xl bg-background px-24 py-16 text-foreground">
		{@render children()}
	</div>
</main>
<ModeWatcher defaultTheme={"dark"} />
