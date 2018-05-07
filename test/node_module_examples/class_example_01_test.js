var assert = require('assert');

var Rectangle = require('../../lib/node_module_examples/class_example_01');

describe('class_example_01', function() {
  it('Gives you the area when given the height and width', function() {
    var areas_and_stuff = new Rectangle(10, 10);
    assert.equal(areas_and_stuff.area, 100);
  });
});
