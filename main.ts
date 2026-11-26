// The joke lands because "group project" is the one classroom experience
// where almost everyone shows up and almost nobody does the work —
// Earth, with eight billion inhabitants, is that project at planetary scale,
// and the bees are the one species actually keeping the whole thing running.
// Rename the Planet — entry for u-motasimfuad-rename-the-planet-094b0369
// Writes one funny line: a new name for Earth, plus the why, in a single line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Rename Earth \"The Group Project\": eight billion people showed up and only the bees did the work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
