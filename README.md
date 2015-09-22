# requirator-text

[![Build Status](https://travis-ci.org/power-cosmic/requirator-text.svg)](https://travis-ci.org/power-cosmic/requirator-text)

## Overview

A plugin for [requirator](https://github.com/power-cosmic/requirator) to mimic the functionality of [requirejs/text](https://github.com/requirejs/text).

## How to

### Register with requirator

Pass the identifier and path for `require-text` to `require` when calling `require`'s `config`.

For example, if requirator-text is located in the same directory as a node server:

```javascript
config({
  baseUrl: 'modules',
  plugins: {
    text: '/requirator-text/lib/requirator-text'
  }
});
```

### Use

To treat a text file as a dependency with `requirator`, prefix the location with `text!` when calling requirator's `define` or `require` functions.

```javascript
require(['text!test.txt'], function(text) {
  console.log('Loaded text:', text);
});
```

Note: If you used a different identifier when calling `config`, use that identifier in before the `!`.
