var test = require('tape');
var If = require('../dist');

const DefTree = {
  type: 'component',
  name: 'If',
  children: [{
    type: 'tag',
    name: 'div'
  }, {
    type: 'component',
    name: 'Else'
  }, {
    type: 'tag',
    name: 'p'
  }]
};

test('<If data={undefined}><div /><Else /><p /></If> :: default undefined', function(t) {
  var tree = Object.assign({ }, DefTree);
  var res;

  tree.attrs = { data:  undefined };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data={1234}><div /><Else /><p /></If> :: default number', function(t) {
  var tree = Object.assign({ }, DefTree);
  var res;

  tree.attrs = { data:  1234 };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data="thing"><div /><Else /><p /></If> :: default string', function(t) {
  var tree = Object.assign({ }, DefTree);
  var res;

  tree.attrs = { data: 'thing' };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data={ buddy: true }><div /><Else /><p /></If> :: default object', function(t) {
  var tree = Object.assign({ }, DefTree);
  var res;

  tree.attrs = { data: { buddy: true } };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data={}><div /><Else /><p /></If> :: default empty object', function(t) {
  var tree = Object.assign({ }, DefTree);
  var res;

  tree.attrs = { data: { } };
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=[1,2]><div /><Else /><p /></If> :: default array', function(t) {
  var tree = Object.assign({ }, DefTree);
  var res;

  tree.attrs = { data: [1, 2] }
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});
test('<If data=[]><div /><Else /><p /></If> :: default empty array', function(t) {
  var tree = Object.assign({ }, DefTree);
  var res;

  tree.attrs = { data: [] }
  res = If(tree);

  t.plan(3);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});