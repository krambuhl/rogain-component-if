import runPredicates from './runPredicates';
export default function And(tree, tests) {
  let keys = Object.keys(tests);
  for(let i = 0; i < keys.length; i++) {
    if (runPredicates(keys[i], tree)) return false;
  }
  return true;
}
