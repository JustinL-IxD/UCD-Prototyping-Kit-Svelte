<script lang="ts">
	export let text: string;
	export let bold: boolean = false;
</script>

<p class="w-[75%] {bold ? "font-bold" : ""}">{text}</p>
