const tests = {
  equal: require('./predicates/equal'),
  defined: require('./predicates/defined'),
  gt: require('./predicates/gt'),
  gte: require('./predicates/gte'),
  lt: require('./predicates/lt'),
  lte: require('./predicates/lte')
};

export default function runTest(name, tree) {
  return tests[name](tree.data, tree.attrs[name]);
}
