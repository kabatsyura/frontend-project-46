import buildStylish from './stylish.js';

const formatter = (ast, format = "stylish") => {
  switch (format) {
    case "stylish":
      return buildStylish(ast);
    case "json":
      return JSON.stringify(ast);
  }
};

export default formatter;
