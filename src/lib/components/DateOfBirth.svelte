<script>
	let active = false; // state to track if input is active
	let day = '';
	let month = '';
	let year = '';
	export let error = false;
</script>

<div class="my-4 {error ? 'border-l-4 border-l-SG-error pl-4' : ''}">
	<label for="dob" class="block font-bold">What is your date of birth?</label>
	<p class="text-SG-grey-hint">For example, 31 2 1980</p>
	{#if error}
		<p class="text-SG-error font-roboto font-bold mb-2">This field is required</p>
	{/if}
	<div class="mt-1 flex space-x-1 items-end">
		<div>
			<label for="day" class="block">Day</label>
			<input
				type="number"
				name="day"
				id="day"
				class="form-input w-[80px] p-1 border-2 border-black {active ? 'input-focused' : ''}"
				placeholder="DD"
				bind:value={day}
			/>
		</div>
		<div>
			<label for="month" class="block">Month</label>
			<input
				type="number"
				name="month"
				id="month"
				class="form-input w-[80px] p-1 border-2 border-black {active ? 'input-focused' : ''}"
				placeholder="MM"
				bind:value={month}
			/>
		</div>
		<div>
			<label for="year" class="block">Year</label>
			<input
				type="number"
				name="year"
				id="year"
				class="form-input w-[150px] p-1 border-2 border-black {active ? 'input-focused' : ''}"
				placeholder="YYYY"
				bind:value={year}
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(.input-focused),
	.form-input:focus {
		box-shadow: 0 0 0 2px #fdd522;
		outline: none;
	}
</style>
