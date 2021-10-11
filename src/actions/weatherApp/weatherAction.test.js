import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";


import {
    getWeatherDataAction,
    changeDate
} from "./weatherAction";
import {
    FETCHING_WEATHER_DATA,
    WEATHER_DATA_RECEIVED,
    ERROR_IN_WEATHER_REQUEST,
    CHANGE_DATE
} from "./weatherActionConst";

import { OPEN_WEATHER_API_KEY } from "../../utils/consts";
import { mockAPIData } from "./mockData";
import { prepareWeatherData } from "../../utils/helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



describe("weatherForecast actions", () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });


    it("It Should set An Error in case API is not reachable ", () => {
        const city = "Munich";
        const openWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${OPEN_WEATHER_API_KEY}&cnt=40`;
        fetchMock.getOnce(openWeatherAPI, {
            status: 400,
            body: JSON.stringify('error'),
        });

        const expectedActions = [
            { type: FETCHING_WEATHER_DATA },
            {
                type: ERROR_IN_WEATHER_REQUEST,
                payload: new Error("Connection Issue"),
            },
        ];
        const store = mockStore({ weather: {} });
        return store.dispatch(getWeatherDataAction(city)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("Should Check Data Recieved Action dispatched when API response is Ok", () => {
        const city = "Munich";
        const openWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${OPEN_WEATHER_API_KEY}&cnt=40`;
        fetchMock.getOnce(openWeatherAPI, {
            status: 200,
            body: mockAPIData,
        });

        const expectedActions = [
            { type: FETCHING_WEATHER_DATA },
            {
                type: WEATHER_DATA_RECEIVED,
                payload: { data: prepareWeatherData(mockAPIData) },
            },
        ];

        const store = mockStore({
            weatherForecast: {},
        });

        return store.dispatch(getWeatherDataAction(city)).then(() => {
            expect(store.getActions()).toMatchObject(expectedActions);
        });
    });


    it("It should create an action to change date", () => {
        const date = "2021-10-17";
        const expectedAction = {
            type: CHANGE_DATE,
            payload: { date }
        };
        expect(changeDate(date)).toEqual(expectedAction);
    });
});