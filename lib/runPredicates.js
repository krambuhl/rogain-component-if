import predicates from './predicates';

export default function runPredicates(name, tree) {
  var attrs = tree.attrs || { };
  return predicates[name](attrs.data, attrs[name]);
}
