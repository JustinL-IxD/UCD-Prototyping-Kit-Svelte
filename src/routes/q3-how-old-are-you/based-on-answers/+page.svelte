<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';

	let aged1115Link: string = "https://www.mygov.scot/young-carer-support";
	let YoungCarerStatement: string = "https://young.scot/get-informed/what-is-a-young-carer-statement";
	let YoungCarerPackage: string = "https://young.scot/get-informed/young-carers-package/";

</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Based on your answers, you cannot get Carer Support Payment</Heading1>
<Body>To get Carer Support Payment you must be 16 or over.</Body>
<Body>If you’re aged 11 to 15, there’s other <BodyLink link={aged1115Link}>support for you as a young carer.</BodyLink></Body>
<Body>As a young carer, you have the right to get a plan that outlines your needs, and the support you may be able to get. This is called a <BodyLink link={YoungCarerStatement}>Young Carer Statement.</BodyLink></Body>
<Body>If you’re a young carer aged 11 to 18, you can get the <BodyLink link={YoungCarerPackage}>Young Carer Package from Young Scot</BodyLink> . What they offer changes but it can include:</Body>
<BulletList>
	<BulletPoint>shopping vouchers</BulletPoint>
	<BulletPoint>subscriptions</BulletPoint>
	<BulletPoint>chances to win prizes</BulletPoint>
</BulletList>
