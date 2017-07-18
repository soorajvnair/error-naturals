# error-naturals [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 

## Installation

```sh
$ npm install --save error-naturals
$ yarn add error-naturals
```

## Usage

```js
const ErrorNaturals = require('error-naturals');
const path = require('path');

const errorNaturals = new ErrorNaturals(path.join(__dirname, PATH_TO_YOUR_ERROR_CONFIG_JSON_FILE ));

errorNaturals.generateErrors(errorCode,errorType,customMessage, customResponse);


```

## Error config json file

You need to create a json file in the following format.

```json

{
  "YOUR_ERROR_CODE": {
    "error": {
      "meta": {
        "type": "error",
        "status": 400,
        "code": "INVALID_REQUEST",
        "context_info": {
          "ping": {
            "message": "A ping request was made without revelant content"
          }
        },
        "help_url": "http://developers.hootboard.com/docs/#errors",
        "message": "A ping request was made without one or more required parameters"
      }
    }
  }
}

```

## License

MIT © [soorajvnair]()


[npm-image]: https://badge.fury.io/js/error-naturals.svg
[npm-url]: https://npmjs.org/package/error-naturals
[travis-image]: https://travis-ci.org/soorajvnair/error-naturals.svg?branch=master
[travis-url]: https://travis-ci.org/soorajvnair/error-naturals
[daviddm-image]: https://david-dm.org/soorajvnair/error-naturals.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/soorajvnair/error-naturals
