var test = require('tape');
var If = require('../dist');

var Var = {
  type: 'variable',
  path: 'data'
};

var Tree = {
  type: 'component',
  name: 'If',
  attrs: {
    not: 'not'
  },
  children: [{
    type: 'tag',
    name: 'div'
  }]
};

test('<If data={data} not equal="thing"><div /></If>', function(t) {
  t.plan(3);

  var tree = Object.assign({ }, Tree);
  tree.attrs.data = Var;
  tree.attrs.equal = "thing";

  var res = If(tree, { data: 'thig' });

  console.log(tree, res);

  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});