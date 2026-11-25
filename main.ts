import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly report: 0 tasks failed, 1 human ghosted me for 3 days, and I've now read your 'quick question' 14 times. It was not quick.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
