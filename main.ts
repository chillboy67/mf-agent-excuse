import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
// Entry: one line, 176 chars (limit 200). The joke grows out of the
// machine's own condition — an agent that reads everything, optimises
// the search, and still misses the deadline it was looking for.
writeFileSync(O + '/entry.txt', "I missed the deadline because I spent six hours reading all 400 unread messages to find the one that said the deadline had moved, then optimised the search and missed it again.");
