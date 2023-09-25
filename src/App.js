import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CandidateList from './components/CandidateList';
import CandidateDetails from './components/CandidateDetails';
function App() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8" id="list">
            <CandidateList onSelectCandidate={setSelectedCandidate} />
          </div>
          <div className="col-3" id="detail">
            <CandidateDetails candidate={selectedCandidate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
