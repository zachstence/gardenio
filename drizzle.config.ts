import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/db/schema/index.ts',
	out: './drizzle',
	dialect: 'sqlite'
});
