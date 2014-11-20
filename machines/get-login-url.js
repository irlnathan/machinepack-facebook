module.exports = {

  identity: 'get-login-url',
  friendlyName: 'Get login url',
  description: 'Get the Facebook URL a user should visit to allow/deny the specified Facebook Developer app (i.e. your app).',
  cacheable: true,

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
      example: ['email'],
      description: 'The Facebook permissions requested by this application.'
    }
  },

  defaultExit: 'success',
  catchallExit: 'error',

  exits: {
    error: {
      description: 'The Facebook API returned an error (i.e. a non-2xx status code)'
    },
    success: {
      example: 'https://www.facebook.com/dialog/oauth?client_id=215798311808508&redirect_uri=http://localhost:1337/user/facebook/login&scope=email,friends'
    }
  },

  fn: function (inputs, exits) {

    var util = require('util');

    inputs.permissions = inputs.permissions || [];

    try {
      return exits.success(util.format(
        'https://www.facebook.com/dialog/oauth?client_id=%s&redirect_uri=%s&scope=%s',
        inputs.appId, inputs.callbackUrl, inputs.permissions.join(',')
      ));
    }
    catch(e) {
      return exits.error(e);
    }
  }
};
