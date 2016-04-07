'use strict';

const splitTrees = require('rogain-utils').splitTrees;

export default function If(tree, props) {
  var split = splitTrees(tree.children, { type: 'component', name: 'Else' });
  var res = split[1];

  if (tree.data == tree.attrs.value) {
    res = split[0];
  }

  return res && res.length > 0 ? res : undefined;
}

function Not(result) { return !results; }