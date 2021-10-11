import { Container, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WithLoading from "../../components/hoc/loaderHOC";
import SliderWrapper from "../../components/shared/sliderWrapper";
import Graph from "../../components/shared/graph";
import WeatherCard from "./WeatherCard";
import { useWeatherHook } from "./hooks";
import { getInitialSlide, makeWeatherGraphData } from "../../utils/helper";

export default function WeatherContainer() {
  const [tempUnit, setTempUnit] = useState("C");

  const { dispatchGetWeatherData, dispatchChangeDate } = useWeatherHook();

  // get data from redux store
  const {
    city,
    loading,
    isErrorOut,
    error,
    weatherData,
    activeDate,
  } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatchGetWeatherData(city); // dispatch action to load Weather data from API
  }, [dispatchGetWeatherData, city]);

  useEffect(() => {
    if (isErrorOut) throw error;
  }, [isErrorOut, error]);

  const mainContent = () => {
    return (
      <Container className="weather_container">
        <RadioGroup
          row
          aria-label="Unit"
          onChange={(e) => setTempUnit(e.target.value)}
          value={tempUnit}
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="C" control={<Radio />} label="°C" />
          <FormControlLabel value="F" control={<Radio />} label="°F" />
        </RadioGroup>
        <SliderWrapper
          title={`Weather for next 5 days in ${city}`}
          initialSlide={getInitialSlide(activeDate, weatherData)}
        >
          {/* loop into the dates  */}
          {Object.keys(weatherData).map((date) => (
            <WeatherCard
              key={date}
              weatherData={weatherData[date]}
              date={date}
              onDateChange={dispatchChangeDate}
              activeDate={activeDate}
              tempUnit={tempUnit}
            ></WeatherCard>
          ))}
        </SliderWrapper>
        
        {/* Graph Component  */}
        <Graph
          graphData={makeWeatherGraphData(
            weatherData[activeDate].sessions,
            tempUnit
          )}
        />
      </Container>
    );
  };

  const WithLoader = WithLoading(mainContent);
  return <WithLoader isLoading={loading}></WithLoader>;
}
