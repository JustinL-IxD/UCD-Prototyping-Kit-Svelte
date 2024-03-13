<script lang="ts">
	let active = false; // state to track if input is active
	export let error = false;
	export let optional = false;
	export let question = 'Set question text';
	export let hint = 'Set hint text';
</script>

<div class="my-4">
	<div class="flex items-end align-baseline">
		<p class="font-roboto font-bold">{question}</p>
		{#if optional}
			<p class="font-roboto ml-1">(optional)</p>
		{/if}
	</div>
	<p class="hint-text">{hint}</p>
	{#if error}
		<p class="text-SG-error font-roboto font-bold mb-2">This field is required</p>
	{/if}
	<textarea
		class="input-field {error ? 'border-4 border-SG-error' : 'border-2 border-black'} {active
			? 'input-focused'
			: ''}"
		placeholder="Placeholder"
		on:focus={() => (active = true)}
		on:blur={() => (active = false)}
	></textarea>
</div>

<style lang="postcss">
	:global(.input-focused),
	.form-input:focus {
		box-shadow: 0 0 0 2px #fdd522;
		outline: none;
	}

	.input-field {
		@apply form-input w-[800px] h-[300px] p-1;
	}
	.hint-text {
		@apply text-SG-grey-hint mb-1;
	}
</style>
