<script lang="ts">
	import Body from '$lib/components/Typography/Body.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		'England, Wales or Northern Ireland': 'q1a-residency/soft-stop',
		'The EU, Switzerland, Norway, Iceland, Liechtenstein or Gibraltar': 'q1a-residency/soft-stop-2',
		'I do not live in any of these places': 'q1a-residency/soft-stop-2'
	};
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Where do you live?</Heading1>
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
