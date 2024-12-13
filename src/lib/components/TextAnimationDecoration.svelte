<script lang="ts">
	export let href: string;
</script>

<a
	class="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
	{href}
>
	<span class="text-foreground">
		<slot />
	</span>
</a>
