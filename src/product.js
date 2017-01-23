var chalk = require('chalk');


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  toString(currency, rateCurrency) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return `${chalk.yellow(this.name)} cost ${chalk.red(this.price * rateCurrency)}${currency}, duration: ${this.getDuration()} minutes`;
  }
}

class Book extends Product {
  constructor(name, price, isbn, minDuration, maxDuration) {
    super(name, price);
    this.isbn = isbn;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
  }
  getDuration() {
    return (this.minDuration + this.maxDuration) / 2;
  }
}

class DVD extends Product {
  constructor(name, price, moovie, runningTime) {
    super(name, price);
    this.moovie = moovie;
    this.runningTime = runningTime;
  }
  getDuration() {
    return this.runningTime;
  }
}

class VideoGame extends Product {
  constructor(name, price, platform, minDuration, maxDuration) {
    super(name, price);
    this.platform = platform;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
  }
  getDuration() {
    return (this.minDuration + this.maxDuration) / 2;
  }
}


module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};