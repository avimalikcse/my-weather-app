import callAPI from "../../utils/apiManager";
import apiManager from "../../utils/apiManager";
import { OPEN_WEATHER_API_KEY } from "../../utils/consts";
import { prepareWeatherData } from "../../utils/helper";
import { WEATHER_DATA_RECEIVED, FETCHING_WEATHER_DATA, ERROR_IN_WEATHER_REQUEST, CHANGE_DATE } from "./weatherActionConst";


// Action to to get Weather Data from OpenWeather API
export const getWeatherForecastsRequest = () => ({
    type: FETCHING_WEATHER_DATA,
});

// Action Dispatch when we get the response from OpenWeather 
export const getWeatherForecastSuccess = (weatherData) => ({
    type: WEATHER_DATA_RECEIVED,
    payload: { data: weatherData },
});


// function To call the Weather API
function getWeatherFromAPI(location = 'Munich') {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${OPEN_WEATHER_API_KEY}&cnt=40`;
    return apiManager.get(weatherAPI)
}


/**
 *  Function that Dispatch the getWeatherForecastsRequest Action
 * 
 * If We got 200 status Response, set data to store
 * Catch Any Error while Fetching Data and save Error Details 
 * 
 **/

export const getWeatherDataAction = (city) => async(dispatch) => {
    try {
        dispatch(getWeatherForecastsRequest());
        // call the Async Method of getting API data
        const data = await getWeatherFromAPI(city)
        const processedData = prepareWeatherData(data)
        dispatch(getWeatherForecastSuccess(processedData));
    } catch (err) {
        dispatch({
            type: ERROR_IN_WEATHER_REQUEST,
            payload: new Error("Connection Issue"),
        });
    }
};

/**
 *  Function that Dispatch the getWeatherForecastsRequest Action
 * 
 * If We got 200 status Response, set data to store
 * Catch Any Error while Fetching Data and save Error Details 
 * 
 **/

export const changeDate = (date) => ({
    type: CHANGE_DATE,
    payload: { date },
});