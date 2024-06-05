import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { updateSong } from '../actions'; // Import the updateSong action from your actions file
import { useParams, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { songs } = useSelector(state => state.song);
  const [foundSong, setFoundSong] = useState(null);

  useEffect(() => {
    if (!songs || songs.length === 0 || !id) {
      // Handle empty or invalid songs array or id
      console.log("Invalid songs array or id.");
      return;
    }

    const songMap = {};
    // Populate songMap
    songs.forEach(song => {
      songMap[song.id] = song;
    });

    // Parse id string to integer
    const parsedSongId = parseInt(id, 10);

    // Check if parsedSongId exists in songMap
    const usong = songMap.hasOwnProperty(parsedSongId) ? songMap[parsedSongId] : null;

    // Set foundSong state
    setFoundSong(usong);
  }, [songs, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoundSong({ ...foundSong, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateSong(foundSong)); // Dispatch the updateSong action with formData
      navigate('/');
      // Close the edit form after successful update
    } catch (error) {
      console.error('Error updating song:', error);
      // Handle the error, such as displaying an error message to the user
      // You can also choose to rollback any changes made during the update process
    }
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
