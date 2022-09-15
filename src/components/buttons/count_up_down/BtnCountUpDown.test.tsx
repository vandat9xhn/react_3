import * as React from "react";
import { shallow } from "enzyme";

import BtnCountUpDown from "./BtnCountUpDown";

//
describe("", () => {
  test("", () => {
    const initialCount = 0;

    const Btn = shallow(
      <BtnCountUpDown initialCount={initialCount} is_up={true} />
    );
    // expect(Btn.find('btn')[0].text()).toEqual(`${initialCount}`);

    console.log(Btn.find("button"));

    Btn.simulate("click");
  });
});
