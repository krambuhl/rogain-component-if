var test = require('tape');
var If = require('../dist');

var Tree = {
  type: 'component',
  name: 'If',
  attrs: {
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

  var tree = Object.assign({ }, Tree);
  tree.attrs.data = 'thing';
  tree.attrs.equal = 'thing';

  var res = If(tree);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'p');
});

test('<If data="thing2" not equal="thing"><div /><Else /><p /></If>', function(t) {
  t.plan(3);

  var tree = Object.assign({ }, Tree);
  tree.attrs.data = 'thing2';
  tree.attrs.equal = 'thing';

  var res = If(tree);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});