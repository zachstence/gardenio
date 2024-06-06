import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

export const plants = sqliteTable('plants', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull()
});

export type Plant = typeof plants.$inferSelect; // return type when queried

export const insertPlantSchema = createInsertSchema(plants);
