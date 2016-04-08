'use strict';

import { splitTrees } from 'rogain-utils';
import { keys } from './predicates';
import And from './and';
import Or from './or';

export default function If(tree, props) {
  var split = splitTrees(tree.children, { type: 'component', name: 'Else' });
  var res = split[1];
  var attrs = tree.attrs || { };
  var is = { };
  var passing = false;

  if (attrs.defined !== 'false') is.defined = attrs.defined;
  if (attrs.empty !== 'false') is.empty = attrs.empty;
  if (attrs.equal !== 'false') is.equal = attrs.equal;
  if (attrs.gt !== 'false') is.gt = attrs.gt;
  if (attrs.gte !== 'false') is.gte = attrs.gte;
  if (attrs.lt !== 'false') is.lt = attrs.lt;
  if (attrs.lte !== 'false') is.lte = attrs.lte;

  // if or is defined user OR 
  // else use AND logic
  if (attrs.or !== 'false' ? Or(tree, is) : And(tree, is)) {
    passing = true;
  }

  // invert reser if not attr. is set
  if (attrs.not !== 'false') {
    passing = !passing;
  }

  // is the result of running predicates
  // is `true` use the tree segment
  // before the <Else /> component
  if (passing) {
    res = split[0];
  }

  return res && res.length > 0 ? res : undefined;
}