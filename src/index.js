import { getPath, getData } from './parsers.js';
import showDifference from './showDifference.js';
import formatter from './formatter/index.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const pathOfFile1 = getPath(filePath1);
  const pathOfFile2 = getPath(filePath2);

  const dataOfFile1 = getData(pathOfFile1);
  const dataOfFile2 = getData(pathOfFile2);

  return formatter(showDifference(dataOfFile1, dataOfFile2), format);
  // return JSON.stringify(showDifference(dataOfFile1, dataOfFile2), null, '  ');
  // return showDifference(dataOfFile1, dataOfFile2);
};

export default genDiff;
