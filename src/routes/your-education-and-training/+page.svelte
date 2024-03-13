<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		Yes: 'no-need-to-apply',
		No: 'how-old-are-you'
	};
</script>

<BodySmall>Carer Support Payment checker</BodySmall>
<Heading1>Your education and training if you're aged 16 to 19</Heading1>
<Body>This includes if you've been awarded Carer's Allowance but you do not get any payments. For example, because you already get another benefit like State Pension. This is sometimes called underlying entitlement. Find out more about Carer's Allowance if you're on State Pension.</Body>
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
