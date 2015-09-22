var require = require || null;
var chai = chai || null;
var _require = require;

var test = function(baseUrl, ajaxer, pluginPath) {

  var expect = chai.expect;

  config({
    baseUrl: baseUrl,
    ajax: ajaxer,
    plugins: {
      text: pluginPath
    }
  });

  describe('requirator-text', function() {

      it('should load a text file', function(done) {

        require(['text!' + baseUrl + 'files/sample.txt'], function(sample) {
          expect(sample).to.be.a('string');
          done();
        });
      });

  });
};

if (require) {

    // running in node
   chai = require('chai');
   var fsAjaxer = require('ajaxer-fs');

   var fs = require('fs');
   var req = fs.readFileSync('./node_modules/requirator/lib/requirator.js').toString();
   eval(req);

   test('./tests/', fsAjaxer, './lib/requirator-text');
} else {

  // running in test_runner.html

   ajaxer.get('../node_modules/requirator/lib/requirator.js', '', function(data) {
     eval(data);
     test('./', ajaxer, '../lib/requirator-text');
     mocha.run();
   });

}
