<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import Body from '$lib/components/Typography/Body.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		"Yes": 'q8-do-you-earn-money/earnings-speedbump',
		"No": 'q9-pension-age',
	};
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Do you get any money from employment, self-employment or through renting out property?</Heading1>
<Body>To get Carer Support Payment, you cannot earn more than £151 a week on average after expenses. This is about the same as £654 a month, or £7852 a year. It’s okay if your take home pay is sometimes more than £151 a week. If you apply for Carer Support Payment, we’ll work out how much your average take home pay is.</Body>


<Radios bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
