'use strict'
/**
 * @name :    express-validation-error
 * @create :  2020/05/28
 * @version : 1.1.0
 * @author :  Joël Lesenne
 * @depot :   <https://github.com/joellesenne/express-validation-error>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * @load modules dependencies
 */
const chai = require('chai');
const {expect} = chai;

/**
 * @load modules UTILS
 */
const ValidationError = require('../lib/ValidationError');

describe('ValidationError', () => {
  it('should catch exceptions of a function passed into it', async () => {
    const error = new Error('catch me!');
    expect(() => new ValidationError(error)).not.to.throw();
  });
});
