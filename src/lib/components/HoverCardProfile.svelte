<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import * as HoverCard from "$lib/components/ui/hover-card/index.js";
	import TextAnimationDecoration from "$lib/components/TextAnimationDecoration.svelte";
</script>

<HoverCard.Root>
	<HoverCard.Trigger href="https://github.com/abroudoux" target="_blank" rel="noreferrer noopener">
		@abroudoux
	</HoverCard.Trigger>
	<HoverCard.Content class="w-auto">
		<div class="flex justify-between gap-4">
			<Avatar.Root>
				<Avatar.Image src="https://github.com/abroudoux.png" />
				<Avatar.Fallback>AB</Avatar.Fallback>
			</Avatar.Root>
			<div class="space-y-1 text-left">
				<h4 class="text-sm font-semibold">@abroudoux</h4>
				<p class="text-sm">CS & IT Enthusiastic</p>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
