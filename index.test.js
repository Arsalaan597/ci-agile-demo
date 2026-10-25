
const test = require('node:test');
const assert = require('node:assert');
const { add, multiply } = require('./index');

test('addition test', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('multiplication test', () => {
  assert.strictEqual(multiply(2, 3), 6);
});
