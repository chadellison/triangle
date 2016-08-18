"use strict"

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.sortedSides = [this.side1,
                        this.side2,
                        this.side3].sort(this.compareSides)
  }
  kind() {
    if (this.checkTriangle()) {
      throw "Error"
    }
    if (this.sortedSides[0] === this.sortedSides[2]) {
      return "equilateral"
    } else if (this.sortedSides[0] === this.sortedSides[1] ||
        this.sortedSides[1] === this.sortedSides[2]) {
      return "isosceles"
    } else {
      return "scalene"
    }
  }

  checkTriangle() {
    let result = false
    if (this.sortedSides[0] <= 0) {
      result = true
    }
    if (this.sortedSides[0] + this.sortedSides[1] < this.sortedSides[2]) {
      result = true
    }
    return result
  }

  compareSides(a, b) {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  }
}
module.exports = Triangle
