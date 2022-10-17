const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor (x = true) {
    this.direct = x;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error ('Incorrect arguments!');
    }
    let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase().split('');
    
    key = key.toUpperCase().split('');
    key.map((elem, index, array) => array[index] = alf.indexOf(elem));// начальный поток ключей
  
    message.map((elem, index, array) => array[index] = (alf.includes(elem) ? alf.indexOf(elem) : elem))
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      if (typeof message[i] === 'number') {
        message[i] = (message[i] + key[index]) % 26;
        index = (index === key.length - 1) ? 0 : index + 1;
      }
    }
    message.map((elem, index, array) => array[index] = (typeof elem === 'number') ? alf[elem] : elem);

    return (this.direct) ? message.join('') : message.reverse().join('')
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error ('Incorrect arguments!');
    }
    let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.split('');
    message.map((elem, index, array) => array[index] = (alf.includes(elem) ? alf.indexOf(elem) : elem));
    key = key.toUpperCase().split('');
    key.map((elem, index, array) => array[index] = alf.indexOf(elem));
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      if (typeof message[i] === 'number') {

        message[i] = (message[i] - key[index] >= 0 ) ? 
                      (message[i] - key[index]) % 26 :
                      (message[i] - key[index] + 26) % 26;
        index = (index === key.length - 1) ? 0 : index + 1;
      }
    }
    message.map((elem, index, array) => array[index] = (typeof elem === 'number') ? alf[elem] : elem);
    return (this.direct) ? message.join('') : message.reverse().join('')
  }
  
}

module.exports = {
  VigenereCipheringMachine
};
