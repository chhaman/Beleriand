const fs = require('fs');
const path = require('path');

const dir = path.resolve('./public/characters');
const htmlFiles = fs.readdirSync(dir).filter(function(f) { return f.endsWith('.html'); });

// Inline script injected before any CSS: reads localStorage and sets dark/light class on <html>
// This prevents the flash of white on dark-mode pages
const earlyDarkScript = '<script>try{if(localStorage.getItem("darkMode")==="true"){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}else{document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}}catch(e){}<\/script>';

let count = 0;
htmlFiles.forEach(function(file) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Only inject if not already present
  if (content.indexOf('localStorage.getItem("darkMode")') === -1) {
    // Inject right after <head> so it runs before Tailwind CDN or any <style> block
    content = content.replace('<head>', '<head>' + earlyDarkScript);
    fs.writeFileSync(filePath, content, 'utf-8');
    count++;
    console.log('Patched: ' + file);
  } else {
    console.log('Already patched: ' + file);
  }
});
console.log('\nDone. Patched ' + count + ' files.');
