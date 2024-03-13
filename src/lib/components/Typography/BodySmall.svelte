<script lang="ts">
	export let text: string;
	export let bold: boolean = false;
</script>

<p class="w-[75%] text-[0.875rem] {bold ? "font-bold" : ""}">{text}</p>
