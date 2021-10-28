import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import getClimates from '../services/getClimates';
import getDistricts from '../services/getDistricts';
import getDates from '../services/getDates';

function DataProvider({ children }) {
  const [dates, setDates] = useState([{ date_name: '', district_id: 1, date_id: 1 }]);
  const [districts, setDistricts] = useState([{ district_id: 1 }]);
  const [climates, setClimates] = useState([]);

  useEffect(() => {
    getClimates.all().then((climatesData) => setClimates(climatesData));
    getDistricts.all().then((districtsData) => setDistricts(districtsData));
    getDates.all().then((datesData) => setDates(datesData));
  }, []);

  const contextValue = {
    dates,
    setDates,
    districts,
    setDistricts,
    climates,
    setClimates,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DataProvider;
