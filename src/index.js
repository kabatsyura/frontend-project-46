import { getPath, getData } from './parsers.js';

const genDiff = (filePath1, filePath2) => {
  const pathOfFile1 = getPath(filePath1);
  const pathOfFile2 = getPath(filePath2);

  return `${JSON.stringify(getData(filePath1), null, '\t')} \n ${JSON.stringify(getData(filePath2), null, '\t')}`;
};

export default genDiff;
