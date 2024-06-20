export default {
  schema: "./src/schema/index.ts",
  dialect: "sqlite",
  driver: "better-sqlite",
  out: "./drizzle",
  dbCredentials: {
    url: "./sqlite.db",
  },
};
