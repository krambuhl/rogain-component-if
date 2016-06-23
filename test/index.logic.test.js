const test = require('tape');
const If = require('../dist');

const Tree = {
  type: 'component',
  name: 'If',
  children: [
    { type: 'tag', name: 'div' }, 
    { type: 'component', name: 'Else' }, 
    { type: 'tag', name: 'p' }
  ]
};

// or
test('<If data=10 or gt=1000 lte=100>', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 10, or: 'or', gt: 1000, lte: 100 };
  res = If(tree);

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data=10 or="false" gt=1000 lte=100>', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 10, or: 'false', gt: 1000, lte: 100 };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=10 not or gt=1000 lte=100>', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 10, not: 'not', or: 'or', gt: 1000, lte: 100 };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});


// and
test('<If data=10 and gt=100 lte=1000>', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 10, and: 'and', gt: 100, lte: 1000 };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=200 and gt=100 lte=1000>', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 200, and: 'and', gt: 100, lte: 1000 };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data=10 and="false" gt=100 lte=1000>', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 10, and: 'false', gt: 100, lte: 1000 };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=10 and gt=100 lte=1000>', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 10, and: 'and', gt: 100, lte: 1000 };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=500 not and gt=100 lte=1000>', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 500, not: 'not', and: 'and', gt: 100, lte: 1000 };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});