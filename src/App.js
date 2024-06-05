
import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddSong from './components/addSong';
import Navbar from './components/navbar';
import Footer from './components/footer';
import UpdateSong from './components/updateSong';
import SearchSong from './components/searchSong';
import SongList from './components/songList';

//import SearchBar from './components/searchBar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <main>
    <Routes>
     <Route path="/" element={<SongList/>}/>
     
      
      <Route path="/addSong" element={<AddSong/>}/>
      <Route path="/update/:id" element={<UpdateSong/>}/>
      <Route path="/searchSong/:searchTerm" element={<SearchSong/>}/>
      


    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
