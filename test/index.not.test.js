const test = require('tape');
const If = require('../dist');

const Tree = {
  type: 'component',
  name: 'If',
  attribs: {
    not: 'not'
  },
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

test('<If data="thing" not equal="thing"><div /><Else /><p /></If>', function(t) {
  t.plan(3);

  let tree = Object.assign({ }, Tree);
  tree.attribs.data = 'thing';
  tree.attribs.equal = 'thing';

  let res = If(tree);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data="thing2" not equal="thing"><div /><Else /><p /></If>', function(t) {
  t.plan(3);

  let tree = Object.assign({ }, Tree);
  tree.attribs.data = 'thing2';
  tree.attribs.equal = 'thing';

  let res = If(tree);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});