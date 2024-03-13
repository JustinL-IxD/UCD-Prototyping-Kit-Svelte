<script lang="ts">
	export let error = false;
	let selectedOption: string[] = [];
	export let checkboxOptions: string[] = [];
</script>

<div class="flex flex-col my-4 {error ? 'border-l-4 border-l-SG-error pl-4' : ''}">
	<p class="font-bold">Checkbox Component</p>
	<p class="text-SG-grey-hint mb-1">This needs to work so you can add multiple</p>
	{#if error}
		<p class="text-SG-error font-roboto font-bold mb-2">This field is required</p>
	{/if}
	<div class="space-y-2">
		{#each checkboxOptions as option}
			<div class="flex items-center">
				<input
					type="checkbox"
					id={option}
					class="form-checkbox checkbox"
					bind:group={selectedOption}
					value={option}
				/>
				<label for={option} class="ml-2">{option}</label>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.checkbox {
		width: 2.5rem;
		height: 2.5rem;
		border-width: 4px;
		border-style: solid;
	}
	.checkbox:hover {
		border-color: #333333;
	}
	.checkbox:checked {
		background-color: black;
		border-color: yellow;
	}

	.checkbox:checked:hover {
		background-color: black;
		border-color: yellow;
	}
</style>

