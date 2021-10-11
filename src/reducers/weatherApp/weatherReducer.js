import { FETCHING_WEATHER_DATA, WEATHER_DATA_RECEIVED, ERROR_IN_WEATHER_REQUEST, CHANGE_DATE } from "../../actions/weatherApp/weatherActionConst";
import { formatDate } from "../../utils/helper";


/**
 * Reducer to manage store for weather feature 
 */
export const initialState = {
    city: 'Munich',
    loading: true,
    isErrorOut: false,
    error: null,
    weatherData: {},
    activeDate: formatDate(new Date())
};
export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_WEATHER_DATA:
            return {
                ...state,
                loading: true,
                isErrorOut: false,
                error: null
            }
        case WEATHER_DATA_RECEIVED:
            return {
                ...state,
                loading: false,
                weatherData: action.payload.data
            }
        case ERROR_IN_WEATHER_REQUEST:
            return {
                ...state,
                loading: false,
                isErrorOut: true,
                error: action.payload
            }
        case CHANGE_DATE:
            return {
                ...state,
                activeDate: action.payload.date
            }
        default:
            return state;
    }
}