import buildStylish from './stylish.js';
import buildPlain from './plain.js';

const formatter = (tree, format = "stylish") => {
  switch (format) {
    case "stylish":
      return buildStylish(tree);
    case "json":
      return JSON.stringify(tree);
    case "plain":
      return buildPlain(tree);
  }
};

export default formatter;
