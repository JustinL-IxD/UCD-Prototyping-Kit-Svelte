<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import Body from '$lib/components/Typography/Body.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		"Yes": 'q7-anyone-else/other-carer-benefits',
		"No": 'q8-do-you-earn-money',
	};
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Tell us if anyone else is an unpaid carer for the same person</Heading1>
<Body>An unpaid carer is someone who is not:</Body>
<BulletList>
	<BulletPoint>a paid care worker</BulletPoint>
	<BulletPoint>providing care through a charity or volunteering scheme</BulletPoint>
</BulletList>

<Radios question="Is anyone else an unpaid carer for this person?" bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
