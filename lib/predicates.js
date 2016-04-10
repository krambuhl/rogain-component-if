const predicates = {
  defined: require('./predicates/defined'),
  empty: require('./predicates/empty'),
  equal: require('./predicates/equal'),
  gt: require('./predicates/gt'),
  gte: require('./predicates/gte'),
  lt: require('./predicates/lt'),
  lte: require('./predicates/lte')
};

export default predicates;
export const keys = Object.keys(predicates);