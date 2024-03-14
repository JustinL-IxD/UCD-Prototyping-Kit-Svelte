<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';
	import Heading2 from '$lib/components/Typography/Heading2.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';

	let aged1115Link: string = "https://www.mygov.scot/young-carer-support";
	let CarerSupport: string = "https://www.mygov.scot/carer-support";
	let CarerCharter: string = "https://www.gov.scot/publications/carers-charter/pages/3/";

</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Based on your answers, you cannot get Carer Support Payment</Heading1>
<Body>To get Carer Support Payment, the person you care for must get certain benefits.</Body>
<Body><BodyLink link=''>Find out more about who can get Carer Support Payment</BodyLink></Body>
<Heading2>Other support for you as a carer</Heading2>
<Body>You may be able to get other support when you’re caring for someone. This could include other benefits, wellbeing support and help to take breaks from care. </Body>
<Body><BodyLink link={CarerSupport}>Find out more about support for carers</BodyLink></Body>
<Heading3>Get a carer support plan</Heading3>
<Body>You have the right to a personalised plan to identify your needs as a carer. This is known as:</Body>
<BulletList>
	<BulletPoint><BodyLink link={CarerCharter}>an adult carer support plan</BodyLink></BulletPoint>
	<BulletPoint>for young carers, <BodyLink link={CarerCharter}>a young carer statement</BodyLink></BulletPoint>
</BulletList>
