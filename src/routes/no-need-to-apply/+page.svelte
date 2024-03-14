<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';

	let CarerSupportPayment: string = "https://www.mygov.scot/carers-allowance-changes-in-scotland"
</script>

<BodySmall>Carer Support Payment checker</BodySmall>
<Heading1>You do not need to apply for Carer Support Payment</Heading1>
<Body>Your Carer’s Allowance  from the Department for Work and Pensions (DWP) will move to Social Security Scotland if you:</Body>
<BulletList>
	<BulletPoint>get Carer's Allowance</BulletPoint>
	<BulletPoint>live in Scotland</BulletPoint>
</BulletList>
<Body>If you get Carer’s Allowance, you do not need to apply for Carer Support Payment. DWP and Social Security Scotland will move your benefit for you.</Body>
<Body>When you move from Carer’s Allowance to Carer Support Payment, you’ll keep getting the same amount.</Body>
<Body>Before you move to Carer Support Payment, Social Security Scotland will write to tell you how your payments will work and when you’ll get them.</Body>
<div class="mt-12">
	<Heading3>Carer's Allowance Supplement</Heading3>
	<Body>If you get Carer’s Allowance Supplement, you’ll still get payments twice a year.</Body>
	<BodyLink link={CarerSupportPayment}>Find out more about moving from Carer’s Allowance to Carer Support Payment</BodyLink>
</div>
