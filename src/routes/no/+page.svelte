<script lang="ts">
	import SaveBackButtons from '$lib/components/Buttons/SaveBackButtons.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';

	// Create a page ID variable
    // Add this page ID variable to the store
    // Each component ID on the page will be associated with the page ID
</script>

<Heading1 text="This is the page before answers" />
<Body
	text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
    ut aliquip ex ea commodo consequat."
/>

<TextInput question="What is the deal?" error />
<SaveBackButtons destination="answers" />
