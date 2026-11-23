// curious-judge-text — anomali tenang di adegan biasa (konsep A).
// Satu dapur pukul tiga pagi, satu benda di tempat yang salah, tanpa penjelasan.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Pukul tiga pagi. Dapur gelap, kecuali keran yang menetes pelan ke wastafel. Di atas meja, sepasang sepatu bot berlumpur berdiri tegak, talinya masih terikat rapi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
