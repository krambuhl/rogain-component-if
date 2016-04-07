var test = require('tape');
var defined = require('../dist/predicates/defined');

test('defined', function(t) {
  t.plan(4);

  t.equal(defined(undefined), false); // <If data={undefined} defined />
  t.equal(defined('boo'), true); // <If data="boo" defined />
  t.equal(defined('boo', 'false'), false); // <If data="boo" defined="false" />
  t.equal(defined(undefined, 'false'), true); // <If data={undefined} defined="false" />
});