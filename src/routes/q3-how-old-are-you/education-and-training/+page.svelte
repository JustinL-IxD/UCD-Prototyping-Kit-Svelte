<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';

	let YoungCarerGrant: string = "https://www.mygov.scot/young-carer-grant";
	let findOutMore: string = "https://www.mygov.scot/help-if-youre-a-carer";
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Your education and training if you're aged 16 to 19</Heading1>
<Body>You cannot usually get Carer Support Payment if you’re doing certain courses or training programmes.</Body>
<Body>This includes if you’re doing these school or college courses for 21 hours or more a week:</Body>
<BulletList>
	<BulletPoint>National Certificates (NC) levels 1 to 6</BulletPoint>
	<BulletPoint>National Qualifications (NQ) levels 1 to 6</BulletPoint>
	<BulletPoint>Scottish Vocational Qualifications (SVQ) level 1 or 2</BulletPoint>
	<BulletPoint>Scottish Highers or Advanced Highers</BulletPoint>
	<BulletPoint>A combination of Highers and Advanced Highers called a Baccalaureate</BulletPoint>
	<BulletPoint>Similar courses at school or college, for example A levels</BulletPoint>
</BulletList>
<Body>Or if you’re on a training programme supported by your local council, such as No One Left Behind.</Body>
<Body>But there are some special circumstances when you can get Carer Support Payment.</Body>
<Body>This includes if you:</Body>
<BulletList>
	<BulletPoint>get Universal Credit</BulletPoint>
	<BulletPoint>do not get any financial support from your parents or guardians</BulletPoint>
	<BulletPoint>are a parent, guardian or foster parent for a child or young person</BulletPoint>
	<BulletPoint>get a disability benefit and have been assessed as having limited capability for work</BulletPoint>
	<BulletPoint>get a disability benefit and you have certain medical conditions or are getting certain treatments</BulletPoint>
	<BulletPoint>live with a partner and the special circumstances apply to them</BulletPoint>
</BulletList>
<Heading3>If your circumstances change</Heading3>
<Body>You may be eligible for Carer Support Payment if your circumstances change. You should apply again if you:</Body>
<BulletList>
	<BulletPoint>stop studying school or college for 21 hours or more a week</BulletPoint>
	<BulletPoint>stop doing a programme like No One Left Behind</BulletPoint>
	<BulletPoint>turn 20</BulletPoint>
	<BulletPoint>stop your current course and start doing HNDs, HNCs or university degrees</BulletPoint>
</BulletList>
<Heading3>Other benefits you can get</Heading3>
<Body>You may be able to get <BodyLink link={YoungCarerGrant}>Young Carer Grant.</BodyLink></Body>
<Body><BodyLink link={findOutMore}>Find out about other support for carers.</BodyLink></Body>
<PrimaryButton text="Next" destination="q4-qualifying-benefits" />
