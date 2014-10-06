/**
 * Module dependencies
 */

var doJSONRequest = require('./lib/do-request');



module.exports = {
  id: 'get-login-url',
  moduleName: 'machinepack-facebook',
  description: 'Get the Facebook URL a user should visit to allow/deny the specified Facebook Developer app (i.e. your app).',
  notes: undefined,
  moreInfoUrl: '',
  inputs: {
    appId: {
      example: '215798311808508',
      description: 'Your Facebook app id',
      required: true
    },
    appSecret: {
      example: 'dsg4901g0123456',
      description: 'Your Facebook app secret',
      required: true
    },
    callbackUrl: {
      example: 'http://localhost:1337/user/facebook/login',
      description: 'The URL which will be hit after the user successfully logs in.  Usually contains some kind of identifying information about the user.'
    },
    permissions: {
      example: ['readprivatemessages','foo', 'seefriendsorwhatever'],
      description: 'The Facebook permissions requested by this application.'
    }
    // ... anything else this needs
  },
  exits: {
    error: {},
    success: {
      example: 'http://www.facebook.com/dialog/oauth?crazystuff=stuff'
    }
  },
  fn: function (inputs,exits) {


    // hit GET projects/ and send the api token as a header
    doJSONRequest({
      method: 'get',
      url: '/????',
      data: {},
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


