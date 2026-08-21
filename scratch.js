const fs = require('fs');
const content = fs.readFileSync('src/components/HomeTab.tsx', 'utf8');

const getSection = (startMarker, endMarker) => {
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return '';
  let endIdx = endMarker ? content.indexOf(endMarker, startIdx) : content.lastIndexOf('</div');
  if (endIdx === -1) endIdx = content.length;
  return content.substring(startIdx, endIdx);
};

console.log("Hero Form code check:");
console.log(content.indexOf('{/* Right Column: Form Card */}'));
