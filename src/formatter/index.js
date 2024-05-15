import buildStylish from './stylish.js';
import buildPlain from './plain.js';

const formatter = (tree, format = 'stylish') => {
  switch (format) {
    case 'json':
      return JSON.stringify(tree);
    case 'plain':
      return buildPlain(tree);
    default:
      return buildStylish(tree);
  }
};

export default formatter;
