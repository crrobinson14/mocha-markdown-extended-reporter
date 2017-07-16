# mocha-markdown-extended-reporter

[![Greenkeeper badge](https://badges.greenkeeper.io/gabrielcsapo/mocha-markdown-extended-reporter.svg)](https://greenkeeper.io/)

> extended the base mocha-markdown reporter

[![Npm Version](https://img.shields.io/npm/v/mocha-markdown-extended-reporter.svg)](https://www.npmjs.com/package/mocha-markdown-extended-reporter)
[![Build Status](https://travis-ci.org/gabrielcsapo/mocha-markdown-extended-reporter.svg?branch=master)](https://travis-ci.org/gabrielcsapo/mocha-markdown-extended-reporter) 
[![Dependency Status](https://david-dm.org/gabrielcsapo/mocha-markdown-extended-reporter.svg)](https://david-dm.org/gabrielcsapo/mocha-markdown-extended-reporter)
[![devDependency Status](https://david-dm.org/gabrielcsapo/mocha-markdown-extended-reporter/dev-status.svg)](https://david-dm.org/gabrielcsapo/mocha-markdown-extended-reporter#info=devDependencies)
![npm license](https://img.shields.io/npm/l/mocha-markdown-extended-reporter.svg)
[![npm](https://img.shields.io/npm/dt/mocha-markdown-extended-reporter.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dm/mocha-markdown-extended-reporter.svg?maxAge=2592000)]()

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
