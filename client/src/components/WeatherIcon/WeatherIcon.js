const WeatherIcon = ({imageUrl, alt='this is a weather icon', className}) => (
    <img
    src={imageUrl}
    alt={alt}
    className={className}
    />

  )

export default WeatherIcon
