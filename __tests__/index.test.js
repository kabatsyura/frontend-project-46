import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';
import checkTest from '../__fixtures__/checkTest.js';
import checkDeepTest from '../__fixtures__/checkDeepTest.js';
import checkDeepJson from '../__fixtures__/checkDeepJson.js';
import checkDeepPlain from '../__fixtures__/checkDeepPlain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

describe('gendiff(). Check a difference between flat objects.', () => { // eslint-disable-line
  test.each([ // eslint-disable-line
    'yaml',
    'yml',
    'json',
  ])('Test%# %s', (extention) => {
    const file1 = getFixturePath(`file1.${extention}`);
    const file2 = getFixturePath(`file2.${extention}`);
    expect(genDiff(file1, file2)).toEqual(checkTest); // eslint-disable-line
  });
});

describe('gendiff(). Check a difference between deep objects.', () => { // eslint-disable-line
  test.each([ // eslint-disable-line
    'yaml',
    'yml',
    'json',
  ])('Test%# %s', (extention) => {
    const file1 = getFixturePath(`fileDeepStructure1.${extention}`);
    const file2 = getFixturePath(`fileDeepStructure2.${extention}`);
    expect(genDiff(file1, file2)).toEqual(checkDeepTest); // eslint-disable-line
  });
});

describe('gendiff() with JSON format', () => { // eslint-disable-line
  test('test #1', () => { // eslint-disable-line
    const file1 = getFixturePath('fileDeepStructure1.json');
    const file2 = getFixturePath('fileDeepStructure2.json');
    expect(genDiff(file1, file2, 'json')).toEqual(checkDeepJson); // eslint-disable-line
  });
});

describe('gendiff() with PLAIN format', () => { // eslint-disable-line
  test('test #1', () => { // eslint-disable-line
    const file1 = getFixturePath('fileDeepStructure1.json');
    const file2 = getFixturePath('fileDeepStructure2.json');
    expect(genDiff(file1, file2, 'plain')).toEqual(checkDeepPlain); // eslint-disable-line
  });
});
