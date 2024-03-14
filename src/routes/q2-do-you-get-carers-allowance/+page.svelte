<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		Yes: 'no-need-to-apply',
		No: 'q3-how-old-are-you'
	};

	let CarersAllowance: string = "https://www.gov.uk/carers-allowance/eligibility"
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Do you get Carer's Allowance</Heading1>
<BodySmall>Last updated: 26 Jun 2023</BodySmall>
<Body>This includes if you've been awarded Carer's Allowance but you do not get any payments. For example, because you already get another benefit like State Pension. This is sometimes called underlying entitlement. <BodyLink link={CarersAllowance}>Find out more about Carer's Allowance if you're on State Pension.</BodyLink></Body>
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
