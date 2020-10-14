import React, { useState, useEffect } from 'react'; //usestate, useEffect} these are hooks used for state management and data loading   
import './App.css';                       //useeffect is a hook tht helps in data fetching

function App() {
  const[data,setData] = useState ([])   //setData is function for updating state data and usestate takes initiate state
  useEffect(()=>{                       //async is added await that it will wait for data 
    const fetchData =async()=>{
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        response => response.json()
      )
      setData(result);
    }
    fetchData();

  },[]) ; // we only want to fetch data when the componnt mounts so we added and empty [] after use effect
 
  return (
    <div className="App">
      <header>
      <h1>Art G Videos</h1>
      </header>  
      {/* add key value to div so every time we render dynamic children
      npm install serve "serve helps us with setting up a light weight server"
       */}
      {data.map(video =>(
        <div key={video.id}>      
          <h2>{video.name}</h2>
          <video height={200} controls src = {video.video_url}/>
        </div>
      )  
        )}
    </div>

    //Google Lighthouse is an open-source, automated tool for measuring the quality of web pages.
    // It can be run against any web page, public or requiring authentication.
  );
}

export default App;
//set data is function for updating state data