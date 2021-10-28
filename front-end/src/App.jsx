import React from 'react';
import DataProvider from './context/DataProvider';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <DataProvider>
      <LandingPage />
    </DataProvider>
  );
}

export default App;
