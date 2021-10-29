const mysqlServer = require('../connections/mysqlServer');

const create = async ({ dateName, districtId }) => {
  const [{ insertId }] = await mysqlServer.execute(
    'INSERT INTO heroku_5eb1b5a5878e473.Dates (date_name, district_id) VALUES (?,?)',
    [dateName, districtId],
  );
  return { id: insertId };
};

const getAll = async () => {
  const [dates] = await mysqlServer.execute('SELECT * FROM heroku_5eb1b5a5878e473.Dates');
  return dates;
};

const getById = async (id) => {
  const [dates] = await mysqlServer.execute(
    'SELECT * FROM heroku_5eb1b5a5878e473.Dates WHERE date_id = ?', [id],
  );
  return dates[0];
};

module.exports = {
  create,
  getAll,
  getById,
};
