const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns one line if string is less than or equal to max length', () => {
    expect(wrap("hello world", 15)).to.equal("hello world");
    expect(wrap("hello world again", 17)).to.equal("hello world again");
  })

  it('Returns multiple lines if string is more than max length', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20))
    .to.equal("Lorem ipsum dolor \nsit eu amet, elit na \nmagna sem amet nulla \nvel purus ac ligula.")  
  })
});

