import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSong, deleteSong } from '../actions';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';


// Define styled components outside the component function
const Container = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.ul`
  width: 300px;
  margin-bottom: 20px;
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  color: tomato;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: green;
  }
`;

export default function SongList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { songs, error } = useSelector(state => state.song);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  

  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);

  const handleDelete = id => {
    let ack = prompt("enter 1 for confirm or 0 to cancel");
    if (Number(ack)===1) {
        dispatch(deleteSong(id)); // Delete the song if the user confirms
    }
    else if(Number(ack)===0) {
        navigate('/'); // Navigate to another page if the user cancels
    }
    else ack = prompt("enter the correct value 1 for confirm or 0 to cancel");
};

  const handleUpdate = id => {
    navigate(`/update/${id}`);
  };
// Logic to paginate the data
// Logic to paginate the data
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = songs ? songs.slice(indexOfFirstItem, indexOfLastItem) : [];


// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    <Container>
      {error && <p>Error: {error.message}</p>}
      { currentItems.map((item, index) => (
        <Card key={item.id}>
          <p> {item.name}</p>
          <p> <img src={item.uri} alt='no img' width={250}/></p>
          <p>
            <audio controls>
           
            <source src={item.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          </p>
          <Button onClick={() => handleUpdate(item.id)}>Update</Button>
          <Button onClick={() => handleDelete(item.id)}>Delete</Button>
        </Card>
      ))}
    </Container>
   
    <div style={{textAlign: 'center', marginTop: '20px'}}>
    {Array.from({ length: Math.ceil(songs.length / itemsPerPage) }, (_, i) => (
      <Button key={i + 1} onClick={() => paginate(i + 1)}>
        {i + 1}
      </Button>
    ))}
  </div>
  </>
  );
}
