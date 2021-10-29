const mysqlServer = require('../connections/mysqlServer');

const create = async ({ districtName, state }) => {
  const [{ insertId }] = await mysqlServer.execute(
    'INSERT INTO heroku_5eb1b5a5878e473.Districts (district_name, state) VALUES (?,?)',
    [districtName, state],
  );
  return { id: insertId };
};

const getAll = async () => {
  const [districts] = await mysqlServer.execute('SELECT * FROM heroku_5eb1b5a5878e473.Districts');
  return districts;
};

const getById = async (id) => {
  const [districts] = await mysqlServer.execute(
    'SELECT * FROM heroku_5eb1b5a5878e473.Districts WHERE district_id = ?', [id],
  );
  return districts[0];
};

module.exports = {
  create,
  getAll,
  getById,
};
