<script>
	let isOpen = false;

	function handleClick() {
		isOpen = !isOpen;
	}
</script>

<div class="my-8">
	<button on:click={handleClick}>
		<p class="text-SG-blue-primary underline">This is an expandable list</p>
	</button>
	{#if isOpen}
		<slot />
	{/if}
</div>
