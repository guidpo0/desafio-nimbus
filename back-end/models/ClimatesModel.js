const mysqlServer = require('../connections/mysqlServer');

const create = async ({ climateHour, climateRain, dateId }) => {
  const xablau = mysqlServer.execute(
    'INSERT INTO Nimbus.ClimateByHour (climate_hour, climate_rain, date_id) VALUES (?,?,?)',
    [climateHour, climateRain, dateId],
  );
  console.log(0);
  return xablau;
};

const getAll = async () => (mysqlServer.execute('SELECT * FROM Nimbus.ClimateByHour'));

const getById = async (id) => (
  mysqlServer.execute('SELECT * FROM Nimbus.ClimateByHour WHERE climate_id = ?', [id])
);

module.exports = {
  create,
  getAll,
  getById,
};
