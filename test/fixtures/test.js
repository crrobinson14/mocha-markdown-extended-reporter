var reporters = require('../index.js');

describe('markdown extended', function () {
  
  it('should be fast', function(done) {
  	setTimeout(function() {
  		done();
  	}, 10);
  });

  it('should medium', function (done) {
  	setTimeout(function() {
  		done();
  	}, 500);
  });

  it('should be slow', function (done) {
  	setTimeout(function() {
  		done();
  	}, 1000);
  });

  it('should throw', function() {
    throw 'hi';
  });

});