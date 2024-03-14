<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		'15 or under': 'q3-how-old-are-you/based-on-answers',
		'16 to 19': 'q3-how-old-are-you/education-and-training',
		'20 or over': 'q4-qualifying-benefits',
	};
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>How old are you?</Heading1>
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
