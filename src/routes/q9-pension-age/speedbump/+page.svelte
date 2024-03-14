<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>State Pension and Carer Support Payment</Heading1>
<Body>If you get State Pension, you might be eligible for Carer Support Payment but you will not get any payment. This is because you cannot get State Pension and Carer Support Payment at the same time. </Body>
<Body>You can still apply for Carer Support Payment. If you’re eligible you’ll have ‘underlying entitlement’ to Carer Support Payment’. This can help you to get either:</Body>
<BulletList>
	<BulletPoint>benefits you could not get before</BulletPoint>
	<BulletPoint>n extra amount paid on top of your other benefits</BulletPoint>
</BulletList>

<Heading3>Benefits you can get an extra amount with</Heading3>
<Body>Underlying entitlement might help you get an extra amount if you get any of these benefits:</Body>
<BulletList>
	<BulletPoint><BodyLink link="">Pension Credit</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="">income-based Jobseeker’s Allowance</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="">income-related Employment and Support Allowance</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="">income Support</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="">Council Tax Reduction</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="">Universal Credit</BodyLink></BulletPoint>
</BulletList>

<Body>If you’re eligible for Carer Support Payment, your work requirements for these benefits will be reduced: </Body>
<BulletList>
	<BulletPoint><BodyLink link="">Working Tax Credit</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="">Child Tax Credit</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="">Tax-Free Childcare</BodyLink></BulletPoint>
</BulletList>

<PrimaryButton text="Next" destination='10-apply-for-CSP' />




