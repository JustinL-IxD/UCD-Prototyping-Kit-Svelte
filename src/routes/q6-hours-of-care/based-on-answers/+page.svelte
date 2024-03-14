<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';

	let CarerSupport: string = "https://www.mygov.scot/carer-support";
	let CarerCharter: string = "https://www.gov.scot/publications/carers-charter/pages/3/";
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Based on your answers, you cannot get Carer Support Payment</Heading1>
<Body>To get Carer Support Payment, you must provide care for 35 hours or more a week.</Body>
<Body>Find out more about who can get Carer Support Payment (link to mygov page)</Body>
<Heading3>If you’re aged 16, 17 or 18</Heading3>
<Body>You may be able to get Young Carer Grant if:</Body>
<BulletList>
	<BulletPoint>you’re aged 16, 17 or 18</BulletPoint>
	<BulletPoint>you care for 1, 2 or 3 people for an average of at least 16 hours a week </BulletPoint>
</BulletList>
<Body><BodyLink link={CarerSupport}>Find out more about support for carers</BodyLink></Body>

<Heading3>Other support for you as a carer</Heading3>
<Body>You may be able to get other support when you’re caring for someone. This could include other benefits, wellbeing support and help to take breaks from care.</Body>
<Body><BodyLink link={CarerSupport}>Read about support for carers</BodyLink></Body>

<Heading3>Get a carer support plan</Heading3>
<Body>You have the right to a personalised plan to identify your needs as a carer. This is known as:</Body>
<BulletList>
	<BulletPoint><BodyLink link={CarerCharter}>an adult carer support plan</BodyLink></BulletPoint>
	<BulletPoint>for young carers, <BodyLink link={CarerCharter}>a young carer statement</BodyLink></BulletPoint>
</BulletList>


