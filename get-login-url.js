/**
 * Module dependencies
 */

var util = require('util');



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
    callbackUrl: {
      example: 'http://localhost:1337/user/facebook/login',
      description: 'The URL which will be hit after the user successfully logs in.  Usually contains some kind of identifying information about the user.',
      required: true
    },
    permissions: {
      example: ['email','friends'],
      description: 'The Facebook permissions requested by this application.'
    }
  },
  exits: {
    error: {},
    success: {
      example: 'https://www.facebook.com/dialog/oauth?client_id=215798311808508&redirect_uri=http://localhost:1337/user/facebook/login&scope=email,friends'
    }
  },
  fn: function (inputs,exits) {

    inputs.permissions = inputs.permissions || [];

    try {

      if (!(inputs['client_id'] || inputs['appId'] || inputs['redirect_uri'])){
        console.log('Error!');
        return exits(new Error('At least one required param was not included'));
      }

      return exits(null, util.format(
        'https://www.facebook.com/dialog/oauth?client_id=%s&redirect_uri=%s&scope=%s',
        inputs.appId, inputs.callbackUrl, inputs.permissions.join(',')
      ));
    }
    catch(e) {
      return exits.error(e);
    }
  }
};
