import React from 'react';
import  { useState,useEffect} from 'react';
import './text.css';
import humidity from './humidity.png'
import location from './placeholder.png';
import temp from './temp.png';
import thermometer from './thermometer.png';
import storm from './storm.png';
import search1 from './search.png';
import axios from 'axios';

function Text() {
  let [data, setdata] = useState([]);
 let [search,setsearch]=useState(['hyderabad'])
  const [city,setcity] = useState([]);
  const [h,seth]=useState(['Hyderabad']);
  const [wind,setwind]=useState([0]);
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=924148dc0a80988e2ec4712fcf81d011&units=metric`;
  
    useEffect(()=>{
      console.log("response is generated");

    axios.get(url)
      .then(response => {
        console.log(response.data.main);
        console.log(response.data)
        setdata(response.data.main)
        seth(response.data.name)
        setwind(response.data.wind)
      });
    setcity('');

    },[search])
  
  

  return (
    <>
    <label for="language"><h1>SELECT YOUR LOCATION</h1></label>
    <div class="search">
   
<input type="text" placeholder="search your location" onChange={e=>setsearch(e.target.value)}/>
    

   
    search
    
    </div>
    <div class="info">
    <div class="container text-center">
  <div div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    
    
    <div class="col" id="one">
      <div class="p-3">Temp
      <br></br>
      <img src={temp} class="two"/>
      {data.temp}*C</div>
    </div>
    <div class="col" id="one">
      <div class="p-3">Pressure
      <br></br>
      <img src={thermometer} class="two"/>
      {data.pressure}Pa</div>
    </div>
    <div class="col" id="one">
      <div class="p-3">Humidity
    <br></br>
    <img src={humidity} class="two"/>
    {data.humidity}</div>
    </div>
    <div class="col" id="one">
      <div class="p-3">Wind
    <br></br>
    <img src={storm} class="two"/>
  {wind.speed}</div>
  
    </div>
   
  
    <div class="name">
      <img src={location} class="location"/>
      {search}</div>
    {/*
    <div class="temp"  id="one">
      Temp
      <br></br>
      <img src={temp} class="two"/>
      {data.temp}*F</div>
    <div class="pressure" id="one">
      Pressure
      <br></br>
      <img src={thermometer} class="two"/>
      {data.pressure}Pa</div>
  <div class="humidity" id="one">
    Humidity
    <br></br>
    <img src={humidity} class="two"/>
    {data.humidity}</div>
  <div class="wind" id="one">
    Wind Speed
    <br></br>
    <img src={storm} class="two"/>
  {wind.speed}</div>*/}</div>
  </div>
  </div>

    
    
    
  
  </>
  )

}
export default Text;