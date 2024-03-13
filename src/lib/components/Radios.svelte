<script lang="ts">
	export let selectedOption: string = '';
	export let error = false;
	export let question: string | undefined = undefined;
	export let hint: string | undefined = undefined;
	export let radioOptions: Record<string, string> = {};
</script>

<div class="flex flex-col my-4 {error ? 'border-l-4 border-l-SG-error pl-4' : ''}">
	{#if question !== undefined}
		<p class="font-bold">{question}</p>
	{/if}
	{#if hint !== undefined}
		<p class="text-SG-grey-hint mb-1">{hint}</p>
	{/if}
	{#if error}
		<p class="text-SG-error font-roboto font-bold mb-2">This field is required</p>
	{/if}
	<div class=" flex flex-col space-y-2">
		{#each Object.entries(radioOptions) as [key, option]}
			<label class="inline-flex items-center">
				<input
					type="radio"
					class="form-radio h-5 w-5 border-gray-300"
					name="usefulPage"
					bind:group={selectedOption}
					value={option}
				/>
				<span class="ml-2">{key}</span>
			</label>
		{/each}
	</div>
</div>
