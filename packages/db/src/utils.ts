import { sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";

export const now = () => sql`CURRENT_TIMESTAMP`;

export const timestamps = () => {
  return {
    createdAt: text("created_at").default(now()),
    updatedAt: text("updated_at").default(now()),
  };
};
