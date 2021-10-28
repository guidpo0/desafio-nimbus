const mysqlServer = require('../connections/mysqlServer');

const create = async ({ climateHour, climateRain, dateId }) => {
  const [{ insertId }] = await mysqlServer.execute(
    'INSERT INTO Nimbus.ClimateByHour (climate_hour, climate_rain, date_id) VALUES (?,?,?)',
    [climateHour, climateRain, dateId],
  );
  return { id: insertId };
};

const getAll = async () => {
  const [climates] = await mysqlServer.execute('SELECT * FROM Nimbus.ClimateByHour');
  return climates;
};

const getById = async (id) => {
  const [climates] = await mysqlServer.execute(
    'SELECT * FROM Nimbus.ClimateByHour WHERE climate_id = ?', [id],
  );
  return climates[0];
};

module.exports = {
  create,
  getAll,
  getById,
};
