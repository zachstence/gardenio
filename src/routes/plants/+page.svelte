<script lang="ts">
	import { parseISO } from 'date-fns';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form } = superForm(data.form);

	console.log(data.plants[0]);
</script>

<SuperDebug data={$form} />

<form method="POST" class="flex flex-col gap-2 bg-gray-400 p-4">
	<label>
		Name
		<input type="text" name="name" bind:value={$form.name} />
	</label>

	<label>
		Color
		<input type="color" name="color" bind:value={$form.color} />
	</label>

	<fieldset>
		<legend>Blooms</legend>

		<div class="flex flex-row gap-2">
			<label>
				Start
				<input type="date" name="bloomStartDate" bind:value={$form.bloomStartDate} />
			</label>
			<label>
				End
				<input type="date" name="bloomEndDate" bind:value={$form.bloomEndDate} />
			</label>
		</div>
	</fieldset>

	<button type="submit">Create Plant</button>
</form>

<div class="flex flex-col gap-3">
	{#each data.plants as plant}
		<div class="p-3 rounded-lg" style="background-color: {plant.color};">
			<h2>{plant.name}</h2>
			<dl>
				<dt>Blooms</dt>
				<dd>
					{parseISO(plant.bloomStartDate).toLocaleDateString()} - {parseISO(
						plant.bloomEndDate
					).toLocaleDateString()}
				</dd>
			</dl>
		</div>
	{/each}
</div>
