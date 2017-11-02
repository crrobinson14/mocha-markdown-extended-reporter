# mocha-markdown-extended-reporter

> 💼 extends the base mocha-markdown reporter

[![Npm Version](https://img.shields.io/npm/v/mocha-markdown-extended-reporter.svg)](https://www.npmjs.com/package/mocha-markdown-extended-reporter)
[![Build Status](https://travis-ci.org/gabrielcsapo/mocha-markdown-extended-reporter.svg?branch=master)](https://travis-ci.org/gabrielcsapo/mocha-markdown-extended-reporter)
[![Dependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/mocha-markdown-extended-reporter/status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/mocha-markdown-extended-reporter)
[![devDependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/mocha-markdown-extended-reporter/dev-status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/mocha-markdown-extended-reporter#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/mocha-markdown-extended-reporter.svg)](https://github.com/gabrielcsapo/mocha-markdown-extended-reporter)
[![npm](https://img.shields.io/npm/dm/mocha-markdown-extended-reporter.svg)](https://github.com/gabrielcsapo/mocha-markdown-extended-reporter)

## install

```
npm install mocha-markdown-extended --save-dev
```

## usage

```
mocha -R mocha-markdown-extended-reporter
```

## ouput

<a name="markdown-extended"></a>
# markdown extended
should be fast   ✓.
15ms.

```js
setTimeout(function() {
		done();
	}, 10);
```

should medium   ✓.
503ms.

```js
setTimeout(function() {
		done();
	}, 500);
```

should be slow   ✓.
1.003s.

```js
setTimeout(function() {
		done();
	}, 1000);
```

should throw   ✖.
0.

```js
throw 'hi';
```
