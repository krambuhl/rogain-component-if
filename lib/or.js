import runPredicates from './runPredicates';
export default function Or(tree, tests) {
  let keys = Object.keys(tests);
  for(let i = 0; i < keys.length; i++) {
    if (runPredicates(keys[i], tree)) return true;
  }
  return false;
}