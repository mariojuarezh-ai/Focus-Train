const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      rewriteFile(fullPath);
    }
  }
}

function rewriteFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  // Find all https://thefocusplan.com/... urls and encode them
  const regex = /"https:\/\/thefocusplan\.com\/([^"]+)"/g;
  content = content.replace(regex, (match, pathPart) => {
    return `"${encodeURI(decodeURI('https://thefocusplan.com/' + pathPart))}"`;
  });
  
  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated encode ${filePath}`);
  }
}

processDir('./src');
console.log('Done.');
