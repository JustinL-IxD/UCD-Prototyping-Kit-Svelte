<script lang="ts">
	let isOpen = false;

	function handleClick() {
		isOpen = !isOpen;
	}

	export let name: String;
</script>

<div class="my-8">
	<button on:click={handleClick}>
		<p class="text-SG-blue-primary underline w-[100%]">{name}</p>
	</button>
	{#if isOpen}
		<slot />
	{/if}
</div>
