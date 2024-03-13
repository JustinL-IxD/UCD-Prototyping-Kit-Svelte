<script lang="ts">
	export let bold: boolean = false;
</script>

<li class="w-[75%] ml-4 {bold ? "font-bold" : ""}"><slot /></li>
