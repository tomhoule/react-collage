import * as React from "react";
import { Component, ReactChildren } from "react";

interface IProps {
    children?: ReactChildren;
    dimensions: "a3"|"a4"|"usletter";
    orientation: "portrait"|"landscape";
}

export class CollagePage extends Component<IProps, {}> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
