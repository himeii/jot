import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { timestamps } from "../utils";
export const notesTable = sqliteTable("notes", {
  id: integer("id").primaryKey(),
  ...timestamps(),
});

export type SelectNote = InferSelectModel<typeof notesTable>;
export type InsertNote = InferInsertModel<typeof notesTable>;
