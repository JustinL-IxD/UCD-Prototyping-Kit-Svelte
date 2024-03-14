<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>About your earnings</Heading1>
<Body>To get Carer Support Payment, your 'take home pay' cannot be more than £151 a week. This is about the same as £654 a month, or £7852 a year.</Body>
<Body>If you apply for Carer Support Payment, you'll get support to work out how much you earn a week on average.</Body>

<Body>To work out your take home pay, we add up:</Body>
<BulletList>
	<BulletPoint>your salary if you’re an employee</BulletPoint>
	<BulletPoint>any income from self-employment</BulletPoint>
	<BulletPoint>additional earnings you tell us about</BulletPoint>
</BulletList>

<Body>We take off:</Body>
<BulletList>
	<BulletPoint>tax or National Insurance you pay</BulletPoint>
	<BulletPoint>some expenses you tell us about</BulletPoint>
	<BulletPoint>pension contributions you pay</BulletPoint>
</BulletList>

<Body>Some income does not count towards your take home pay. For example</Body>
<BulletList>
	<BulletPoint>other benefits</BulletPoint>
	<BulletPoint>pensions</BulletPoint>
	<BulletPoint>asome income from property</BulletPoint>
</BulletList>

<Heading3>If your take home pay is sometimes more than £151 a week</Heading3>
<Body>It’s okay if your take home pay is sometimes more than £151 a week. We’ll work out how much your average take home pay is.</Body>

<PrimaryButton text="Next" destination='q9-pension-age' />


