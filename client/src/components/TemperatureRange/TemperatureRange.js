const TemperatureRange = ({value, className, loading}) => ( 
        <div className={className}>
            {loading? "...loading": `${value}°`}
        </div>
     );
 
export default TemperatureRange;