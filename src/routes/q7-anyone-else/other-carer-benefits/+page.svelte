<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		"Yes": 'q7-anyone-else/based-on-answers',
		"No": 'q8-do-you-earn-money',
		"Not sure": 'q8-do-you-earn-money',
	};
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>If someone else gets benefits for caring for the same person</Heading1>
<Body>You've told us that someone else is an unpaid carer for the same person.</Body>

<BulletList>
	<BodySmall>Need to work out component structure so this is in the question</BodySmall>
	<BulletPoint>Carer Support Payment</BulletPoint>
	<BulletPoint>Carer’s Allowance</BulletPoint>
	<BulletPoint>Universal Credit carer element</BulletPoint>
</BulletList>

<Radios 
	question="Does the other carer get any of these benefits for caring for the same person?" 
	hint="You can continue if you're not sure, but you'll need to know this if you apply"
	bind:selectedOption={selectedRadioOption} 
	{radioOptions} 
/>
<PrimaryButton text="Next" destination={selectedRadioOption} />



