import weatherReducer, { initialState } from "../weatherReducer";

import { FETCHING_WEATHER_DATA, WEATHER_DATA_RECEIVED, ERROR_IN_WEATHER_REQUEST, CHANGE_DATE } from "../../../actions/weatherApp/weatherActionConst";

describe("weatherForecast reducer", () => {
    it("should return the initial state", () => {
        expect(weatherReducer(undefined, {})).toMatchObject(initialState);
    });

    it("should handle FETCHING_WEATHER_DATA", () => {
        expect(
            weatherReducer(undefined, {
                type: FETCHING_WEATHER_DATA,
            })
        ).toMatchObject({...initialState });
    });

    it("should handle WEATHER_DATA_RECEIVED", () => {
        expect(
            weatherReducer(undefined, {
                type: WEATHER_DATA_RECEIVED,
                payload: { data: "Dummy weather data" },
            })
        ).toMatchObject({
            ...initialState,
            loading: false,
            weatherData: "Dummy weather data",
        });
    });

    const error = new Error('Dum Error')
    it("should handle ERROR_IN_WEATHER_REQUEST", () => {
        expect(
            weatherReducer(undefined, {
                type: ERROR_IN_WEATHER_REQUEST,
                payload: error,
            })
        ).toMatchObject({
            ...initialState,
            isErrorOut: true,
            loading: false,
            error: error
        });
    });



    it("should handle DATE_CHANGE", () => {
        expect(
            weatherReducer(undefined, {
                type: CHANGE_DATE,
                payload: { date: "2020-09-18" },
            })
        ).toMatchObject({
            ...initialState,
            activeDate: "2020-09-18",
        });
    });
});