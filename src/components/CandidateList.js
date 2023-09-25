import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Spinner, Alert } from 'react-bootstrap';
import '../styles/Candidate.css';

function CandidateList({ onSelectCandidate }) {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        
        const remainingCandidates = response.data.slice(93);
        setCandidates(remainingCandidates);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
    onSelectCandidate(candidate);
  };

  if (loading) {
    return (
      <div className="candidate-list">
        <h2>Loading...</h2>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="candidate-list">
        <Alert variant="danger">
          Error fetching candidates: {error.message}
        </Alert>
      </div>
    );
  }

  if (candidates.length === 0) {
    return (
      <div className="candidate-list">
        <h2>Data not found</h2>
      </div>
    );
  }

  return (
    <div className="candidate-list">
      <h2>USERS LIST</h2>
      <ListGroup className="listing">
        {candidates.map(candidate => (
         <div className='items'>
         <ListGroup.Item
          className={`listDetail ${selectedCandidate && selectedCandidate.id === candidate.id ? 'active' : ''}`}
            key={candidate.id}
            onClick={() => handleCandidateClick(candidate)}
            active={selectedCandidate && selectedCandidate.id === candidate.id}
          >
            <img src={candidate.avatar} alt={candidate.profile.username} className="avatar" />
            <p>{candidate.profile.username}</p>
          </ListGroup.Item>
         </div>
        ))}
      </ListGroup>
    </div>
  );
}

export default CandidateList;
