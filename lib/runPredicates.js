import predicates from './predicates';

export default function runPredicates(name, tree) {
  return predicates[name](tree.data, tree.attrs[name]);
}
