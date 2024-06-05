import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import addSong from 'components/addSong';
import updateSong from 'components/updateSong';
import songList from 'components/songList';

const Router=()=>{
return(
    
    <div><header>
       <navBar/>
    </header>
        <main>
        <BrowserRouter>
            <Switch>   
            <Route exact path='/' Component={app}/>
            <Route exact path='/add' Component={addSong}/>
            <Route exact path='/update/:id' Component={updateSong}/>
            <Route exact path='/fetch' Component={songList}/>
            </Switch>
        </BrowserRouter>
    </main>
    <footer>
        <footer/>
    </footer>
    </div>
    
    );
    };