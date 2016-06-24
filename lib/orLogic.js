import runPredicates from './runPredicates';
export default function Or(attrs, tests) {
  const keys = Object.keys(tests);
  for(let i = 0; i < keys.length; i++) {
    if (runPredicates(keys[i], attrs)) return true;
  }
  return false;
}
