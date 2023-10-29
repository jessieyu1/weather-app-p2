import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import OtherCities from "./components/OtherCities";
import SearchBar from "./components/SearchBar";

const WeatherCard = () => (
    <div className="w-4/5 h-4/5 mx-auto rounded-3xl bg-white overflow-hidden shadow-blue-800 grid grid-cols-6 grid-rows-6 gap-4" >
        <div className="row-span-6 col-span-2">
       <CurrentCity />
       </div>
       <div className="row-span-3 col-span-4">
       <Forecast />
       </div>
       <div className="row-span-1 col-span-4">
       <SearchBar />
       </div>
       <div className="row-span-2 col-span-4">
       <OtherCities />
       </div>
    </div>
)

export default WeatherCard;