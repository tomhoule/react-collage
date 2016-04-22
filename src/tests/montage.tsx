import * as React from "react";
import { Montage } from "../Montage";
import * as rt from "react-addons-test-utils";
import { expect } from "chai";

describe("Montage component tests", () => {

    it("renders", () => {
        const component = rt.renderIntoDocument(<Montage />);
        expect(component).to.exist;
    });

});
