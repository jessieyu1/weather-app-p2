# STEPS

## 步骤一：

### 按照责任划分组件

#### 思路一
- App
    - WeatherCard
        - CurrentCity
            - Date
            - Name
            - Temperature
            - TemperatureRange
            - WeatherIcon
            - Meta
                - Humidity
                - Wind
                - AirQuality
                - Somatosensory
        - Forecast
            - DayOfWeek[]
                - Name
                - Date
                - WeatherIcon
                - TemperatureRange
        - SearchBar
            - Input
            - Button
        - OtherCities
            - City[]
                - WeatherIcon
                - Name
                - TemperatureRange

#### 思路二：
- App
    - WeatherCard
        - CurrentCity
            - Date
            - Name
            - Temperature
            - TemperatureRange
            - WeatherIcon
            - Meta
                - Humidity
                - Wind
                - AirQuality
                - Somatosensory
        - CityForecast
            - Forecast
                - DayOfWeek[]
                    - Name
                    - Date
                    - WeatherIcon
                    - TemperatureRange
            - SearchBar
                - Input
                - Button
            - OtherCities
                - City[]
                    - WeatherIcon
                    - Name
                    - TemperatureRange

### 相同名称的组件： 出现重名， 可能是通用组建， 可以抽离出来

- WeatherIcon
- TemperatureRange
- Name
- Date
- BackgroundImage   

### 全局 Assets

- fonts
- bg image


#### VS CODE 插件   

- Image preview
- Code Spell Checker