var mocha = require('mocha');
var Base = mocha.reporters.Base;
var utils = mocha.utils;
var color = Base.color;

var SUITE_PREFIX = '$';

module.exports = MarkdownExtended;

function MarkdownExtended(runner) {
  Base.call(this, runner);

  var passes = 0;
  var failures = 0;
  var buf = '';
  var level = 0;

  function title(str) {
    return Array(level).join('#') + ' ' + str;
  }

  function mapTOC(suite, obj) {
    var ret = obj;
    var key = SUITE_PREFIX + suite.title;

    obj = obj[key] = obj[key] || { suite: suite };
    suite.suites.forEach(function(suite) {
      mapTOC(suite, obj);
    });

    return ret;
  }

  function stringifyTOC(obj, level) {
    ++level;
    var buf = '';
    var link;
    for (var key in obj) {
      if (key === 'suite') {
        continue;
      }
      if (key !== SUITE_PREFIX) {
        link = ' - [' + key.substring(1) + ']';
        link += '(#' + utils.slug(obj[key].suite.fullTitle()) + ')\n';
        buf += Array(level).join('  ') + link;
      }
      buf += stringifyTOC(obj[key], level);
    }
    return buf;
  }

  function generateTOC(suite) {
    var obj = mapTOC(suite, {});
    return stringifyTOC(obj, 0);
  }

  generateTOC(runner.suite);

  runner.on('suite', function(suite) {
    ++level;
    var slug = utils.slug(suite.fullTitle());
    buf += '<a name="' + slug + '"></a>' + '\n';
    buf += title(suite.title) + '\n';
  });

  runner.on('pass', function(test){
    passes++;
    if(test.duration > 1000) {
      test.time = test.duration / 1000 + 's';
    } else {
      test.time = test.duration + 'ms'
    }
    var code = utils.clean(test.fn.toString());
    buf += test.title + ' ' + color('checkmark', '  ' + Base.symbols.ok) + '.\n';
    buf += color(test.speed, test.time) + '.\n';
    buf += '\n```js\n';
    buf += code + '\n';
    buf += '```\n\n';
  });

  runner.on('fail', function(test, err){
    failures++;
    if(test && test.fn == undefined) { console.log(test); };
    var code = utils.clean(test.fn.toString());
    buf += test.title + ' ' + color('fail', '  ' + Base.symbols.err) + '.\n';
    buf += test.duration + '.\n';
    buf += '\n```js\n';
    buf += code + '\n';
    buf += '```\n\n';
  });

  runner.on('suite end', function() {
    --level;
  });

  runner.on('end', function(){
    process.stdout.write(buf);
    process.exit(failures);
  });
}