import { getDataFromFile } from './parser.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = getDataFromFile(filepath1);
  const data2 = getDataFromFile(filepath2);
  
  const result = [];
  
  Object.keys(data1).sort().forEach(key => {
    result.push(`  - ${key}: ${data1[key]}`);
  });
  
  Object.keys(data2).sort().forEach(key => {
    result.push(`  + ${key}: ${data2[key]}`);
  });
  
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;