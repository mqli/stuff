var Parser = function (tokens) {
  this.tokens = tokens;
  this.lookahead = this.tokens.shift();
};
Parser.prototype.expr = function () {
  this.term();
  while (true) {
    if (this.lookahead == '+' ) {
      this.match('+');
      this.term();
      console.log('+');
    } else if (this.lookahead == '-' ) {
      this.match('-');
      this.term();
      console.log('-');
    } else {
      return;
    }
  }
};
Parser.prototype.term = function () {
  if ('0123456789'.indexOf(this.lookahead) >= 0) {
    console.log(this.lookahead);
    return this.match(this.lookahead);
  }
  throw new Error('syntax error');
};
Parser.prototype.match = function (matcher) {
  if (this.lookahead === matcher) {
    return this.lookahead = this.tokens.shift();
  }
  throw new Error('syntax error');
};
new Parser('1+1+2-1+5-2'.split('')).expr();
