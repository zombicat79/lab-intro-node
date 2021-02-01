class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort(function(a,b){
      return a-b
  })
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    }
    else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    let highestValue = 0;
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] > highestValue) {
          highestValue = this.items[i];
        }
      }
    }
    return highestValue;
  } 

  min() {
    let lowestValue = Infinity;
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] < lowestValue) {
          lowestValue = this.items[i];
        }
      }
    }
    return lowestValue;
  }

  sum() {
    let sum = 0;
    if (this.items.lenght === 0) {
      return 0;
    }
    else {
      for (let i = 0; i < this.length; i++) {
        sum = sum + this.items[i];
      }
    }
    return sum;
  }

  avg() {
    let sum = 0;
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {
      for (let i = 0; i < this.length; i++) {
        sum = sum + this.items[i];
      }
    }
    return sum / this.length;
  }
}

module.exports = SortedList;