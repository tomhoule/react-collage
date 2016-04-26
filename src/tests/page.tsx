import * as React from "react";
import { CollagePage } from "../Page";
import * as rt from "react-addons-test-utils";
import { expect } from "chai";

describe("Page component tests", () => {

    it("renders", () => {
        const component = rt.renderIntoDocument(
            <CollagePage
                dimensions= "a4"
                orientation="portrait"
            />
        );
        expect(component).to.exist;
    });

});
