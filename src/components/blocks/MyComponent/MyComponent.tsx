import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../../store/store';
import { makeNiceAction } from '../../../store/niceStore/niceActions';
import { makeLovelyAction } from '../../../store/lovelyStore/lovelyActions';
const CSS = require('./MyComponent.css');

interface MyComponentOwnProps {
    helloText: string;
}

interface MyComponentPropsFromState {
    lastNiceActionContent: string;
    lastLovelyActionContent: string;
}

interface MyComponentDispatchProps {
    makeLovelyAction(content?: string): void;
    makeNiceAction(content?: string): void;
}

type MyComponentProps = MyComponentOwnProps & MyComponentPropsFromState & MyComponentDispatchProps;

const mapStateToProps = (state: GlobalState): MyComponentPropsFromState => {
    return {
        lastNiceActionContent: state.niceStore.lastNiceActionContent,
        lastLovelyActionContent: state.lovelyStore.lastLovelyActionContent,
    };
};

const mapDispatchToProps = (dispatch): MyComponentDispatchProps => {
    return {
        makeNiceAction: (text: string) => dispatch(makeNiceAction(text)),
        makeLovelyAction: (text: string) => dispatch(makeLovelyAction(text)),
    };
};

class MyComponentView extends React.PureComponent<MyComponentProps> {
    render() {
        return <>
            <div className={CSS.myComponentClass}>{this.props.helloText}</div>
            <br/>
            <button type={'button'} onClick={() => this.props.makeNiceAction(this.props.helloText)}>click me to emit NICE action!</button>
            <br/>
            <br/>
            <button type={'button'} onClick={() => this.props.makeLovelyAction(this.props.helloText)}>click me to emit LOVELY action!</button>
            <p>last NICE action content: {this.props.lastNiceActionContent}</p>
            <p>last LOVELY action content: {this.props.lastLovelyActionContent}</p>
        </>
    }
}

export const MyComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponentView);