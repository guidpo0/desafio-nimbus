import React from 'react';
import PropTypes from 'prop-types';
import './ForecastCard.css';

function ForecastCard({ forecast, date }) {
  const {
    climate_hour: hour,
    climate_rain: rain,
  } = forecast;

  function formatRain(value) {
    if (value < 0.2) return 'Sem Chuva';
    if (value <= 5) return 'Chuva Fraca';
    if (value <= 25) return 'Chuva Moderada';
    return 'Chuva Forte';
  }

  function rainStyle(value) {
    if (value < 0.2) return { color: 'green' };
    if (value <= 5) return { color: 'blue' };
    if (value <= 25) return { color: 'orange' };
    return { color: 'red' };
  }

  return (
    <div className="card-container">
      <p>
        {date}
        {' '}
        -
        {' '}
        {hour}
        h
      </p>
      <h3 style={rainStyle(rain)}>{formatRain(rain)}</h3>
    </div>
  );
}

ForecastCard.propTypes = {
  forecast: PropTypes.shape({
    climate_hour: PropTypes.string,
    climate_rain: PropTypes.string,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default ForecastCard;
