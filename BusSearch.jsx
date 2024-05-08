

import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { locations, Buses } from '../../utils';
import BusList from './BusList';


const Container = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #1a1a1a; /* Updated text color */
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const StyledSelect = styled(Form.Select)`
  width: 300px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #555;
  font-size: 16px;
`;

const StyledInput = styled(Form.Control)`
  width: 300px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #555;
  font-size: 16px;
`;

const SearchButton = styled(Button)`
  padding: 10px 20px;
  background-color: #4285f4;
  border-color: #4285f4;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff; /* Updated text color */

  &:hover {
    background-color: #357ae8;
    border-color: #357ae8;
  }
`;


const BusSearch = ({ searchState, setSearchState }) => {
    const [filteredBus, setFilteredBus] = useState(null);
    const [isSearchPerformed, setIsSearchPerformed] = useState(false);

    const handleSearch = () => {
        setIsSearchPerformed(true);
        setFilteredBus(
            Buses.filter(
                (data) =>
                    data.source === searchState.from &&
                    data.destination === searchState.to &&
                    data.availableDates.includes(searchState.date)
            )
        );
    };

    return (
        <Container>
            <h3><Title>Search For Buses</Title></h3>
            <div className="d-flex flex-column align-items-center">
                <StyledSelect
                    value={searchState.from}
                    onChange={(e) => setSearchState((prevState) => ({ ...prevState, from: e.target.value }))}
                >
                    {locations.map((data) => (
                        <option key={`${data}-source`} value={data}>
                            {data}
                        </option>
                    ))}
                </StyledSelect>
                <StyledSelect
                    value={searchState.to}
                    onChange={(e) => setSearchState((prevState) => ({ ...prevState, to: e.target.value }))}
                >
                    {locations.map((data) => (
                        <option key={`${data}-destination`} value={data}>
                            {data}
                        </option>
                    ))}
                </StyledSelect>
                <StyledInput
                    type="date"
                    value={searchState.date}
                    onChange={(e) => setSearchState((prevState) => ({ ...prevState, date: e.target.value }))}
                />
            </div>
            <SearchButton variant="primary" onClick={handleSearch}>
                Search
            </SearchButton>
            {isSearchPerformed && filteredBus && filteredBus?.length > 0 && <BusList Buses={filteredBus} />}
            {isSearchPerformed && (!filteredBus || filteredBus.length < 1) && <h3>No Buses Found</h3>}
        </Container>
    );
};

export default BusSearch;

