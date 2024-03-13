<script lang="ts">
	// Helper navigation function
	import { continueLocation } from '$lib/helper';

	// Destination string variable
	export let destination: string;
	export let text: string;
</script>

<button class="primary-button" on:click={() => continueLocation(`${destination}`)}>{text}</button>

<style lang="postcss">
	.primary-button {
		@apply font-roboto px-4 py-2 text-white bg-SG-blue-primary shadow-inner border-2 border-SG-blue-primary;
		@apply hover:bg-SG-hover hover:border-SG-hover;
		@apply active:bg-SG-focus active:shadow-black-shadow active:text-black active:border-SG-focus;
		@apply disabled:bg-gray-400 disabled:cursor-not-allowed;
	}
</style>
