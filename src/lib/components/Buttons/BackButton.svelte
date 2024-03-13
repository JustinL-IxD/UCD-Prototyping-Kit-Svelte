<button class="secondary-button" on:click={() => window.history.back()}>Back</button>

<style lang="postcss">
	.secondary-button {
		@apply font-roboto px-4 py-2 font-bold text-SG-blue-primary bg-white shadow-inner border-2 border-SG-blue-primary;
		@apply hover:bg-SG-hover-background;
		@apply active:bg-SG-focus active:shadow-black-shadow active:text-black active:border-SG-focus;
		@apply disabled:bg-gray-400 disabled:cursor-not-allowed;
	}
</style>
