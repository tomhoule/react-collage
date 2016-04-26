import * as React from "react";
import { CollageImage } from "../Image";
import * as rt from "react-addons-test-utils";
import { expect } from "chai";

describe("Image component tests", () => {

    it("renders", () => {
        const component = rt.renderIntoDocument(
            <CollageImage
                src={null}
            />);
        expect(component).to.exist;
    });

});
