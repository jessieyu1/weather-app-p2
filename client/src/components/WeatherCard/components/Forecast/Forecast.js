import DayOfWeek from "./components/DayOfWeek";
import Sunny from '../../../WeatherIcon/assets/Sunny.png'
import cloudy from '../../../WeatherIcon/assets/Cloudy.png'
import rain from '../../../WeatherIcon/assets/Rain.png'
import cloudyDay from '../../../WeatherIcon/assets/Cloudy_day.png'
import { useState, useEffect } from "react";
import getForecast from "../../../../apis/getForecast";

const CITY = 'Sydney'
const Forecast = () => {
    const [tempRange, setTempRange] = useState('29-35');

    const [loading, setLoading] = useState(true)
    useEffect(() => {
            getForecast({CITY}).then((data) => {
                //console.log(Math.round(data.main.temp_max), Math.round(data.main.temp_min))
                setTempRange(`${Math.round(data.main.temp_min)} - ${Math.round(data.main.temp_max)}`)
                setLoading(false)
            })
    }, [])
return (
    <div className="flex flex-initial items-center p-4 space-x-6">
        <DayOfWeek nameValue='Monday' dateValue='24 July' imageUrl={Sunny} tempValue={tempRange} loading = {loading} />
        <DayOfWeek  nameValue='Tuesday' dateValue='25 July' imageUrl={cloudy} tempValue='23-25'/>
        <DayOfWeek  nameValue='Wednesday' dateValue='26 July'imageUrl={rain} tempValue='23-25'/>
        <DayOfWeek  nameValue='Thursday' dateValue='27 July'imageUrl={cloudyDay} tempValue='23-25'/>
    </div>
)

}

export default Forecast;