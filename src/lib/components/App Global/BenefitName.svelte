<script lang="ts">
	export let name: String;
</script>

<div class="bg-[#ebebeb] pt-3 pl-2 border-t-8 border-[#0065bd] h-40 mb-4">
	<p>Part of</p>
	<h1 class="text-h1 text-[#333333] mb-6 pb-3">{name ? name : 'Enter benefit name'}</h1>
</div>
