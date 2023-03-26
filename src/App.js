import React,{useEffect} from 'react';
import Login from './components/Login';
import {reducerCases} from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import Spotify from './components/Spotify';

function App(props) {
  const[{token},dispatch]=useStateProvider();
  useEffect(()=>{
    const hash=window.location.hash;
    if(hash)
    {
      const token=hash.substring(1).split("&")[0].split("=")[1];
      dispatch({type:reducerCases.SET_Token,token});
    }
  } ,[token,dispatch]);
  return (
    <div>
    {
      token?<Spotify></Spotify>:<Login></Login>
    } 
    </div>
  );
}

export default App;