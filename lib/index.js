'use strict';

import { splitTrees } from 'rogain-utils';
import { keys } from './predicates';
import And from './and';
import Or from './or';

export default function If(tree, props) {
  let split = splitTrees(tree.children, { type: 'component', name: 'Else' });
  let res = split[1];
  let attrs = tree.attrs || { };
  let is = { };
  let passing = false;
  let orLogic = attrs.or !== 'false';

  if (attrs.defined !== undefined) is.defined = attrs.defined;
  if (attrs.empty !== undefined) is.empty = attrs.empty;
  if (attrs.equal !== undefined) is.equal = attrs.equal;
  if (attrs.gt !== undefined) is.gt = attrs.gt;
  if (attrs.gte !== undefined) is.gte = attrs.gte;
  if (attrs.lt !== undefined) is.lt = attrs.lt;
  if (attrs.lte !== undefined) is.lte = attrs.lte;

  let keys = Object.keys(is);
  if (Object.keys(is).length === 0) {
    is = {
      defined: 'defined', 
      empty: 'empty',
      equal: 'equal'
    };
    
    orLogic = true;
    tree.attrs = Object.assign(attrs, is);
  }

  // if or is defined user OR 
  // else use AND logic
  if (orLogic ? Or(tree, is) : And(tree, is)) {
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