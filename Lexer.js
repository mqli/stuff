var isDigit = function (char) {
  return char && /\d/.test(char);
};
var isLetter = function (char) {
  return char && /[a-zA-Z]/.test(char); ///\w/.test(undefined) true!!!!!!!!!!!!!
};
var Lexer = function (chars) {
  this.chars = chars;
  this.line = 1;
  this.peek = this.chars.shift();
  this.words = {
    'true': {
      tag: 'true',
      lexeme : 'true'
    },
    'false': {
      tag: 'false',
      lexeme : 'false'
    }
  };
};
Lexer.prototype.scan = function () {
  //excape the whitespace
  while (true) {
    //excape comment
    if (this.peek == '/' && this.chars[0] == '/') {
      while (true) {
        this.peek = this.chars.shift();
        if (this.peek == '\n' || !this.chars[0]) {
          this.peek = this.chars.shift();
          break; 
        }
      }
    }
    if(this.peek == ' ' || this.peek == '\t') {
      this.peek = this.chars.shift();
      continue;
    }
    else if (this.peek == '\n') this.line += 1;
    else break;
  }
  //match number
  if (isDigit(this.peek)) {
    var value = 0;
    do {
      value = 10 * value + parseInt(this.peek, 10);
      this.peek = this.chars.shift();
    } while (isDigit(this.peek));
    return {
      tag: 'num',
      value : value
    };
  }
  //match work
  if (isLetter(this.peek)) {
    var lexeme = '';
    do {
      lexeme += this.peek;
      this.peek = this.chars.shift();
    } while (isDigit(this.peek) || isLetter(this.peek));
    word = this.words[lexeme];
    if (word) {
      return word
    } else {
      word = this.words[lexeme] = {
        tag: 'id',
        lexeme: lexeme
      };
      return word;
    }
    return {
      tag: this.peek
    }
  }
};
console.log(new Lexer(''.split('')).scan());
console.log(new Lexer('//d'.split('')).scan());
console.log(new Lexer('//d\na'.split('')).scan());
console.log(new Lexer('//d\n'.split('')).scan());
console.log(new Lexer(' 11 '.split('')).scan());
console.log(new Lexer(' abb '.split('')).scan());
console.log(new Lexer(' a11 '.split('')).scan());
console.log(new Lexer(' true '.split('')).scan());