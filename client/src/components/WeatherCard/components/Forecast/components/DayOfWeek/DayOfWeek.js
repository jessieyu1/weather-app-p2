import React from 'react'
import WeatherIcon from '../../../../../WeatherIcon'
import TemperatureRange from '../../../../../TemperatureRange'
import Date from '../../../../../Date'
import Name from '../../../../../Name'

const DayOfWeek = ({nameValue, dateValue, tempValue, imageUrl, loading}) => {
  return (
    <div className='flex flex-col items-center'>
      <Name value ={nameValue} className='font-bold  text-xl'/>
      <Date  value={dateValue}/>
      <WeatherIcon imageUrl={imageUrl}/>
      <TemperatureRange value={tempValue} loading={loading}/>
    </div>
  )
}

export default DayOfWeek
