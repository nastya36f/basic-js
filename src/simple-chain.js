const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  'array': [],
  getLength() {
    return this.array.length;
  },
  addLink(value='') {
    this.array.push(String(value));
    return this
  },
  removeLink(position) {
    if ((typeof position !== 'number')|| position < 1 || position > (this.getLength() - 1)) {
      this.array = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    else {
      this.array.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this
  },
  finishChain() {
    this.array.forEach((elem, index) => this.array[index] = '( ' + elem + ' )');
    let chain = this.array.join('~~');
    this.array = [];
    return chain
  }
};

module.exports = {
  chainMaker
};
