<script lang="ts">
	export let bold: boolean = false;
</script>

<p class="{bold ? "font-bold" : ""}"><slot /></p>
