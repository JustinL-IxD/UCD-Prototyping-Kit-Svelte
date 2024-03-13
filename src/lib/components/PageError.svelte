<script>
	import Body from './Typography/Body.svelte';
	import Heading2 from './Typography/Heading2.svelte';
</script>

<div class="errorContainer">
	<Heading2 text="Error summary" />
	<Body text="There are errors on the page" />
	<a href="/" class="text-SG-error underline">Error Link</a>
</div>

<style lang="postcss">
    .errorContainer {
        @apply p-2 border-4 border-SG-error;
        @apply md:w-[50%];
    }
</style>
