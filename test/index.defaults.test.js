const test = require('tape');
const If = require('../dist');

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
  const tree = Object.assign({ }, DefTree, { attribs: { data: undefined } });
  const res = If(tree);

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data={1234}><div /><Else /><p /></If> :: default number', function(t) {
  const tree = Object.assign({ }, DefTree, { attribs: { data:  1234 } });
  const res = If(tree);

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data="thing"><div /><Else /><p /></If> :: default string', function(t) {
  const tree = Object.assign({ }, DefTree, { attribs: { data: 'thing' } });
  const res = If(tree);

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data={ buddy: true }><div /><Else /><p /></If> :: default object', function(t) {
  const tree = Object.assign({ }, DefTree, { attribs: { data: { buddy: true } } });
  const res = If(tree);

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data={}><div /><Else /><p /></If> :: default empty object', function(t) {
  const tree = Object.assign({ }, DefTree, { attribs: { data: { } } });
  const res = If(tree);

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data=[1,2]><div /><Else /><p /></If> :: default array', function(t) {
  const tree = Object.assign({ }, DefTree, { attribs: { data: [1, 2] } });
  const res = If(tree);

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});
test('<If data=[]><div /><Else /><p /></If> :: default empty array', function(t) {
  const tree = Object.assign({ }, DefTree, { attribs: { data: [] } });
  const res = If(tree);

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});
