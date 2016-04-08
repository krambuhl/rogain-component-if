const predicates = {
  equal: require('./predicates/equal'),
  defined: require('./predicates/defined'),
  gt: require('./predicates/gt'),
  gte: require('./predicates/gte'),
  lt: require('./predicates/lt'),
  lte: require('./predicates/lte')
};

export default predicates;
export const keys = Object.keys(predicates);