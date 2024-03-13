<script lang="ts">
	export let bulletPoints: string[];
</script>

<ul class="list-disc my-2">
	{#each bulletPoints as bulletPoint, index}
		<li class="ml-4 mb-1">{bulletPoint}</li>
	{/each}
</ul>
