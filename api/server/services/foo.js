const fooLogic = require('../../logic/foo');
const fooDataAccess = require('../../data/data-access/foo');
const logger = require('../../plugin/logger');
const { FooEventHandler } = require('../../event/adapters');
const {
  FooNotFound,
} = require('../../util/error');

module.exports = {
  async getFoo({ id }) {
    const foo = await fooDataAccess.getFoo({ id });

    const randomNumber = fooLogic.generateRandomNumber(5);

    FooEventHandler.triger({ params: { randomNumber } });

    if (!foo) {
      logger.error('[FooService - getFoo failed]%o', {
        id,
      });

      throw new FooNotFound();
    }

    return {
      foo,
    };
  },
};
