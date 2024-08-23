import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const[weatherInfo,setweatherInfo] = useState({
            city:"Ghaziabad",
            feelsLike: 37.27,
            temp    : 40.1,
            tempMax: 40.1,
            tempMin: 40.08,
            humidity: 11,
            weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }
    return(
      <div style={{textAlign: "center"}}>
        <h2>Weather App by Deepanshu Saini</h2>
        <SearchBox updateInfo= {updateInfo}/>
        <InfoBox info= {weatherInfo}/>
      </div>  
    )
}