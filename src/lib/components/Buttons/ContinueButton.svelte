<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}

</script>

<button class="primary-button" on:click={handleClick}>Continue</button>

<style lang="postcss">
	.primary-button {
		@apply font-roboto px-4 py-2 font-bold text-white bg-SG-blue-primary shadow-inner border-2 border-SG-blue-primary;
		@apply hover:bg-SG-hover hover:border-SG-hover;
		@apply active:bg-SG-focus active:shadow-black-shadow active:text-black active:border-SG-focus;
		@apply disabled:bg-gray-400 disabled:cursor-not-allowed;
	}
</style>
