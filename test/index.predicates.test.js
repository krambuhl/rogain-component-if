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

// defined
test('<If data=undefined defined="defined"> :: defined => undefined', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: undefined, defined: 'defined' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=1234 defined="defined"> :: defined => defined', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 124, defined: 'defined' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data=1234 defined="false"> :: defined=false => defined', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 124, defined: 'false' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

// empty
test('<If data=[] empty="empty"> :: empty => []', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: [], empty: 'empty' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data=[1,2] empty="empty"> :: empty => [1]', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: [1,2], empty: 'empty' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=[1,2] empty="false"> :: empty=false => [1]', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: [1,2], empty: 'false' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});


// equal
test('<If data=undefined equal="hello"> :: equal=String => undefined', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: undefined, equal: 'hello' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data="goodbye" equal="hello"> :: equal=String => wrong', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 'goodbye', equal: 'hello' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data="hello" equal="hello"> :: equal=String => correct', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 'hello', equal: 'hello' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});


// gt
test('<If data=undefined gt="0"> :: gt=Number => undefined', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: undefined, gt: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=0 gt="0"> :: gt=Number => 0', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 0, gt: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=1 gt="0"> :: gt=Number => 1', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 1, gt: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

// gte
test('<If data=undefined gte="0"> :: gte=Number => undefined', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: undefined, gte: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=0 gte="0"> :: gte=Number => 0', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 0, gte: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data=1 gte="0"> :: gte=Number => 1', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 1, gte: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});


// lt
test('<If data=undefined lt="0"> :: lt=Number => undefined', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: undefined, lt: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=0 lt="0"> :: lt=Number => 0', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 0, lt: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=1 lt="5"> :: lt=Number => 1', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 1, lt: '5' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

// lte
test('<If data=undefined lte="0"> :: lte=Number => undefined', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: undefined, lte: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=0 lte="0"> :: lte=Number => 0', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 0, lte: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data=1 lte="0"> :: lte=Number => 1', function(t) {
  let tree = Object.assign({ }, Tree);
  let res;

  tree.attrs = { data: 1, lte: '0' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});