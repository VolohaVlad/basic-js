const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  }

  encrypt(message, key) {
    this.checkArguments(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();

    let index = 0;
    let result = [];

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result.push(message[i]);
        continue;
      }

      let messageIndex = this.alphabet.indexOf(message[i]);
      let keyIndex = this.alphabet.indexOf(key[index % key.length]);
      let encryptedIndex = (messageIndex + keyIndex) % this.alphabet.length;
      result.push(this.alphabet[encryptedIndex]);
      index++;
    }

    return this.direct ? result.join("") : result.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    this.checkArguments(encryptedMessage, key);
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let index = 0;
    let result = [];

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.alphabet.includes(encryptedMessage[i])) {
        result.push(encryptedMessage[i]);
        continue;
      }

      let messageIndex = this.alphabet.indexOf(encryptedMessage[i]);
      let keyIndex = this.alphabet.indexOf(key[index % key.length]);
      let decryptedIndex = (messageIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
      result.push(this.alphabet[decryptedIndex]);
      index++;
    }

    return this.direct ? result.join("") : result.reverse().join("");
  }

  checkArguments(...args) {
    args.forEach((arg) => {
      if (!arg) {
        throw new Error("Incorrect arguments!");
      }
    });
  }

  repeatString(firstString, secondString) {
    let resultString = "";
    let firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
      if (i % firstStringLength === 0) {
        it = 0;
      }
      resultString += firstString[it];
      it++;
    }
    return resultString;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
