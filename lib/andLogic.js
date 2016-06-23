import runPredicates from './runPredicates';
export default function And(attrs, tests) {
  const keys = Object.keys(tests);
  for(let i = 0; i < keys.length; i++) {
    if (!runPredicates(keys[i], attrs)) return false;
  }
  return true;
}
