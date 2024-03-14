<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>You may not be able to get Carer Support Payment</Heading1>

<Body>You might be able to get Carer Support Payment if either:</Body>
<BulletList>
	<BulletPoint>you live in an EU country, Switzerland, Norway, Liechtenstein, Iceland or Gibraltar and have a genuine and sufficient link to Scotland</BulletPoint>
	<BulletPoint>you or a family member are posted abroad as a member of the UK Armed Forces, or as a UK Civil Servant</BulletPoint>
</BulletList>

<Body>A genuine and sufficient link is where you do not live in Scotland, but have a link to Scotland. For example, you have spent a significant part of your life in Scotland.</Body>
<BodyLink link="">Read about who can apply for Carer Support Payment</BodyLink>

<div class="block mt-12">
	<PrimaryButton text="Next" destination="q2-do-you-get-carers-allowance" />
</div>

