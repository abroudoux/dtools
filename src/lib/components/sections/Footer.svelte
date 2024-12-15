<script lang="ts">
	import { Trees } from "lucide-svelte";

	import HoverCardProfile from "$lib/components/HoverCardProfile.svelte";
</script>

<footer class="mt-64 flex w-full flex-row items-center justify-between">
	<div class="flex flex-col items-start justify-start gap-4">
		<a class="flex flex-row items-center justify-start gap-2" href="#body">
			<Trees size="42" class="text-orange-500" />
			<span class="text-4xl">dtools</span>
		</a>
		<span>Made by <HoverCardProfile /></span>
	</div>
</footer>
