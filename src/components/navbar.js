// Import statements...
import { Link, useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import React, { useState } from 'react';
import logo from '../assets/Addissoftware-logo.svg';

// Define a styled component for list items
const StyledList = styled.ul`
    list-style: none;
    justify-content: center;
    padding: 0;
    display: flex; /* Use flexbox for horizontal alignment */
    flex-wrap: wrap; /* Allow items to wrap to the next line if needed */
`;
const StyledListItem = styled.li`
    padding: 12px;
    justify-content: left;
    background-color: #f0f0f0;
    color: #333;
    font-size: 30px;
    border-radius: 8px;
    margin-right: 10px; /* Add space between list items */
    margin-bottom: 10px; /* Add space between rows */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;
const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useNavigate();
  
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Reset the searchTerm after the search button is clicked
    if (!searchTerm) {
      alert('No search term provided');
      history(`/`);
                     }
    else{ history(`/searchSong/${String(searchTerm)}`);
    setSearchTerm('');}
  };

  return (
    <nav>
      <StyledList>
        <div>
          <img src={logo} alt="Addissoftware Logo" />
          
        </div>
        <StyledListItem>
          <Link to="/">Home</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/addSong">Add Song</Link>
        </StyledListItem>
        <StyledListItem>
        <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          
            {/* Call handleSearch when the button is clicked */}
            <Button onClick={handleSearch}>Search</Button>
    
        </StyledListItem>
      </StyledList>
    </nav>
  );
}

