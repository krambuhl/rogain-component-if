const Defined = require('rogain-component-defined');
const splitTrees = require('rogain-utils').splitTrees;

module.exports = function If(tree, props) {
  if (!tree.attrs.value) {
    return Defined(tree, props);
  }

  var split = splitTrees(tree, { type: 'component', name: 'Else' });
  var res = split[1];
  
  if (tree.data == tree.attrs.value) {
    res = split[0];
  }

  return res && res.length > 0 ? res : undefined;
}