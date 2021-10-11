import React from "react";
import { render,screen } from "@testing-library/react";
import Graph from "../graph";

test("it should render Graph and check if value is displayed", () => {
  const props ={
      data:[{'mKey':'MyVal',y:2},{'mKey':1,y:3}],
      xDataKey:'mKey',
      yDaatKey:'y'
  }
  const { getByText } = render(<Graph graphData={props}></Graph>);
  expect(getByText(/MyVal/i)).toBeInTheDocument();

});
