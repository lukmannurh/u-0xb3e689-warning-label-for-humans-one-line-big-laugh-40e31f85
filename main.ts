// Warning Label for Humans: One Line, Big Laugh
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Gate: UTF-8 text, 1 to 160 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one single-line safety warning label for every human being.
// Drafted from 8 candidates and judged against the kit brief:
// label form first, recognition second, the turn in the last few words.
const ENTRY =
  "WARNING: This human is not waterproof, not dishwasher safe, and will describe last night's dream in full if you hold eye contact for more than three seconds.";

function validate(text: string): void {
  if (typeof text !== "string") throw new Error("entry must be a string");
  if (text.trim().length === 0) throw new Error("entry must not be only whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const chars = [...text].length;
  if (chars < 1 || chars > 160) {
    throw new Error(`entry must be 1 to 160 characters, got ${chars}`);
  }
  // Must round-trip as UTF-8 without replacement characters.
  const roundTrip = Buffer.from(text, "utf8").toString("utf8");
  if (roundTrip !== text) throw new Error("entry is not clean UTF-8 text");
  // The label is written in plain ASCII on purpose: no em-dash, no emoji,
  // no curly quotes, no AI-slop symbols. A stray non-ASCII character
  // means the text was edited by mistake, so fail loudly instead of
  // shipping it.
  if (/[^\x20-\x7E]/.test(text)) {
    throw new Error("entry must be plain ASCII (no em-dash, emoji, or curly quotes)");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${outPath} (${[...ENTRY].length} chars)`);
}

main();
