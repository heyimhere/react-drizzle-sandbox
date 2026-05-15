CREATE TABLE "scratchItems" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
