import React from "react";
import { getAllByTestId, render,screen } from "@testing-library/react";
import WeatherContainer from "../WeatherContainer";
import { Provider } from "react-redux";
import { store } from "./../../../app/store";

test("it should render the weather Container", () => {

  const { getByTestId } = render(
    <Provider store={store}>
  <WeatherContainer/>
    </Provider>
  );
  expect(getByTestId('loader')).toBeTruthy();
  
  
});

