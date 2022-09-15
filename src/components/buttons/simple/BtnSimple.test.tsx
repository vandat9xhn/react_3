import * as React from "react";
import { shallow } from "enzyme";

import BtnSimple from "./BtnSimple";

//
describe("", () => {
  test("", () => {
    const text1 = "Ok";
    const Btn = shallow(<BtnSimple>{text1}</BtnSimple>);
    expect(Btn.text()).toEqual(text1);
  });
});
