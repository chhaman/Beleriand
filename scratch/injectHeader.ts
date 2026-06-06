import * as fs from "fs";
import * as path from "path";

const dirPath = path.resolve("./public/characters");

const htmlFiles = fs.readdirSync(dirPath).filter(file => file.endsWith(".html"));

htmlFiles.forEach(file => {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Regex to match the top navigation header (either nav or header tag at the start of body)
  // We match <header ...>...</header> or <nav ...>...</nav>
  const navRegex = /<(nav|header)[^>]*class="[^"]*(fixed|sticky)[^"]*"[^>]*>([\s\S]*?)<\/\1>/i;
  
  if (navRegex.test(content)) {
    content = content.replace(navRegex, '<div id="app-header"></div>');
    console.log(`Replaced top nav with placeholder in: ${file}`);
  } else {
    console.log(`Could not find standard nav/header in: ${file}`);
  }

  // Inject script link before </body> if not already present
  if (!content.includes("header.js")) {
    content = content.replace("</body>", '  <script src="/characters/header.js"></script>\n</body>');
    console.log(`Injected header.js script link into: ${file}`);
  }

  fs.writeFileSync(filePath, content, "utf-8");
});

console.log("All character HTML files successfully processed.");
