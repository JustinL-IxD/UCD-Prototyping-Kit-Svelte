<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';

	let bulletPoints = [
		'support for carers in England and Wales',
		'support for carers in Northern Ireland'
	];
</script>

<BodySmall text="Carer Support Payment" />
<Heading1 text="Based on your answers, you cannot get Carer Support Payment" />
<Body
	text="If you live in England, Wales or Northern Ireland, you cannot get Carer Support Payment. But you might be able to get Carer's Allowance."
/>
<Body text="Find out more about:" />
<BulletList {bulletPoints} />
