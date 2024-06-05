import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { updateSong } from '../actions'; // Import the updateSong action from your actions file
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Styled components
const Container = styled.div`
  text-align: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const UpdateSong = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
const [foundSong, setFoundSong] = useState(null);
const { songs} = useSelector(state => state.song);
const navigate = useNavigate();
console.log("id:", id); // Check the value of id

const songMap = {};

useEffect(() => {
  if (!songs || songs.length === 0 || !id) {
    // Handle empty or invalid songs array or id
    console.log("Invalid songs array or id.");
    return;
  }

  // Populate songMap
  songs.forEach(song => {
    songMap[song.id] = song;
  });

  console.log("songMap:", songMap); // Log songMap to verify it's populated correctly

  // Parse id string to integer
  const parsedSongId = parseInt(id, 10);
  console.log("parsedSongId:", parsedSongId); // Log parsedSongId to verify it's correct

  // Check if parsedSongId exists in songMap
  const usong = songMap.hasOwnProperty(parsedSongId) ? songMap[parsedSongId] : null;
  console.log("usong:", usong); // Log usong to verify if the song was found

  // Set foundSong state
  setFoundSong(usong);
}, [songs, id,songMap]);

// Ensure foundSong state is correctly set
console.log("foundSong:", foundSong);
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoundSong({ ...foundSong, [name]: value });
  };
  
  const handleUpdate = async (e) => {
   
    try {
      await dispatch(updateSong(foundSong)); // Dispatch the updateSong action with formData
      navigate('/');
      // Close the edit form after successful update
  } catch (error) {
      console.error('Error updating song:', error);
      // Handle the error, such as displaying an error message to the user
      // You can also choose to rollback any changes made during the update process
  }
      // Handle error, if any
    
  };

  return (
    <Container>
      <Heading>Song Modification</Heading>
      <Form onSubmit={handleUpdate}>
        <label htmlFor="id">Song id:</label>
        <Input type='text' id="id" name='id' value={foundSong?.id || ''} onChange={handleInputChange} />
        <label htmlFor="name">Song name:</label>
        <Input type='text' id="name" name='name' value={foundSong?.name || ''} onChange={handleInputChange} />
        <label htmlFor="uri">Song URI:</label>
        <Input type='text' id="uri" name='uri' value={foundSong?.uri || ''} onChange={handleInputChange} />
        <label htmlFor="url">Song URL:</label>
        <Input type='text' id="url" name='url' value={foundSong?.url || ''} onChange={handleInputChange} />
        <label htmlFor="year">Song year:</label>
        <Input type='number' id="year" name='year' value={foundSong?.year || ''} onChange={handleInputChange} />
        <Button type="submit">Update Song</Button>
      </Form>
    </Container>
  );
};

export default UpdateSong;
