const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const lines = html.split('\n');
let htmlStartLine = 0;
let htmlEndLine = 0;

lines.forEach((l, i) => {
  if (l.includes('id="syllabus"')) htmlStartLine = i + 1;
  if (htmlStartLine && !htmlEndLine && l.includes('</section>')) {
    htmlEndLine = i + 1;
  }
});

console.log(`Syllabus HTML is from line ${htmlStartLine} to ${htmlEndLine}`);
console.log(lines.slice(htmlStartLine - 1, htmlEndLine).join('\n'));
