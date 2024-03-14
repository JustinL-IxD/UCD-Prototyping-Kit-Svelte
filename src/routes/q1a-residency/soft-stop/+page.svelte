<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';

	let helpForCarers: string = "https://www.gov.uk/browse/benefits/help-for-carers";
	let NICarers: string = "https://www.nidirect.gov.uk/information-and-services/benefits-and-financial-support/financial-support-when-caring-someone";
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Based on your answers, you cannot get Carer Support Payment</Heading1>
<Body>If you live in England, Wales or Northern Ireland, you cannot get Carer Support Payment. But you might be able to get Carer's Allowance.</Body>
<Body>Find out more about:</Body>
<BulletList>
	<BulletPoint><BodyLink link={helpForCarers}>support for carers in England and Wales</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link={NICarers}>support for carers in Northern Ireland</BodyLink></BulletPoint>
</BulletList>
