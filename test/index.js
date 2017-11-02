const test = require('tape');

const exec = require('child_process').exec;

test('mocha-markdown-extended-reporter', (t) => {
  t.plan(1);

  t.test('should output the correct reporter output', (t) => {
      exec('mocha test/fixtures/test.js -R index.js', (error, stdout, stderr) => {
        const out = stdout.split('\n');
        const raw = out.slice(3, out.length);
        
        t.equal(raw.length, 39);
        t.equal(raw[0], '<a name=""></a>');
        t.end();
      });
  });
});
