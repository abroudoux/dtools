<script lang="ts">
	import type { SvelteComponent } from "svelte";
	import { User, Leaf, FolderOpenDot, Volleyball, Globe, Drama } from "lucide-svelte";

	import type { ToolCardType } from "$lib/utils/interfaces";
	import ToolCard from "$lib/components/ToolCard.svelte";
	import ItalicText from "$lib/components/ItalicText.svelte";

	let test: ToolCardType = {
		name: "Test",
		description: "This is a test",
		icon: User as typeof SvelteComponent
	};

	let branch: ToolCardType = {
		name: "branch",
		description: "Enhance Git Branch Management",
		icon: Leaf as typeof SvelteComponent
	};

	let pm: ToolCardType = {
		name: "pm",
		description: "Manage Commands Inside Projects",
		icon: FolderOpenDot as typeof SvelteComponent
	};

	let commit: ToolCardType = {
		name: "commit",
		description: "Quickly commits code",
		icon: Volleyball as typeof SvelteComponent
	};

	let repo: ToolCardType = {
		name: "repo",
		description: "Browser Github repositories",
		icon: Globe as typeof SvelteComponent
	};

	let al: ToolCardType = {
		name: "al",
		description: "Create local aliases, like package.json but everywhere",
		icon: Drama as typeof SvelteComponent
	};
</script>

<section class="s flex w-full flex-col items-center justify-center gap-4" id="toolsSection">
	<div class="flex w-full flex-col items-start justify-start gap-2 py-4">
		<h2 class="text-4xl">
			Targeted tools for <ItalicText color="text-orange-500">developers</ItalicText>
		</h2>
		<p class="text-xl text-muted-foreground">
			Tools that help you with your projects, so you can focus on the important things
		</p>
	</div>
	<div class="grid w-full grid-cols-3 gap-4">
		<ToolCard tool={branch} />
		<ToolCard tool={pm} />
		<ToolCard tool={commit} />
	</div>
	<div class="grid w-full grid-cols-2 gap-4">
		<ToolCard tool={repo} />
		<ToolCard tool={al} />
	</div>
</section>
