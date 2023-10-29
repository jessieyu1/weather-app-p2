import React from 'react'
import WeatherIcon from '../../../../../WeatherIcon'
import TemperatureRange from '../../../../../TemperatureRange'
import Date from '../../../../../Date'
import Name from '../../../../../Name'

const DayOfWeek = () => {
  return (
    <div>
      <Name />
      <Date />
      <WeatherIcon />
      <TemperatureRange />
    </div>
  )
}

export default DayOfWeek
