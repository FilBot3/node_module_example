var nme = require('../../lib/node_module_examples/console_example');
var assert = require('assert');

describe('console_example.js', function() {
  it('should tell you that it sees you.', function() {
    assert.equal(nme.say(), 'I see you.');
  });
});
