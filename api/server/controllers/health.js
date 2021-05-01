const dateFormat = require('dateformat');
const { successResponse } = require('../../util/response');

module.exports = {
  async getHealthStatus({ req, res, next }) {
    return res.status(200).send(successResponse({
      results: {
        time: dateFormat(new Date(), 'dd-mm-yyyy h:MM:ss'),
        uptime: `${Math.floor(Math.floor(process.uptime() * 1000) / 60000)} min.`,
      },
    }));
  },
};
