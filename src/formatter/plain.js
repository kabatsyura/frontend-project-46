import _ from 'lodash';

function isString(value) {
  return (typeof value === 'string' || value instanceof String);
}

const typeConversation = (value) => {
  if (_.isObject(value)) {
    return Object.is(value, null) ? 'null' : '[complex value]'; 
  } else if (isString(value)) {
    return `'${value}'`;
  } else {
    return String(value);
  }
}

const buildPlain = (tree) => {
  const iter = (astTree, key = '') => {

    const ast = astTree.flatMap((node) => {
      const updatedKey = [key, node.key].flat().join('.');
      switch (node.type) {
        case 'nested': 
          return iter(node.children, updatedKey);
        case 'added':
          return `Property '${updatedKey}' was added with value: ${typeConversation(node.value)}`;
        case 'removed':
          return `Property '${updatedKey}' was removed`;
        case 'changed':
          return `Property '${updatedKey}' was updated. From ${typeConversation(node.oldValue)} to ${typeConversation(node.newValue)}`;
        case 'root':
          return iter(node.children, updatedKey);
        case 'equal':
          break;
        default:
          console.log('error!');
      }
    });
    return ast.filter((el) => (typeof el !== "underfined" && el)).join('\n');  // eslint-disable-line
  }

  return iter(tree.children, []);
};

export default buildPlain;
