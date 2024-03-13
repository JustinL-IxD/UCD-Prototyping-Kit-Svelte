<script lang="ts">
	// Component Imports
	import Checkboxes from '$lib/components/Checkboxes.svelte';
	import DateOfBirth from '$lib/components/DateOfBirth.svelte';
	import PrimaryButton from '$lib/components/Buttons/PrimaryButton.svelte';
	import SecondaryButton from '$lib/components/Buttons/SecondaryButton.svelte';
	import Radios from '$lib/components/Radios.svelte';
	import TextInputHint from '$lib/components/TextInputHint.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import TextAreaHint from '$lib/components/TextAreaHint.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import SaveBackButtons from '$lib/components/Buttons/SaveBackButtons.svelte';
	import Heading1 from '$lib/components/Typography/Heading1.svelte';
	import Heading2 from '$lib/components/Typography/Heading2.svelte';
	import Heading3 from '$lib/components/Typography/Heading3.svelte';
	import Heading4 from '$lib/components/Typography/Heading4.svelte';
	import Body from '$lib/components/Typography/Body.svelte';
	import BodyBold from '$lib/components/Typography/BodySmall.svelte';
	import HubItem from '$lib/components/Hub/HubItem.svelte';
	import HubItemGroup from '$lib/components/Hub/HubItemGroup.svelte';
	import PageError from '$lib/components/PageError.svelte';
	import ExpandableList from '$lib/components/ExpandableList.svelte';

	let selectedRadioOption = 'nothing';

	let checkboxOptions = [
		'Every week',
		'Every month',
		'Every 3 months',
		'Every 6 months',
		'Every year'
	];

	// CREATE A HELPER FUNCTION FOR THIS SO IT'S SIMPLER FOR END USER
	let radioOptions: Record<string, string> = {
		Yes: 'yes',
		No: 'no',
		Maybe: 'maybe'
	};

	// Example bullet points
	let bulletPoints = ['Point 1', 'Point 2', 'Point 3'];
</script>

<PageError />
<ExpandableList>
	<Body text="This is the first item in the list" />
	<Body text="This is the second item in the list" />
	<BulletList {bulletPoints} />
</ExpandableList>

<div>
	<Heading1 text="This is a heading 1" />
	<Heading2 text="This is a heading 2" />
	<Heading3 text="This is a heading 3" />
	<Body
		text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
		ut aliquip ex ea commodo consequat."
	/>
	<BodyBold
		text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
		ut aliquip ex ea commodo consequat."
	/>
</div>

<HubItemGroup>
	<HubItem
		hubName="This is the first item"
		hubDescription="Description for first hub"
		hubLink="yes"
	/>
	<HubItem
		hubName="This is the second item"
		hubDescription="Description for second hub"
		hubLink="no"
	/>
	<HubItem
		hubName="This is the third item"
		hubDescription="Description for third hub"
		hubLink="maybe"
	/>
</HubItemGroup>

<TextInputHint question="What is your name?" hint="For example, 21 years old" error optional />
<TextInput question="What is your name?" error optional />
<DateOfBirth error />
<Checkboxes {checkboxOptions} error />
<Radios bind:selectedOption={selectedRadioOption} {radioOptions} error />
<TextArea question="What is your name?" error />
<TextAreaHint question="What is your name?" hint="For example, 21 years old" optional />

<div class="mt-12 mb-12">
	<PrimaryButton destination={selectedRadioOption} />
	<p>{selectedRadioOption}</p>
	<SecondaryButton />
</div>

<div class="mt-12 mb-12">
	<Dropdown />
</div>

<div class="mt-12 mb-12">
	<p>Introductory text for this component</p>
	<BulletList bulletPoints={['Point 1', 'Point 2', 'Point 3']} />
</div>

<div class="mt-12 mb-12">
	<SaveBackButtons destination="yes" />
</div>
