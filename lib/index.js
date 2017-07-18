'use strict';

/*
 * @Author: snair@hootboard.com 
 * @Date: 2017-07-18 12:41:39 
 * @Last Modified by: snair@hootboard.com
 * @Last Modified time: 2017-07-18 15:21:43
 */

function generateErrors(errorJsonPath) {
  if (!errorJsonPath) {
    return new Error('Please provide a json file containing error codes');
  }

  this.errors = require(errorJsonPath);

  this.generateErrors = (errorCode, errorType, customMessage, customResponse) => {
    if (this.errors[errorCode]) {
      return this.errors[errorCode];
    }

    if (customResponse) {
      return customResponse;
    }
    return {
      meta: {
        type: errorType ? errorType : 'error',
        status: 500,
        code: 'An unknown error occured',
        contextInfo: {
          oauth: {
            message: 'an unknown error occured'
          }
        },
        message: customMessage ? customMessage : 'An unknown error occured'
      }
    };
  };
}

module.exports = generateErrors;
