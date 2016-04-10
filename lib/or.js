import runPredicates from './runPredicates';
export default function Or(attrs, tests) {
  let keys = Object.keys(tests);
  for(let i = 0; i < keys.length; i++) {
    if (runPredicates(keys[i], attrs)) return true;
  }
  return false;
}