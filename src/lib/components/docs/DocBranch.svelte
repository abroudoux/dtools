<script lang="ts">
	import Code from "$lib/components/Code.svelte";
</script>

<div class="w-full rounded-lg border p-4 text-xl leading-10">
	<Code>branch</Code> allows you to manage your Git branches with various and commons actions. Once you're
	in interactive mode, either by using <Code>run</Code> / the <Code>-r</Code> flag or simply by running
	branch, you can manage your branches with commons actions like <Code>create</Code>, <Code
		>delete</Code
	>, <Code>rename</Code>, <Code>merge</Code>, <Code>checkout</Code>, <Code>list</Code> and <Code
		>search</Code
	>.

	<Code>Choose a branch: develop feature/ui > * main</Code>
</div>
