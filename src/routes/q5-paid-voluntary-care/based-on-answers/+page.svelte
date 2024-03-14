<script lang="ts">
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import BodyLink from '$lib/components/Typography/BodyLink.svelte';

	let CarerSupport: string = "https://www.mygov.scot/carer-support";
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Based on your answers, you cannot get Carer Support Payment</Heading1>
<Body>You cannot get Carer Support Payment if you’re a:</Body>
<BulletList>
	<BulletPoint>paid care worker</BulletPoint>
	<BulletPoint>volunteer carer through a volunteering scheme or charity</BulletPoint>
</BulletList>
<Body><BodyLink link={CarerSupport}>Find out more about support for carers</BodyLink></Body>


