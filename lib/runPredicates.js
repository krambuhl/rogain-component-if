import predicates from './predicates';

export default function runPredicates(name, attrs) {
  return predicates[name](attrs.data, attrs[name]);
}
