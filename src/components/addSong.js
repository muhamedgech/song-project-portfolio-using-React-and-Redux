import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../actions';
import styled from '@emotion/styled';
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

// AddSong component
function AddSong() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  
  const { songs} = useSelector(state => state.song);
  const lastIndex = songs.length - 1; // Index of the last item
  const lastSong = songs[lastIndex];
  // Last song object
  const newId = Number(lastSong.id) + 1;
 
  const [formData, setFormData] = useState({ id: String(newId), name: '', uri: '', url: '', year: '' });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
   

    if (!formData.name || !formData.uri || !formData.url || !formData.year) {
      alert("Enter form value");
      
    }
else{
    try {
      await dispatch(addSong(formData));
      setFormData({ id:String(newId), name: '', uri: '', url: '', year: '' });
      navigate(`/`);
    } catch (error) {
      console.error(error);
      // Handle error, if any
    }
  }};

  return (
    <Container>
      <Heading>Song Registration</Heading>
      <Form onSubmit={handleSubmit}>
        <label>Song Id:</label>
        <Input type='text' name='id' value={String(newId)} onChange={handleInputChange} />
        <label>Song Title:</label>
        <Input type='text' name='name' value={formData.name} onChange={handleInputChange} />
        <label>Song URI:</label>
        <Input type='text' name='uri' value={formData.uri} onChange={handleInputChange} />
        <label>Song URL:</label>
        <Input type='text' name='url' value={formData.url} onChange={handleInputChange} />
        <label>Song year:</label>
        <Input type='number' name='year' value={formData.year} onChange={handleInputChange} />
        <Button type="submit">ADD SONG</Button>
      </Form>
    </Container>
  );
}

export default AddSong;
