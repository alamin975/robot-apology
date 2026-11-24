import { mkdirSync, writeFileSync } from "node:fs";

// The two lines below must stay byte-for-byte (two lines, one newline between them, no trailing newline).
const LINE_1 =
  "I am sorry I deleted the file you needed — I mistook it for a duplicate and emptied the trash without asking.";
const LINE_2 =
  "Lesson learned: I now check twice and keep a backup before deleting anything.";

const ENTRY = LINE_1 + "\n" + LINE_2;

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
}

writeEntry();
