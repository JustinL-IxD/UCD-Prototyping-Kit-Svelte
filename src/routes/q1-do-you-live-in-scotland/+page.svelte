<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		Yes: 'q2-do-you-get-carers-allowance',
		No: 'q1a-residency'
	};
</script>


<Body>Carer Support Payment checker</Body>
<Heading1>Do you live in Scotland?</Heading1>
<BodySmall>Last updated: 26 Jun 2023</BodySmall>
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />


