import React from "react";
import { render,screen } from "@testing-library/react";
import SliderWrapper from "../sliderWrapper";

test("should render Slider and check if all childs exists", () => {
  const { getAllByTestId } = render(<SliderWrapper>
          <div data-testid='sd'></div>
          <div data-testid='sd'></div>
          <div data-testid='sd'></div>
  </SliderWrapper>);
  expect(getAllByTestId('sd').length).toBe(3)
});
