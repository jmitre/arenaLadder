require('../helper');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

describe('Can view pvp stats page', function()  {
  it('should display title', function() {
    browser.get('/pvp-stats/pvp-stats.html')
    element(by.tagName('h1')).getText().then(function(text){
      expect(text).to.equal('PvP Stats');
    });
  });
  it('should display table', function() {
    browser.get('/pvp-stats/pvp-stats.html')
    element( by.tagName('table') ).isPresent().then(function(bool) {
      expect(bool).to.equal(true);
    });
  });
  it('should display a table with list item', function(){
    browser.get('/pvp-stats/pvp-stats.html')
    element( by.css('table li') ).isPresent().then(function(bool) {
      expect(bool).to.equal(true);
    });
  });
});
