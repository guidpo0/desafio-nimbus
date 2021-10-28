const mysqlServer = require('../connections/mysqlServer');

const create = async ({ districtName, state }) => {
  const xablau = mysqlServer.execute(
    'INSERT INTO Nimbus.Districts (district_name, state) VALUES (?,?)',
    [districtName, state],
  );
  console.log(0);
  return xablau;
};

const getAll = async () => (mysqlServer.execute('SELECT * FROM Nimbus.Districts'));

const getById = async (id) => (
  mysqlServer.execute('SELECT * FROM Nimbus.Districts WHERE date_id = ?', [id])
);

module.exports = {
  create,
  getAll,
  getById,
};
