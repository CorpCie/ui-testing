const Definition = require('api-mocks').Definition;

const geoDefinition = require('../geo/geo-definition');

const MemberSchema = {
  id: 'member',
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        id: {
          type: 'double',
          chance: 'natural'
        },
        type: {
          type: 'string',
          enum: ['member']
        },
        attributes: {
          type: 'object',
          properties: {
            nickname: {
              type: 'string',
              chance: 'name'
            },
            email: {
              type: 'string',
              chance: 'email'
            },
            phone: {
              type: 'string',
              chance: {
                phone: {
                  country: 'fr'
                }
              }
            },
            geo: {
              $ref: 'geo'
            }
          },
          required: [
            'nickname',
            'email',
            'phone',
            'geo'
          ]
        }
      },
      required: [
        'id',
        'attributes',
        'type'
      ]
    }
  },
  required: [
    'data'
  ]
};

module.exports = new Definition(MemberSchema, [
  geoDefinition.schema
]);
