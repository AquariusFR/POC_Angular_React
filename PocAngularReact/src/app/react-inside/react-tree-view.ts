import * as React from "react";
import * as ReactDOM from "react-dom";


export class ReactTreeView extends React.Component<undefined, undefined> {
    static render(title) {
        ReactDOM.render(React.createElement(ReactTreeView), document.getElementById('react-tree-view'));
        //return "<h1>Hello from " + title + "!</h1>";
    }

    render() {
        return React.createElement('div', { color: 'red' }, 'react-inside works!');
    }
}