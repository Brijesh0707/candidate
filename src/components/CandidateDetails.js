import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/CandidateDetail.css';

function CandidateDetails({ candidate }) {
  if (!candidate) {
    return (
      <div className="candidate-details">
        <h2>Select a candidate to view details</h2>
      </div>
    );
  }

  return (
    <div className="candidate-details">
      <h2>USER DETAILS</h2>
      <Card className='cards'>
        <Card.Img variant="top" src={candidate.avatar} alt={candidate.profile.username} className='image' />
        <Card.Body>
          <Card.Title className='username'>@{candidate.profile.username}</Card.Title>
          <div className='desc'>
            <p>{candidate.Bio}</p>
          </div>
          <Card.Text>
          <h6 className='f'>Full Name</h6>
         <div className='name'>
          <p> {`${candidate.profile.firstName} ${candidate.profile.lastName}`}</p>
         </div>
            <br />
            <h6 className='j'>Job Title</h6>
            <div className='job'>
              <p>{candidate.jobTitle}</p>
            </div>
              <h6 className='em'>Email</h6>
              <div className='email'>
                <p>   {candidate.profile.email}</p>
              </div>
            <br />
          
            
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CandidateDetails;
