const ApiMocks = require('api-mocks').ApiMocks;
const membersGetRoute = require('./members/members-get-route');

let routes = {
  '/members': {
    GET: membersGetRoute
  }
};

module.exports = new ApiMocks({
  name: 'myapi', // optionnal name of your set
  routes
});
