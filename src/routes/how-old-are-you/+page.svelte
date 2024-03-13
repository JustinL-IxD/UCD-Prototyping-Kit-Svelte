<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		'15 or under': 'based-on-answers-you-cannot-get-carer-support-payment',
		'16 to 19': 'your-education-and-training',
		'20 or over': 'eligibility/residency',
	};
</script>

<BodySmall>Carer Support Payment checker</BodySmall>
<Heading1>How old are you?</Heading1>
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
