<script>
	// Component imports
	import BulletList from '$lib/components/BulletList.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import SaveBackButtons from '$lib/components/Buttons/SaveBackButtons.svelte';
	import TextInput from '$lib/components/TextInput.svelte';

	// Navigation Code
	import { goto } from '$app/navigation';
	let selectedRadioOption = 'nothing';

	let radioOptions = {
		Yes: 'yes',
		No: 'no',
		Maybe: 'maybe',
		'Deffo Not': ' '
	};

	// Bullet point list items
	let bulletPoints = [
		'Go back to the page before',
		'Use the radio button to go somewhere else',
		'fix spacing'
	];
</script>

<!-- PAGE STRUCTURE -->

<h1>This is the second page</h1>
<p>On this page we are exploring the idea of movement around the application</p>
<p>I want us to be able to:</p>
<BulletList {bulletPoints} />
<TextInput question="How much experience do you have?" />
<Radios
	question="Do you like prototyping in code"
	hint="I think you should!"
	{radioOptions}
	bind:selectedOption={selectedRadioOption}
/>
<SaveBackButtons destination={selectedRadioOption} />
{selectedRadioOption}
