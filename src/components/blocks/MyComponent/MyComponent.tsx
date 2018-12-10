import * as React from 'react';
const CSS = require('./MyComponent.css');

interface MyComponentProps {
    helloText: string;
}

export class MyComponent extends React.PureComponent<MyComponentProps> {
    render() {
        return <div className={CSS.myComponentClass}>{this.props.helloText}</div>;
    }
}