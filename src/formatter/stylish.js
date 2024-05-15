import _ from 'lodash';

const indent = ' ';
const padding = 4;
const currentPadding = (depth) => indent.repeat(padding * depth - 2);
const bracePadding = (depth) => indent.repeat(padding * depth - padding);

const builderObject = (lines, depth) => [
  '{',
  ...lines,
  `${bracePadding(depth)}}`,
].join('\n');

const stringify = (data, depth) => {
  if ((!_.isObject(data)) || (data === null)) {
    return String(data);
  }
  const keys = _.keys(data);
  const lines = keys.map((key) => `${currentPadding(depth)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return builderObject(lines, depth);
};

const buildStylish = (tree) => {
  const iter = (node, depth) => { // eslint-disable-line
    switch (node.type) {
      case 'root': {
        const result = node.children.flatMap((child) => iter(child, depth));
        return builderObject(result, depth);
      }
      case 'nested': {
        const childrenToString = node.children.flatMap((child) => iter(child, depth + 1));
        return `${currentPadding(depth)}  ${node.key}: ${builderObject(childrenToString, depth + 1)}`;
      }
      case 'added': {
        return `${currentPadding(depth)}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
      }
      case 'removed': {
        return `${currentPadding(depth)}- ${node.key}: ${stringify(node.value, depth + 1)}`;
      }
      case 'changed': {
        return [`${currentPadding(depth)}- ${node.key}: ${stringify(node.oldValue, depth + 1)}`,
          `${currentPadding(depth)}+ ${node.key}: ${stringify(node.newValue, depth + 1)}`];
      }
      case 'equal': {
        return `${currentPadding(depth)}  ${node.key}: ${stringify(node.value, depth + 1)}`;
      }
      default:
        console.log('error!');
    }
  };
  return iter(tree, 1);
};

export default buildStylish;
