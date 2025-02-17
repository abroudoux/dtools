<script lang="ts">
	export let color: string;
</script>

<span class={`font-serif italic text-orange-500 ${color}`}>
	<slot />
</span>
