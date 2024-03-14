<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		"Yes": 'q9-pension-age/speedbump',
		"No": '10-apply-for-CSP',
	};

	let PensionAge: string = "https://www.gov.uk/state-pension-age"
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Have you reached State Pension age?</Heading1>
<Body><BodyLink link={PensionAge}>Check your State Pension age</BodyLink></Body>

<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
