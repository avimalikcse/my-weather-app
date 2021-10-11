import React from "react";
import { render,screen } from "@testing-library/react";
import WeatherCard from "../WeatherCard";

test("it should render the card container", () => {

  const cardProps = {sessions:{'00:00:00':{main:{temp:1},weather:[{main:'clear',description:'clear'}]}}}  
  const { getByText } = render(<WeatherCard date='2021-10-11' onDateChange={()=>{}} tempUnit='C' weatherData={cardProps}></WeatherCard>);
  expect(getByText(/2021-10-11/i)).toBeInTheDocument();
});
