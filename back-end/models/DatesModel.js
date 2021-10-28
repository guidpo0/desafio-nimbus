const mysqlServer = require('../connections/mysqlServer');

const create = async ({ dateName, districtId }) => {
  const xablau = mysqlServer.execute(
    'INSERT INTO Nimbus.Dates (date_name, district_id) VALUES (?,?)',
    [dateName, districtId],
  );
  console.log(0);
  return xablau;
};

const getAll = async () => (mysqlServer.execute('SELECT * FROM Nimbus.Dates'));

const getById = async (id) => (
  mysqlServer.execute('SELECT * FROM Nimbus.Dates WHERE date_id = ?', [id])
);

module.exports = {
  create,
  getAll,
  getById,
};
