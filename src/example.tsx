/// <reference path="../typings/browser.d.ts" />
import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";

class Page extends Component<{}, {}> {
    render() {
        return (
            <div>Hello</div>
        );
    }
}

render(<Page />,
       document.getElementById("montage-container"));
