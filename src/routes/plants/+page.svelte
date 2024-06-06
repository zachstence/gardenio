<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form } = superForm(data.form);
</script>

<form method="POST">
	<label for="name">Name</label>
	<input type="text" name="name" bind:value={$form.name} />

	<button type="submit">Create Plant</button>
</form>

<div class="flex flex-col gap-3">
	{#each data.plants as plant}
		<div class="bg-gray-500 p-3 rounded-lg">
			<h2>{plant.name}</h2>
		</div>
	{/each}
</div>
