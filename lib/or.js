import runTest from './runTest';
export default function Or(tree, tests) {
  let keys = Object.keys(tests);
  for(let i = 0; i < testKeys.length; i++) {
    if (runTest(keys[i], tree)) return true;
  }
  return false;
}