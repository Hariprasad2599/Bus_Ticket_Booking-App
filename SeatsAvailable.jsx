import React, { useState } from 'react';
import styled from 'styled-components';
import { Buses } from '../../utils';

const Container = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #ff6e7f, #bfe9ff);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
`;

const BusCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const BusName = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Details = styled.div`
  margin-bottom: 10px;
  color: #666;
`;

const AvailableSeats = styled.div`
  font-weight: bold;
  color: #009933;
`;

const SeatButton = styled.button`
  background: ${({ isAvailable }) => (isAvailable ? '#009933' : '#ccc')};
  border: none;
  cursor: ${({ isAvailable }) => (isAvailable ? 'pointer' : 'not-allowed')};
  color: #fff;
  font-weight: bold;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    background: ${({ isAvailable }) => (isAvailable ? '#007a29' : '#ccc')};
  }
`;

const PaymentContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const PaymentButton = styled.button`
  background-color: #009933;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  &:hover {
    background-color: #007a29;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const SeatsAvailable = () => {
  const [selectedBusId, setSelectedBusId] = useState(null);

  const handleSeatClick = (busId) => {
    setSelectedBusId(busId === selectedBusId ? null : busId);
  };

  return (
    <Container>
      <CardContainer>
        {Buses.map((bus) => (
          <BusCard key={bus.id}>
            <BusName>{bus.name}</BusName>
            <Details>
              <div>Source: {bus.source}</div>
              <div>Destination: {bus.destination}</div>
              <div>Departure Time: {bus.departureTime}</div>
              <div>Arrival Time: {bus.arrivalTime}</div>
              <div>Price: {bus.price}</div>
            </Details>
            <AvailableSeats>
              {bus.availableSeats.map((seat) => (
                <SeatButton
                  key={seat}
                  isAvailable={bus.availableSeats.includes(seat)}
                  onClick={() => handleSeatClick(bus.id)}
                >
                  {seat}
                </SeatButton>
              ))}
            </AvailableSeats>
            {selectedBusId === bus.id && (
              <PaymentContainer>
                <CloseButton onClick={() => handleSeatClick(bus.id)}>X</CloseButton>
                <h2>Payment Options for {bus.name}</h2>
                <PaymentButton>Book Now</PaymentButton>
              </PaymentContainer>
            )}
          </BusCard>
        ))}
      </CardContainer>
    </Container>
  );
};

export default SeatsAvailable;
