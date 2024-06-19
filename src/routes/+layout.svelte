<script>
	import '../app.css';
	import { Nav } from './_components';
</script>

<div class="bg-almost-white w-screen h-screen">
	<main>
		<slot />
	</main>

	<footer class="absolute bottom-0 left-0 right-0">
		<Nav />
	</footer>
</div>
