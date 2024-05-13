import path from 'node:path';
import genDiff from '../src/index.js';
// import { getPath } from '../src/parser.js';
import checkTest from '../__fixtures__/checkTest.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

describe('gendiff()', () => { // eslint-disable-line
  test('Check a difference between flat objects', () => { // eslint-disable-line
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    expect(genDiff(file1, file2)).toEqual(checkTest); // eslint-disable-line
  });
});
