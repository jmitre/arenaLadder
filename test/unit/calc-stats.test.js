var ladder = require('./rank');
var classes = require('./classes');
var rewire = require('rewire');
var expect = require('chai').expect;
var calcStats = rewire('../../calc-stats.js').__get__('calcStats');

describe('calulate stats', function() {
  it('should count the occurences of a class given the id', function() {
    expect(calcStats.countClass(8, ladder)).to.equal(2);
  });
  it('should calculate the percentage of occurences of a class given the id', function(){
    expect(calcStats.percOfClass(8, ladder)).to.equal(.4);
  });
  it('should calculate the percentages for all classes', function(){
    expect(calcStats.percOfClasses(ladder)[7]).to.equal(.4)
    expect(calcStats.percOfClasses(ladder)[10]).to.equal(.2)
    expect(calcStats.percOfClasses(ladder).length).to.equal(12)
  });
  xit('given an array of percentages should map them to an object with class names as keys', function() {
    expect(calcStats.convert(calcStats.percOfClasses(ladder), classes)["Rogue"].perc).to.equal(.4);
  });
});
