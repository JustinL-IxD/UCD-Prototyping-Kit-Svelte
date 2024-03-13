<script>
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
</script>

<BodySmall>Carer Support Payment checker</BodySmall>
<Heading1>Who can apply</Heading1>
<Heading3 text="Contents" />
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
<PrimaryButton text="Check if you're eligible" destination="do-you-live-in-scotland" />
