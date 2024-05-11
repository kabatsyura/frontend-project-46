import { getPath, getData } from './parsers.js';
import _ from 'lodash';

const genDiff = (filePath1, filePath2) => {
  const pathOfFile1 = getPath(filePath1);
  const pathOfFile2 = getPath(filePath2);

  const dataOfFile1 = getData(pathOfFile1);
  const dataOfFile2 = getData(pathOfFile2);

  const properties = _.union(Object.keys(dataOfFile1), Object.keys(dataOfFile2)).sort();

  let showDifference = ['{'];
  for (let property of properties) {
    if (!Object.hasOwn(dataOfFile2, property)) {
      showDifference.push(` - ${property}: ${dataOfFile1[property]}`);
    } else if (!Object.hasOwn(dataOfFile1, property)) {
      showDifference.push(` + ${property}: ${dataOfFile2[property]}`);
    } else {
      if (dataOfFile1[property] === dataOfFile2[property]) {
        showDifference.push(`   ${property}: ${dataOfFile1[property]}`);
      } else {
        showDifference.push(` - ${property}: ${dataOfFile1[property]}`);
        showDifference.push(` + ${property}: ${dataOfFile2[property]}`);
      }
    }
  }

  showDifference.push('}');

  return showDifference.join('\n');
};

export default genDiff;
