
import { deleteSong} from '../actions';
import styled from '@emotion/styled';
import { useNavigate} from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


export default function SearchSong() {
    const { searchTerm } = useParams();
    const [searchData, setSearchData] = useState([]);
   
    const { songs} = useSelector(state => state.song);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    
    useEffect(() => {
        if (!searchTerm) {
            alert('No search term provided');
            navigate(`/`);
        } else {
            // Filter songs based on the searchTerm
            const filteredSongs = songs.filter(item =>
                String(item.name).toLowerCase().includes(String(searchTerm).toLowerCase())
            );
            setSearchData(filteredSongs);
            
            // Check if filteredSongs is empty
            if (filteredSongs.length === 0) {
                alert("Item not found");
                navigate('/');
            }
        }
       
       
        
    }, [songs, searchTerm]);
    
    
    const handleDelete = (id) => {
        dispatch(deleteSong(id));
    }
    
    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    }
    
    // Rest of your component code...


    
    const Container = styled.div `
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;

    const Card = styled('ul')`
        width: 300px;
        margin-bottom: 20px;
        padding: 5px;
        background-color: #f0f0f0;
        border-radius: 2px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    `;

    const Button = styled.button `
        color: tomato;
        font-size: 20px; 
        font-weight: bold; 
        &:hover {
            background-color: green;
        }
    `;

    return (
        <Container>
            {searchData.map(item => (
                <Card key={item.id}>
                    <p> {item.name}</p>
                    <p> <img src={item.uri} alt='no img' width={250}/></p>
                    <p><audio controls>
           
                        <source src={item.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                        </audio></p>
                    <Button onClick={() => handleUpdate(item.id)}>Update</Button>
                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                </Card>
            ))}
        </Container>
    );
}
