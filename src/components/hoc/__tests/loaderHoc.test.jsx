import React from "react";
import { render,screen } from "@testing-library/react";
import WithLoading from "../loaderHOC";


test("It should check if loader HOC display spinner", () => {
  const WithLoad = WithLoading('') 
  render(<WithLoad isLoading={true}></WithLoad>);
  const loader = screen.getByTestId('loader')
  expect(loader).toBeTruthy();

});
