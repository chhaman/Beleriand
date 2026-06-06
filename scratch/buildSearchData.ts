import * as fs from "fs";
import * as path from "path";
import { characters, battles, timelineEvents } from "../src/data";
import { secondaryLoreDatabaseEs, secondaryLoreDatabaseEn } from "../src/data/secondaryLore";

const outputPath = path.resolve("./public/characters/searchData.json");

const data = {
  characters,
  battles,
  timelineEvents,
  secondaryLoreDatabaseEs,
  secondaryLoreDatabaseEn
};

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf-8");
console.log("Search database successfully generated at:", outputPath);
