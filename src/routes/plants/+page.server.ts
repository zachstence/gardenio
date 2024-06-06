import type { Actions, PageServerLoad } from './$types';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { db, insertPlantSchema, plants } from '$lib/db';

export const load: PageServerLoad = async () => ({
	plants: await db.select().from(plants),
	form: await superValidate(zod(insertPlantSchema))
});

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(insertPlantSchema));
		console.log(form.data);

		if (!form.valid) {
			return fail(400, { form });
		}
		await db.insert(plants).values(form.data);

		return message(form, 'Plant created successfully!');
	}
} satisfies Actions;
