<script>
	import { pwaInfo } from 'virtual:pwa-info';
	import { pwaAssetsHead } from 'virtual:pwa-assets/head';

	import '../app.css';
	import { Nav } from './_components';

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	console.log({ pwaInfo, pwaAssetsHead });
</script>

<svelte:head>
	{@html webManifestLink}
	{#if pwaAssetsHead.themeColor}
		<meta name="theme-color" content={pwaAssetsHead.themeColor.content} />
	{/if}
	{#each pwaAssetsHead.links as link}
		<link {...link} />
	{/each}
</svelte:head>

<div class="bg-almost-white w-screen h-screen">
	<main>
		<slot />
	</main>

	<footer class="absolute bottom-0 left-0 right-0">
		<Nav />
	</footer>
</div>
