const mysqlServer = require('../connections/mysqlServer');

const create = async ({ dateName, districtId }) => {
  const [{ insertId }] = await mysqlServer.execute(
    'INSERT INTO Nimbus.Dates (date_name, district_id) VALUES (?,?)',
    [dateName, districtId],
  );
  return { id: insertId };
};

const getAll = async () => {
  const [dates] = await mysqlServer.execute('SELECT * FROM Nimbus.Dates');
  return dates;
};

const getById = async (id) => {
  const [dates] = await mysqlServer.execute(
    'SELECT * FROM Nimbus.Dates WHERE date_id = ?', [id],
  );
  return dates[0];
};

module.exports = {
  create,
  getAll,
  getById,
};
