<script>
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';

	let bulletPoints = [
		'your age',
		'where you live',
		'what benefits the person you care for gets',
		'how many hours of care you provide',
		'if anyone else cares for the same person',
		'if you earn any money',
		'if you’re studying at school or college'
	];
</script>

<BodySmall text="Carer Support Payment" />
<Heading1 text="Who can apply" />
<Heading3 text="Contents" />
<Body
	text="You can check if you might be able to get Carer Support Payment by answering a few questions."
/>
<Body text="You’ll be asked:" />
<BulletList {bulletPoints} />
<PrimaryButton text="Check if you're eligible" destination="do-you-live-in-scotland" />
