/**
 * Module dependencies
 */

var doJSONRequest = require('./lib/do-request');



module.exports = {
  id: 'get-user-by-access-token',
  moduleName: 'machinepack-facebook',
  description: 'Get information about the Facebook user with the specified access token.',
  notes: undefined,
  moreInfoUrl: '',
  inputs: {
    accessToken: {
      example: '215798311808508',
      description: 'The access token which allows you to do things and get information on behalf of a particular Facebook user.',
      required: true
    }
  },
  exits: {
    error: {},
    success: {
      example: {
        // ?
      }
    }
  },
  fn: function (inputs,exits) {

console.log('Getting user with inputs:',inputs);
    // hit GET projects/ and send the api token as a header
    doJSONRequest({
      method: 'get',
      url: '/v2.1/me',
      data: {
        'access_token': inputs.accessToken
      },
      headers: {
        // ????
      },
    }, function (err, responseBody) {
      if (err) { return exits(err); }
      return exits(null, responseBody);
    });

    // See https://github.com/mikermcneil/node-deezer for funsies
  }
};


