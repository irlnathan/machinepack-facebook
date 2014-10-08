/**
 * Module dependencies
 */

// var doJSONRequest = require('./lib/request-login-url');



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
    // Not a parameter
    // appSecret: {
    //   example: 'dsg4901g0123456',
    //   description: 'Your Facebook app secret',
    //   required: true
    // },
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

    if (!(inputs['client_id'] || inputs['appId'] || inputs['redirect_uri'])){
      console.log('Error!');
      return exits(new Error('At least one required param was not included'));
    }

    var facebookRedirectUrl = 'https://www.facebook.com/dialog/oauth?client_id=' + inputs.appId + '&redirect_uri=' + inputs.callbackUrl + '&scope=' + inputs.permissions.join(',');

    return exits(null,facebookRedirectUrl);

    // See https://github.com/mikermcneil/node-deezer for funsies
  }
};
