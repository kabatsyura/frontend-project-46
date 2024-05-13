import { readFileSync } from 'node:fs';
import path from 'node:path';

const parse = {
  json: JSON.parse
};

const parser = (data, format) => parse[format](data);

// The process.cwd() method returns the current working directory of the Node.js process.
// eslint-diable-next-line
export const getPath = (filePath) => path.resolve(process.cwd(), filePath); // eslint-disable-line

// Нахожу расширение файла
export const getExtension = (filePath) => path.basename(filePath).split('.').slice(1);

// Парсинг файла
export const getData = (filePath) => parser(readFileSync(filePath, 'utf-8'), getExtension(filePath));
