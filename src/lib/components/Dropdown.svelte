<script>
	let isOpen = false;

	let items = ['Item 1', 'Item 2', 'Item 3'];

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<div>
	<div>
		<button
			on:click={toggleDropdown}
			class="w-full bg-white border-2 {isOpen
				? 'border-yellow-500'
				: 'border-gray-300'} rounded-md shadow-sm px-4 py-2 inline-flex justify-between items-center focus:outline-none"
		>
			<span>{isOpen ? items[0] : 'Item'}</span>
			<svg
				class="w-4 h-4 ml-2 {isOpen ? 'text-yellow-500' : 'text-gray-500'}"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		{#if isOpen}
			<div class="absolute z-10 w-full mt-2 bg-white border border-yellow-500 rounded-md shadow-lg">
				<ul class="py-1">
					{#each items as item, index}
						<li>
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-500 hover:text-white"
								>{item}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</div>
