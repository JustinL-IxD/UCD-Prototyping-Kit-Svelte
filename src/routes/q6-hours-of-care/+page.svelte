<script lang="ts">
	import BodySmall from '$lib/components/Typography/BodySmall.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import BulletPoint from '$lib/components/Typography/BulletPoint.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import Heading2 from '$lib/components/Typography/Heading2.svelte';
	import ExpandableList from '$lib/components/ExpandableList.svelte';

	let selectedRadioOption: string = 'nothing';
	let radioOptions: Record<string, string> = {
		"Less than 35": 'q6-hours-of-care/based-on-answers',
		"35 or more (this includes if you provide care for someone all day everyday)": 'q7-anyone-else',
	};
</script>

<Body>Carer Support Payment checker</Body>
<Heading1>Time spent providing care</Heading1>
<Body>To get Carer Support Payment, you must provide care for 35 hours or more a week.</Body>
<Heading2>What is care?</Heading2>
<BodySmall>Dont't have accordion in code base yet</BodySmall>
<ExpandableList name="Examples of providing care">
	<Body>You might be caring for someone if you:</Body>
	<BulletList>
		<BulletPoint>help them with their mental health</BulletPoint>
		<BulletPoint>give them emotional support </BulletPoint>
		<BulletPoint>help them during an illness </BulletPoint>
		<BulletPoint>support them with a disability</BulletPoint>
		<BulletPoint>support them if they have an addiction.</BulletPoint>
	</BulletList>
</ExpandableList>
<ExpandableList name="Providing care for someone's mental health">
	<Body>If they need help with their mental health, or support with how they're feeling, you might: </Body>
	<BulletList>
		<BulletPoint>comfort them during a panic attack </BulletPoint>
		<BulletPoint>stay close by so they do not feel alone </BulletPoint>
		<BulletPoint>help them through a crisis</BulletPoint>
		<BulletPoint>check on them throughout the day </BulletPoint>
		<BulletPoint>make sure they're safe </BulletPoint>
		<BulletPoint>keep them company</BulletPoint>
	</BulletList>
</ExpandableList>
<ExpandableList name="Providing care for someone with a disability">
	<Body>If they have an illness or disability, you might: </Body>
	<BulletList>
		<BulletPoint>help them to get around</BulletPoint>
		<BulletPoint>dress them</BulletPoint>
		<BulletPoint>give them, or remind them to take, any medicines they need</BulletPoint>
		<BulletPoint>help them to shower or use the toilet</BulletPoint>
		<BulletPoint>cook their meals for them</BulletPoint>
		<BulletPoint>do their food shopping</BulletPoint>
		<BulletPoint>translate for them.</BulletPoint>
	</BulletList>
</ExpandableList>
<Radios question="How many hours of care do you provide a week?" bind:selectedOption={selectedRadioOption} {radioOptions} />
<PrimaryButton text="Next" destination={selectedRadioOption} />
