module.exports = {

  identity: 'get-user-by-access-token',
  friendlyName: 'Get user by access token',
  description: 'Get information about the Facebook user with the specified access token.',
  extendedDescription: '',
  cacheable: true,

  inputs: {
    accessToken: {
      example: 'CA2Emk9XsJUIBAHB9sTF5rOdNmAXTDjiHxZaZC1GYtFZCcdYGVnLYZB7jZCvensIpGc22yEzN6CL6wtQ9LPVXTNkuP6eQoUQ0toEVPrmTTqDpj0POijBpsuZBnx7jrZCHaTw8leiZBn0R8u6gZAYZAuD77cA3tnDMYvHhrl42CnljROeC9maWoa5zbsT2TZBXdL9wEuGQDSxKqRPyajRw3P3HEK',
      description: 'The access token which allows you to do things and get information on behalf of a particular Facebook user.',
      required: true
    }
  },

  defaultExit: 'success',
  catchallExit: 'error',

  exits: {
    error: {
      description: 'The Facebook API returned an error (i.e. a non-2xx status code)'
    },
    success: {
      description: 'Returns all available data for the Facebook user connected to the specified access token. Advanced details of all possible fields available at https://developers.facebook.com/docs/graph-api/reference/v2.2/user.'
    }
  },

  fn: function (inputs,exits) {

    var doJSONRequest = require('../lib/do-request');

    // GET projects/ and send the api token as a header
    doJSONRequest({
      method: 'get',
      url: '/v2.1/me',
      data: {
        'access_token': inputs.accessToken
      },
      headers: {},
    }, function (err, responseBody) {
      if (err) { return exits.error(err); }
      return exits.success(responseBody);
    });
  }
};


