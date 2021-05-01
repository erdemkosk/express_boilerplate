/* eslint-disable no-unused-vars */
const {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
} = require('./model/errors');

module.exports = {
  FooNotFound: {
    parentError: NotFoundError,
    message: 'Foo not found.',
    code: 1000,
  },
};
