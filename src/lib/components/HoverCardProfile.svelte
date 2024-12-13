<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import * as HoverCard from "$lib/components/ui/hover-card/index.js";
</script>

<HoverCard.Root>
	<HoverCard.Trigger
		href="https://github.com/abroudoux"
		target="_blank"
		rel="noreferrer noopener"
		class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
	>
		@abroudoux
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<div class="flex justify-between gap-2">
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
