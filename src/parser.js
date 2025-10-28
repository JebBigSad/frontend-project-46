import fs from 'fs';
import path from 'path';

const getAbsolutePath = (filepath) => {
  return path.resolve(process.cwd(), filepath);
};

const getFormat = (filename) => {
  const ext = path.extname(filename).toLowerCase();
  return ext.slice(1); 
};

const readFile = (filepath) => {
  const absolutePath = getAbsolutePath(filepath);
  return fs.readFileSync(absolutePath, 'utf8');
};

const parseData = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};

export const getDataFromFile = (filepath) => {
  const data = readFile(filepath);
  const format = getFormat(filepath);
  return parseData(data, format);
};