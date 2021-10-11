import React from "react";
import { render, screen } from "@testing-library/react";
import WithLoading from "../loaderHOC";
import ErrorBoundary from "../errorBoundary";

const Something = () => null;

test("should display Error in case a error thrown inside child comp", () => {
  
  const { getByText } = render(<ErrorBoundary><Something/></ErrorBoundary>)
  const loader = screen.findByTestId('err-boundary')
  expect(loader).toBeTruthy();
});
