'use strict';

import { splitTrees } from 'rogain-utils';
import { keys } from './predicates';
import And from './and';
import Or from './or';

export default function If(tree, props) {
  let split = splitTrees(tree.children, { type: 'component', name: 'Else' });
  let res = split[1];
  let attrs = tree.attrs || { };
  let data = attrs.data;
  let passing = false;
  let is = { };

  if (attrs.defined !== undefined) is.defined = attrs.defined;
  if (attrs.empty !== undefined) is.empty = attrs.empty;
  if (attrs.equal !== undefined) is.equal = attrs.equal;
  if (attrs.gt !== undefined) is.gt = attrs.gt;
  if (attrs.gte !== undefined) is.gte = attrs.gte;
  if (attrs.lt !== undefined) is.lt = attrs.lt;
  if (attrs.lte !== undefined) is.lte = attrs.lte;

  if (Object.keys(is).length === 0) {
    if (data === undefined) {
      return processRes(res);
    } else if (Array.isArray(data) || typeof data === 'object') {
      attrs.not = 'not';
      attrs.empty = 'empty';
      is = { empty: 'empty' };
    } else if (data.toLowerCase && ['false', 'true'].indexOf(data.toLowerCase()) !== -1) {
      attrs.equal = 'true';
      is = { equal: 'true' };
    } else {
      attrs.defined = 'defined';
      is = { defined: 'defined' };
    }
  }

  // if or is defined user OR 
  // else use AND logic
  if (attrs.or !== 'false' ? Or(attrs, is) : And(attrs, is)) {
    passing = true;
  }

  // invert reser if not attr. is set
  if (attrs.not !== undefined && attrs.not !== 'false') {
    passing = !passing;
  }

  // is the result of running predicates
  // is `true` use the tree segment
  // before the <Else /> component
  if (passing) {
    res = split[0];
  }

  return processRes(res);
}

function processRes(res) {
  return res && res.length > 0 ? res : undefined;
}