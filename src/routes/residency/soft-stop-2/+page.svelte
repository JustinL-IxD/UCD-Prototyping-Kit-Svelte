<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';

	let bulletPoints = [
		'you live in an EU country, Switzerland, Norway, Liechtenstein, Iceland or Gibraltar and have a genuine and sufficient link to Scotland',
		'you or a family member are posted abroad as a member of the UK Armed Forces, or as a UK Civil Servant'
	];
</script>

<BodySmall text="Carer Support Payment" />
<Heading1 text="You may not be able to get Carer Support Payment" />
<Body text="You might be able to get Carer Support Payment if either:" />
<BulletList {bulletPoints} />
<Body
	text="A genuine and sufficient link is where you do not live in Scotland, but have a link to Scotland. For example, you have spent a significant part of your life in Scotland."
/>
<Body text="Read about who can apply for Carer Support Payment" />
