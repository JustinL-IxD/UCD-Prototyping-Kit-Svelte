<script>
	import BenefitName from '$lib/components/App Global/BenefitName.svelte';
	import Footer from '$lib/components/App Global/Footer.svelte';
	import HeaderMyGov from '$lib/components/App Global/HeaderMyGov.svelte';
	import HeaderSSD from '$lib/components/App Global/HeaderSSD.svelte';
	import '$lib/app.css';
</script>

<HeaderMyGov />
<main class="container mx-auto">
	<slot />
</main>

<Footer />

<!--<BenefitName name="Pension Age Disability Payment" />-->
