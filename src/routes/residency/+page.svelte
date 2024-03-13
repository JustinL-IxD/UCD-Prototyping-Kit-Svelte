<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		'England, Wales or Northern Ireland': 'residency/soft-stop',
		'The EU, Switzerland, Norway, Iceland, Liechtenstein or Gibraltar': 'residency/soft-stop-2',
		'I do not live in any of these places': 'residency/soft-stop-2'
	};
</script>

<BodySmall>Carer Support Payment checker</BodySmall>
<Heading1>Where do you live?</Heading1>
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
