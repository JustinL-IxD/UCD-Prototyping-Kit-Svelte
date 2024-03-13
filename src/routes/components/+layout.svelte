<script>
	import BenefitName from '$lib/components/App Global/BenefitName.svelte';
	import HeaderSSD from '$lib/components/App Global/HeaderSSD.svelte';
	import '$lib/app.css';
</script>

<HeaderSSD />
<main class="container mx-auto">
	<BenefitName name="Pension Age Disability Payment" />
	<slot />
</main>
