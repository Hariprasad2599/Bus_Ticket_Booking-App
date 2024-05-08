
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const BusListContainer = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const BusItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BusDetails = styled.div`
  flex: 1;
`;

const BusInfo = styled.div`
  margin-bottom: 1rem;
`;

const BusTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #4285f4;
  border-color: #4285f4;
  color: #fff;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #357ae8;
    border-color: #357ae8;
  }
`;

const BusList = ({ Buses }) => {
  const navigate = useNavigate();

  return (
    <BusListContainer>
      <h2>Available Buses</h2>
      {Buses.map((bus) => (
        <BusItem key={bus.id}>
          <BusDetails>
            <BusInfo>
              <BusTitle>{bus.name}</BusTitle>
              <p>
                <strong>Source:</strong> {bus.source}
              </p>
              <p>
                <strong>Destination:</strong> {bus.destination}
              </p>
              <p>
                <strong>Departure Time:</strong> {bus.departureTime}
              </p>
              <p>
                <strong>Arrival Time:</strong> {bus.arrivalTime}
              </p>
              <p>
                <strong>Price:</strong> {bus.price}
              </p>
              <p>
                <strong>Type:</strong> {bus.busType}
              </p>
            </BusInfo>
          </BusDetails>
          <div>
            <StyledButton
              variant="success"
              onClick={() => navigate(`/bus/${bus.id}/seats`)}
            >
              Book Now
            </StyledButton>
            <h5>Available Seats: {bus.availableSeats.length}</h5>
          </div>
        </BusItem>
      ))}
    </BusListContainer>
  );
};

export default BusList;
