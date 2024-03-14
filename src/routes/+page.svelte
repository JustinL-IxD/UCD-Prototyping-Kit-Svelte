<script>
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Who can apply</Heading1>
<BodySmall>Last updated: 26 Jun 2023</BodySmall>
<Heading3>Contents</Heading3>
<BulletList>
	<BulletPoint><BodyLink link="/">Carer Support Payment</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="/">What a carer is</BodyLink></BulletPoint>
	<BulletPoint>Who can apply</BulletPoint>
	<BulletPoint><BodyLink link="/">Employment and earnings</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="/">Effects on other benefits</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="/">If you get state pension</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="/">How to apply</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="/">Help to apply</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="/">After you apply</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="/">Other support for carers</BodyLink></BulletPoint>
	<BulletPoint><BodyLink link="/">If your circumstances change</BodyLink></BulletPoint>
</BulletList>
<Body>You can check if you might be able to get Carer Support Payment by answering a few questions.</Body>
<Body>You’ll be asked:</Body>
<BulletList>
	<BulletPoint>your age</BulletPoint>
	<BulletPoint>where you live</BulletPoint>
	<BulletPoint>what benefits the person you care for gets</BulletPoint>
	<BulletPoint>how many hours of care you provide</BulletPoint>
	<BulletPoint>if anyone else cares for the same person</BulletPoint>
	<BulletPoint>if you earn any money</BulletPoint>
	<BulletPoint>if you’re studying at school or college</BulletPoint>
</BulletList>
<PrimaryButton text="Check if you're eligible" destination="q1-do-you-live-in-scotland" />
