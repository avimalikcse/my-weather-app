import { mockAPIData, mockAPIDataProcessed } from "../../actions/weatherApp/mockData";
import { prepareWeatherData, convertTemperatureFromKelvin, formatDate, makeWeatherGraphData } from "../helper";



describe("helper functions", () => {
    it("should create an object of Date data from weatherData", () => {
        expect(prepareWeatherData(mockAPIData)).toMatchObject(
            mockAPIDataProcessed
        );
    });

    it("should show temperature in fahrenheit when units is in fahrenheit", () => {
        expect(convertTemperatureFromKelvin(280.07, "F")).toEqual("44.46");
    });

    it("should show temperature in celsius when units is in celsius", () => {
        expect(convertTemperatureFromKelvin(280.07, "C")).toEqual("6.92");
    });

    it("should show formatted date correctly", () => {
        expect(formatDate("2021-10-11 05:22:00")).toEqual("2021-10-11");
    });

});