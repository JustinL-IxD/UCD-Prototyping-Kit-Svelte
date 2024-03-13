<script lang="ts">
	import Body from '../Typography/Body.svelte';

	export let hubName: string = 'Enter hub item name';
	export let hubDescription: string = 'Enter hub item description';
	export let hubLink: string;

	let hubState = 'Cannot start yet';
</script>

<div class="flex justify-between items-center bg-gray-100 py-3 border-b border-gray-400">
	<div class="w-3/4">
		<a href={`/${hubLink}`}><h3 class="hover:underline">{hubName}</h3></a>
		<Body text={hubDescription} />
	</div>
	<div>
		<div class="bg-SG-blue-primary py-[2px] px-2">
			<p class="text-white" style="font-size: 0.85rem;">Cannot start yet</p>
		</div>
	</div>
</div>
