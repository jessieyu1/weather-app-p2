import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import OtherCities from "./components/OtherCities";
import SearchBar from "./components/SearchBar";

const WeatherCard = () => (
    <div className="w-4/5 h-4/5 mx-auto rounded-3xl bg-white overflow-hidden" >
       <CurrentCity />
       <Forecast />
       <SearchBar />
       <OtherCities />
    </div>
)

export default WeatherCard;