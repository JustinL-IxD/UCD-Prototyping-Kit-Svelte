<script lang="ts">
	// Componnent imports
	import BackButton from './BackButton.svelte';
	import ContinueButton from './ContinueButton.svelte';

	// Helper navigation function
	import { continueLocation } from '$lib/helper';

	// Destination string variable
	export let destination: string;
</script>

<div class="my-8">
	<BackButton />
	<ContinueButton on:click={() => continueLocation(`${destination}`)} />
</div>
