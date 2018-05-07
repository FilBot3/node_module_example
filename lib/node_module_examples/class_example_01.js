'use strict';

var areas_and_stuff = module.exports = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }
}

var dink = new areas_and_stuff(10, 10);

console.log(dink.area);
