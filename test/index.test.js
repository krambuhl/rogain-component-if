var test = require('tape');
var If = require('../dist');

var defTree = {
  type: 'component',
  name: 'If',
  children: [{
    type: 'tag',
    name: 'div'
  }]
};

test('<If data=123 equal=789><div /></If> :: unequal', function(t) {
  var tree = Object.assign({ }, defTree, { attribs: { data: 123, equal: 789 } });
  var res = If(tree, { });

  t.plan(1);
  t.equal(res === undefined, true);
});

test('<If data=123 equal=123><div /><Else /><p /></If> :: equal', function(t) {
  var tree = Object.assign({ }, defTree, { attribs: { data: 123, equal: 123 } });
  tree.children.push({ type: 'component', name: 'Else' });
  tree.children.push({ type: 'tag', name: 'p' });
  var res = If(tree, { });

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});

test('<If data=123 equal=789><p /><Else /><div /></If> :: unequal else', function(t) {
  var tree = Object.assign({ }, defTree, { attribs: { data: 123, equal: 789 } })
  tree.children.unshift({ type: 'component', name: 'Else' });
  tree.children.unshift({ type: 'tag', name: 'p' });
  var res = If(tree, { });

  t.plan(3);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].name, 'div');
});