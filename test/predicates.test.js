var test = require('tape');
var defined = require('../dist/predicates/defined');
var empty = require('../dist/predicates/empty');
var equal = require('../dist/predicates/equal');
var gt = require('../dist/predicates/gt');
var gte = require('../dist/predicates/gte');
var lt = require('../dist/predicates/lt');
var lte = require('../dist/predicates/lte');

test('defined', function(t) {
  t.plan(6);

  t.equal(defined(undefined), false); // <If data={undefined} defined />
  t.equal(defined('boo'), true); // <If data="boo" defined />
  t.equal(defined('boo', 'false'), false); // <If data="boo" defined="false" />
  t.equal(defined(undefined, 'false'), true); // <If data={undefined} defined="false" />
  t.equal(defined(undefined, 'defined'), false); // <If data={undefined} defined="defined" />
  t.equal(defined(undefined, 'true'), false); // <If data={undefined} defined="true" />
});

test('empty', function(t) {
  t.plan(11);

  t.equal(empty(undefined), false); // <If data={undefined} empty />

  t.equal(empty([]), true); // <If data=[] empty />
  t.equal(empty([], 'false'), false); // <If data=[] empty="false" /> ([] is not empty === true)
  t.equal(empty([7], 'empty'), false); // <If data=[7] empty="empty" />
  t.equal(empty([7], 'true'), false); // <If data=[7] empty="true" />
  t.equal(empty([7], 'false'), true); // <If data=[7] empty="false" />

  t.equal(empty({ }), true); // <If data={ } empty />
  t.equal(empty({ }, 'false'), false); // <If data={ } empty="false" />
  t.equal(empty({ id: 0 }, 'empty'), false); // <If data={ id } empty="empty" />
  t.equal(empty({ id: 1 }, 'true'), false); // <If data={ id } empty="true" />
  t.equal(empty({ id: 2 }, 'false'), true); // <If data={ id } empty="false" />
});

test('equal', function(t) {
  t.plan(3);

  t.equal(equal(undefined, 'string'), false); // <If data={undefined} equal="string" />
  t.equal(equal('string', 'string'), true); // <If data="string" equal="string" />
  t.equal(equal('string', undefined), false); // <If data="string" equal={undefined} />
});

test('gt', function(t) {
  t.plan(4);

  t.equal(gt(undefined, 0), false); // <If data={undefined} gt="0" />
  t.equal(gt(0, 0), false); // <If data="0" gt="0" />
  t.equal(gt(10, 15), false); // <If data="10" gt="15" />
  t.equal(gt(10, 0), true); // <If data="10" gt="0" />
});

test('gte', function(t) {
  t.plan(4);

  t.equal(gte(undefined, 0), false); // <If data={undefined} gte="0" />
  t.equal(gte(0, 0), true); // <If data="0" gte="0" />
  t.equal(gte(10, 15), false); // <If data="10" gte="15" />
  t.equal(gte(10, 0), true); // <If data="10" gte="0" />
});

test('lt', function(t) {
  t.plan(4);

  t.equal(lt(undefined, 0), false); // <If data={undefined} lt="0" />
  t.equal(lt(0, 0), false); // <If data="0" lt="0" />
  t.equal(lt(10, 15), true); // <If data="10" lt="15" />
  t.equal(lt(10, 0), false); // <If data="10" lt="0" />
});

test('lte', function(t) {
  t.plan(4);

  t.equal(lte(undefined, 0), false); // <If data={undefined} lte="0" />
  t.equal(lte(0, 0), true); // <If data="0" lte="0" />
  t.equal(lte(10, 15), true); // <If data="10" lte="15" />
  t.equal(lte(10, 0), false); // <If data="10" lte="0" />
});