import { getDataFromFile } from './parser.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = getDataFromFile(filepath1);
  const data2 = getDataFromFile(filepath2);
  
  const allKeys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])];
  allKeys.sort();
  
  const result = [];
  
  allKeys.forEach(key => {
    if (!(key in data2)) {
      // Ключ только в первом файле
      result.push(`  - ${key}: ${data1[key]}`);
    } else if (!(key in data1)) {
      // Ключ только во втором файле
      result.push(`  + ${key}: ${data2[key]}`);
    } else if (data1[key] === data2[key]) {
      // Ключ в обоих файлах с одинаковыми значениями - БЕЗ префиксов
      result.push(`    ${key}: ${data1[key]}`);
    } else {
      // Ключ в обоих файлах с разными значениями
      result.push(`  - ${key}: ${data1[key]}`);
      result.push(`  + ${key}: ${data2[key]}`);
    }
  });
  
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;