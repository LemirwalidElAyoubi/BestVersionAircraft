
import React, { useState } from 'react';
import './App.css';
import Buttons from './frontend/components/Buttons';
import SheetsList from './frontend/components/SheetsList';
import AircraftList from './frontend/components/AircraftList';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [selectedSheet, setSelectedSheet] = useState(null);

  const handleAircraftSelect = (aircraft) => {
    setSelectedAircraft(aircraft);
    setSelectedSheet(null); // Reset selected sheet when aircraft changes
  };

  const handleSheetSelect = (sheet) => {
    setSelectedSheet(sheet);
  };

  const handleBack = () => {
    setSelectedSheet(null);
  };

  return (
    <ChakraProvider>
      <div className="app-container">
        <div className="sidebar">
          <h2 className="project-title">Avianalysis BFL Converter</h2>
          {!selectedAircraft ? (
            <AircraftList onAircraftSelect={handleAircraftSelect} />
          ) : (
            <div className="buttons-and-sheets">
              <Buttons />
              <SheetsList
                aircraft={selectedAircraft}
                onSheetSelect={handleSheetSelect}
              />
            </div>
          )}
          {selectedSheet && (
            <div className="sheet-details">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;

/*
import React, { useState } from 'react';
import './App.css';
import Buttons from './frontend/components/Buttons';
import SheetsList from './frontend/components/SheetsList';
import AircraftList from './frontend/components/AircraftList';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [selectedSheet, setSelectedSheet] = useState(null);

  const handleAircraftSelect = (aircraft) => {
    setSelectedAircraft(aircraft);
    setSelectedSheet(null); // Reset selected sheet when aircraft changes
  };

  const handleSheetSelect = (sheet) => {
    setSelectedSheet(sheet);
  };

  const handleBack = () => {
    setSelectedAircraft(null);
    setSelectedSheet(null);
  };

  return (
    <ChakraProvider>
      <div className="app-container">
        <div className="sidebar">
          <h2 className="project-title">Avianalysis BFL Converter</h2>
          {!selectedAircraft && (
        
            <AircraftList onAircraftSelect={handleAircraftSelect} />
          )}
          {selectedAircraft && !selectedSheet && (
            <div className="buttons-and-sheets">
              <Buttons />
              <SheetsList
                aircraft={selectedAircraft}
                onSheetSelect={handleSheetSelect}
              />
            </div>
          )}
          {selectedSheet && (
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
          )}
        </div>
        
      </div>
    </ChakraProvider>
  );
}

export default App;


/*
import React, { useState } from 'react';
import './App.css';
import Buttons from './frontend/components/Buttons';
import SheetsList from './frontend/components/SheetsList';
import AircraftList from './frontend/components/AircraftList';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const handleAircraftSelect = (aircraft) => {
    setSelectedAircraft(aircraft);
  };

  return (
    <ChakraProvider>
      <div className="sidebar">
        <h2 className="project-title">Avianalysis BFL Converter</h2>
        <Buttons />
        {selectedAircraft && <SheetsList aircraft={selectedAircraft} />}
        <AircraftList onAircraftSelect={handleAircraftSelect} />
        
      </div>
    </ChakraProvider>
  );
}

export default App;


/*import React, { useState } from 'react';
import './App.css';
import Buttons from './frontend/components/Buttons';
import SheetsList from './frontend/components/SheetsList';
import AircraftList from './frontend/components/AircraftList';

function App() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const handleAircraftClick = (aircraft) => {
    setSelectedAircraft(aircraft);
  };

  return (
    <div className="App">
      <AircraftList
        selectedAircraft={selectedAircraft}
        handleAircraftClick={handleAircraftClick}
      />
      <SheetsList selectedAircraft={selectedAircraft} />
    </div>
  );
}

export default App;*/


/*
import React, { useState } from 'react';
import './App.css';
import Buttons from './frontend/components/Buttons';
import SheetsList from './frontend/components/SheetsList';
import AircraftList from './frontend/components/AircraftList';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const handleAircraftClick = (aircraft) => {
    setSelectedAircraft(aircraft);
  };

  return (
    <ChakraProvider>
      <div className="sidebar">
        <div className="sheets-list">
          <h2 className="sheets-list-title">Sheets List:</h2>
          <SheetsList selectedAircraft={selectedAircraft} />
        </div>
        <div className="aircraft-list">
          <h2 className="aircraft-list-title">Aircraft List:</h2>
          <AircraftList handleAircraftClick={handleAircraftClick} />
        </div>
      </div>
      <div className="main-content">
        <h2 className="project-title">Avianalysis BFL Converter</h2>
        <Buttons />
      </div>
    </ChakraProvider>
  );
}

export default App;

*/

/*
import React from 'react';
import './App.css';
import Buttons from './frontend/components/Buttons';
import SheetsList from './frontend/components/SheetsList';
import AircraftList from './frontend/components/AircraftList';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="sidebar">
        <div className="sidebar">
          <h2 className="project-title">Avianalysis BFL Converter</h2>
          
          <Buttons />
          <SheetsList />
          <AircraftList />
        </div>
      </div>
      
    </ChakraProvider>
  );
}

export default App;


*/