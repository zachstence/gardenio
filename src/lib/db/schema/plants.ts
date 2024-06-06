import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

export const plants = sqliteTable('plants', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	bloomStartDate: text('bloomStartDate').notNull(),
	bloomEndDate: text('bloomEndDate').notNull(),
	color: text('color').notNull()
});

export type Plant = typeof plants.$inferSelect;

export const insertPlantSchema = createInsertSchema(plants, {
	bloomStartDate: (schema) => schema.bloomStartDate.date(),
	bloomEndDate: (schema) => schema.bloomEndDate.date(),
	color: (schema) => schema.color.startsWith('#').length(7)
});
