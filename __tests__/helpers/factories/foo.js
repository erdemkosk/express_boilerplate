const { Factory } = require('rosie');
const { ObjectId } = require('mongodb');
const faker = require('faker');

module.exports = new Factory().attrs(
  {
    _id: new ObjectId(),
    name: faker.name,
    createdAt: new Date(),
  },
);
