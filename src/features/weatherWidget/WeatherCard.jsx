import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./weatherCard.module.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import suncon from "../../images/suncon.png";
import cloudcon from "../../images/cloudycon.png";
import lightraincon from "../../images/lightraincon.png";
import lightningcon from "../../images/lightningcon.png";
import heavyraincon from "../../images/heavyraincon.png";
import smokecon from "../../images/smokecon.png";
import { convertTemperatureFromKelvin } from "../../utils/helper";
import { DAY_MAPPING } from "../../utils/consts";

// Weather Icon Mapping
const weatherIcons = {
  Clouds: cloudcon,
  Clear: suncon,
  Drizzle: lightraincon,
  Rain: heavyraincon,
  Thunderstorm: lightningcon,
  Smoke: smokecon,
};

export default function WeatherCard(props) {
  const { date, weatherData, onDateChange, activeDate, tempUnit } = props;
  
  // get list of all sessions of the day for example, 12 PM, 3 PM etc
  const sessionKeys = Object.keys(weatherData.sessions);

  // get the Weather ForeCast of the first Session, 
  // @Todo: for today its fine if we use the first session available,
  // but for future date, we should display Avg Temp of the day
  const weatherForecast = weatherData.sessions[sessionKeys[0]];

  const {
    main: { temp },
    weather,
  } = weatherForecast; // de-structure the weather data to get Temp, Weather 
  
  const handleClick = useCallback(() => {
    onDateChange(date);
  }, [date, onDateChange]);


  return (
    <Card
      onClick={handleClick} // Change Active Date
      className={`cardMargin ${date === activeDate ? 'card-selected':''}`}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {/* Print day like Sunday, Monday */}
          {DAY_MAPPING[new Date(date).getDay()]}
        </Typography>
        <CardMedia
          className={styles.image}
          component="img"
          alt="Sun"
          image={weatherIcons[weather[0].main]}
        />
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          component="p"
        >
          {convertTemperatureFromKelvin(temp, tempUnit) }{`${tempUnit==='C' ? '°C' :'°F'}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {date}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
}

WeatherCard.propTypes = {
  date: PropTypes.string.isRequired,
  activeDate: PropTypes.string,
  weatherData: PropTypes.shape({
    sessions: PropTypes.object.isRequired,
  }),
  onDateChange: PropTypes.func.isRequired,
  tempUnit: PropTypes.string.isRequired,
};
