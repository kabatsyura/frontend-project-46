import { getPath, getData } from './parsers.js';
import showDifference from './showDifference.js';
import _ from 'lodash';

const genDiff = (filePath1, filePath2) => {
  const pathOfFile1 = getPath(filePath1);
  const pathOfFile2 = getPath(filePath2);

  const dataOfFile1 = getData(pathOfFile1);
  const dataOfFile2 = getData(pathOfFile2);

  const properties = _.union(Object.keys(dataOfFile1), Object.keys(dataOfFile2)).sort();

  return showDifference(dataOfFile1, dataOfFile2, properties);
};

export default genDiff;
