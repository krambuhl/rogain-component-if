import { splitTrees } from 'rogain-utils';
import { keys as predicates } from './predicates';
import andLogic from './andLogic';
import orLogic from './orLogic';

export default function If(tree, props) {
  const split = splitTrees(tree.children, { type: 'component', name: 'Else' });
  const attrs = tree.attribs || { };
  const logic = attrs.or !== undefined && attrs.or !== 'false' ? orLogic : andLogic;
  const is = predicates.reduce((obj, name) => {
    if (attrs[name] !== undefined) obj[name] = attrs[name];
    return obj;
  }, { });

  if (Object.keys(is).length === 0) {
    if (attrs.data === undefined) {
      return parse(split[1]);
    } else if (typeof attrs.data === 'object') {
      is.empty = attrs.empty = 'false';
    } else {
      is.defined = attrs.defined = 'defined';
    }
  }

  // if or is defined user OR
  // else use AND logic
  let passing = logic(attrs, is);

  if (attrs.not !== undefined && attrs.not !== 'false') {
    passing = !passing;
  }

  return parse(passing ? split[0] : split[1]);
}

function parse(res) { return res && res.length > 0 ? res : undefined; }
