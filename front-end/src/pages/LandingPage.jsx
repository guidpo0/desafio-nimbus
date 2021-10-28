import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/DataContext';
import Select from '../components/Select';
import ForeCast from '../components/ForecastCard';
import './LandingPage.css';

function LandingPage() {
  const { dates, climates, districts } = useContext(DataContext);
  const [selectedDistrictId, setSelectedDistrictId] = useState(1);
  const [selectableDates, setSelectableDates] = useState([]);
  const [selectedDateId, setSelectedDateId] = useState(1);
  const [climateData, setClimateData] = useState([]);

  const districtSelectData = districts.map(
    ({ district_name: name, district_id: id }) => ({ name, id }),
  );
  const dateSelectData = selectableDates.map(
    ({ date_name: name, date_id: id }) => ({ name, id }),
  );

  useEffect(() => {
    const datesAvailable = dates.filter(
      (date) => date.district_id === selectedDistrictId,
    );
    const currentClimate = climates.filter(
      ({ date_id: id }) => id === datesAvailable[0].date_id,
    );
    setSelectableDates(datesAvailable);
    setSelectedDateId(datesAvailable[0].date_id);
    setClimateData(currentClimate);
  }, [selectedDistrictId, dates, climates]);

  useEffect(() => {
    setSelectedDistrictId(districts[0].district_id);
  }, [districts]);

  useEffect(() => {
    const currentClimate = climates.filter(({ date_id: id }) => id === selectedDateId);
    setClimateData(currentClimate);
  }, [selectedDateId]);

  return (
    <div className="landing-page-container">
      <h1 className="landing-page-title">Previsão de Chuva Horária</h1>
      <Select
        config={{
          htmlFor: 'district',
          labelText: 'Selecione o bairro',
          selectedValue: districts.find(
            ({ district_id: id }) => id === selectedDistrictId,
          ).district_id,
          setSelectedValue: setSelectedDistrictId,
          data: districtSelectData,
        }}
      />
      <Select
        config={{
          htmlFor: 'date',
          labelText: 'Selecione a data',
          selectedValue: dates.find(
            ({ date_id: id }) => id === selectedDateId,
          ).date_id,
          setSelectedValue: setSelectedDateId,
          data: dateSelectData,
        }}
      />
      {
        climateData.map((climate) => (
          <ForeCast
            forecast={climate}
            date={dates.find(({ date_id: id }) => id === selectedDateId).date_name}
          />
        ))
      }
      <div className="subtitles-container">
        <h3 className="subtitles-title">Legenda</h3>
        <div>
          <p>
            <span style={{ color: 'green' }}>Sem Chuva</span>
            {' - < 0.2 mm'}
          </p>
          <p>
            <span style={{ color: 'blue' }}>Chuva Fraca</span>
            {' - 0.2 a 5.0 mm'}
          </p>
          <p>
            <span style={{ color: 'orange' }}>Chuva Moderada</span>
            {' - 5.1 a 25.0 mm'}
          </p>
          <p>
            <span style={{ color: 'red' }}>Chuva Forte</span>
            {' - > 25.0 mm'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
