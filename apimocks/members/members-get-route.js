const {Route} = require('api-mocks');
const _ = require('lodash');

const memberDefinition = require('./member-definition');

class MembersGetRoute extends Route {
  constructor(request) {
    let pagination = {
      current_page: parseInt(_.get(request.query, 'page[number]', 1), 10),
      per_page: parseInt(_.get(request.query, 'page[size]', 20), 10),
      total: 7,
      total_pages: 7
    };
    let data = _.map(new Array(pagination.per_page), (value, index) => {
      let member = memberDefinition.getMock().data;
      let avatarIndexes = [1, 2, 3, 4, 5, 6, 7, 8];
      member.attributes.picture += `/avatar${avatarIndexes[index % avatarIndexes.length]}.png`;

      return member;
    });

    super({
      data,
      meta: {pagination}
    }, 200);
  }
}

module.exports = MembersGetRoute;
