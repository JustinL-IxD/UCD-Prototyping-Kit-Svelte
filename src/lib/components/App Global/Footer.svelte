<script>
	// You can add any necessary script logic here
	import logo from '$lib/assets/mygov.png';
</script>

<!--
<footer class="bg-gray-100 text-center py-4">
	<div class="max-w-screen-lg mx-auto px-4">
		<div class="text-sm">
			<a href="/privacy" class="text-blue-600 hover:text-blue-800">Privacy</a>
			<span class="text-gray-500"> | </span>
			<a href="/cookies" class="text-blue-600 hover:text-blue-800">Cookies</a>
			<span class="text-gray-500"> | </span>
			<a href="/accessibility" class="text-blue-600 hover:text-blue-800">Accessibility</a>
		</div>
		<div class="mt-2 text-gray-600 text-xs">
			<p>
				All content is available under the <a
					href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
					class="text-blue-600 hover:text-blue-800">Open Government Licence v3.0</a
				>, except for graphic assets and where otherwise stated
			</p>
			<p>© Crown Copyright</p>
		</div>
	</div>
</footer>
-->

<footer class="bg-[#ebebeb] py-4 text-gray-500 text-sm mt-12">
	<div class="container mx-auto">
		<div class="flex justify-center space-x-6 mb-2">
			<a href="/about" class="hover:text-gray-800">About</a>
			<a href="/myaccount" class="hover:text-gray-800">myaccount</a>
			<a href="/accessibility" class="hover:text-gray-800">Accessibility</a>
			<a href="/cookies" class="hover:text-gray-800">Cookies</a>
			<a href="/feedback" class="hover:text-gray-800">Feedback</a>
			<a href="/privacy" class="hover:text-gray-800">Privacy</a>
		</div>

		<div class="text-center">
			<div class="mb-2">
				All content is available under the
				<a href="/" class="text-blue-600 hover:underline">
					Open Government Licence v3.0, except for graphic assets and where otherwise stated
				</a>
			</div>
			<div>© Crown Copyright</div>
		</div>

		<div class="flex justify-end mt-4">
			<img src={logo} alt="gov.scot logo" class="h-8" />
		</div>
	</div>
</footer>
