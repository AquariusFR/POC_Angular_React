import * as React from "react";

export class ReactTreeView extends React.Component<undefined, undefined> {
    static render(title) {
        return "<h1>Hello from " + title + "!</h1>";
    }
}