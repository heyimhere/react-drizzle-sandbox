ALTER TABLE "scratchItems" RENAME TO "scratch_items";--> statement-breakpoint
ALTER TABLE "scratch_items" ADD COLUMN "done" boolean DEFAULT false NOT NULL;