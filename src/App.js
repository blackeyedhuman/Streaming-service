import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'

function App(){
  return (
    <div className="App">
      <h1>Let's build the Netflix clone! :D</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      
    </div>
  );
}

export default App;
