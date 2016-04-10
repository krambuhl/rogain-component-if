'use strict';

import { splitTrees } from 'rogain-utils';
import { keys as predicates } from './predicates';
import andLogic from './andLogic';
import orLogic from './orLogic';

export default function If(tree, props) {
  let split = splitTrees(tree.children, { type: 'component', name: 'Else' });
  let attrs = tree.attrs || { };
  let logic = attrs.or !== 'false' || attrs.and === 'false' ? orLogic : andLogic;
  let passing = false;
  let res = split[1];
  let is = predicates.reduce((obj, name) {
    if (attrs[name] !== undefined) obj[name] = attrs[name];
    return obj;
  }, { });

  if (Object.keys(is).length === 0) {
    if (attrs.data === undefined) {
      return processRes(res);
    } else if (typeof attrs.data === 'object') {
      is.empty = attrs.empty = 'false';
    } else {
      is.defined = attrs.defined = 'defined';
    }
  }

  // if or is defined user OR 
  // else use AND logic
  if (logic(attrs, is) && !(attrs.not !== undefined && attrs.not !== 'false')) {
    res = split[0];
  }

  return processRes(res);
}

function processRes(res) {
  return res && res.length > 0 ? res : undefined;
}