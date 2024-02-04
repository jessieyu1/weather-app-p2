import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import OtherCities from "./components/OtherCities";
import SearchBar from "./components/SearchBar";

const WeatherCard = () => (
    <div className="md:w-fit h-fit mx-auto rounded-3xl bg-white overflow-hidden shadow-blue-800 grid grid-cols-6 grid-rows-6" >
        <div className="row-span-6 col-span-2 m-6 rounded-3xl  relative" 
           style={{
            backgroundImage:
              "linear-gradient(152deg, #899bf0 1%, #3f55e4 54%, #3f55e4 96%)",
          }}
        >
       <CurrentCity />
       </div>
       <div className="row-span-3 col-span-4 border-8 m-6">
       <Forecast />
       </div>
       <div className="row-span-1 col-span-4 border-8 m-6">
       <SearchBar />
       </div>
       <div className="row-span-2 col-span-4 border-8 m-6">
       <OtherCities />
       </div>
    </div>
)

export default WeatherCard;