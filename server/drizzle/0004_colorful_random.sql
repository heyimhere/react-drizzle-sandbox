CREATE TABLE "scratch_log" (
	"id" serial PRIMARY KEY NOT NULL,
	"scratch_item_id" integer NOT NULL,
	"event" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "scratch_log" ADD CONSTRAINT "scratch_log_scratch_item_id_scratch_items_id_fk" FOREIGN KEY ("scratch_item_id") REFERENCES "public"."scratch_items"("id") ON DELETE cascade ON UPDATE no action;