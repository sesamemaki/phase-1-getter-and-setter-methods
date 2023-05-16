// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return this.radius * this.radius * Math.PI;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  set circumference(newCircumference) {
    this.radius = newCircumference / Math.PI / 2;
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea);
  }
}

let newCircle = new Circle("87");
newCircle.diameter = 45;
newCircle.circumference = 689;
newCircle.area = 6799;
console.log(newCircle.circumference);
