import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import {useState} from "react";

export default function WeatherApp() {
   const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",   
    feelsLike : 18,
    humidity:42,
    temp:18.95,
    tempMax:19.05,
    tempMin: 18.95,
    weather: "haze",

   });

   let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
   }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Shivam</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}