<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import Body from '$lib/components/Typography/Body.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		"Professional paid care": 'q5-paid-voluntary-care/based-on-answers',
		"Care through a volunteering scheme or charity": 'q5-paid-voluntary-care/based-on-answers',
		"Unpaid care, for example as a family member, friend or neighbour": 'q6-hours-of-care'
	};
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>What kind of care do you provide for this person?</Heading1>
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
