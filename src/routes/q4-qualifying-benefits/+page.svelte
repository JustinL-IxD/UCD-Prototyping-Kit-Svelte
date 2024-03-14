<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		Yes: 'q5-paid-voluntary-care',
		No: 'q4-qualifying-benefits/based-on-answers',
		"Not sure": 'q5-paid-voluntary-care'
	};
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Benefits the person you care for gets</Heading1>
<Body>To get Carer Support Payment, the person you care for must get one or more of these disability benefits.</Body>
<BulletList>
	<BulletPoint>Adult Disability Payment – daily living component at the standard or enhanced rate</BulletPoint>
	<BulletPoint>Child Disability Payment – middle or highest rate care component</BulletPoint>
	<BulletPoint>Attendance Allowance</BulletPoint>
	<BulletPoint>Constant Attendant Allowance at or above normal maximum rate with Industrial Injuries Disablement Benefit</BulletPoint>
	<BulletPoint>Constant Attendance Allowance at or above the basic (full day) rate with a War Disablement Pension</BulletPoint>
	<BulletPoint>Armed Forces Independence Payment</BulletPoint>
	<BulletPoint>Personal Independence Payment – daily living component</BulletPoint>
	<BulletPoint>Disability Living Allowance – middle or highest care rate</BulletPoint>
</BulletList>
<Heading3>How to find out what benefits the person you care for gets</Heading3>
<Body>If you and the person you care for are not sure which benefits they get, you can check their benefit award letters. These are the letters someone gets when they're first awarded a benefit. If you cannot find the letter, you can contact Social Security Scotland or the Department for Work and Pensions (DWP).</Body>
<Radios 
	question="Does the person you care for get any of these benefits?" 
	hint="You ca continue if you're not sure, but you'll need to know this when you apply" 
	bind:selectedOption={selectedRadioOption} 
	{radioOptions} 
/>
<PrimaryButton text="Next" destination={selectedRadioOption} />
