import _ from 'lodash';

const buildAST = (dataOfFile1, dataOfFile2) => {

  const properties = _.union(Object.keys(dataOfFile1), Object.keys(dataOfFile2));
  const sortedProperties = _.sortBy(properties);

  return sortedProperties.map((key) => {
    if (!Object.hasOwn(dataOfFile1, key)) {
      return {
        key,
        value: dataOfFile2[key],
        type: 'added',
      };
    }

    if (!Object.hasOwn(dataOfFile2, key)) {
      return {
        key,
        value: dataOfFile1[key],
        type: 'removed',
      };
    }

    if (_.isEqual(dataOfFile1[key], dataOfFile2[key])) {
      return {
        key,
        value: dataOfFile1[key],
        type: 'equal',
      };
    }

    if (_.isPlainObject(dataOfFile1[key]) && _.isPlainObject(dataOfFile2[key])) {
      return {
        key,
        children: buildAST(dataOfFile1[key], dataOfFile2[key]),
        type: 'nested',
      };
    }

    if (dataOfFile1[key] !== dataOfFile2[key]) {
      return {
        key,
        oldValue: dataOfFile1[key],
        newValue: dataOfFile2[key],
        type: 'changed'
      };
    }
  });
};

const showDifference = (dataOfFile1, dataOfFile2) => ({
  type: 'root',
  children: buildAST(dataOfFile1, dataOfFile2)
})

export default showDifference;
