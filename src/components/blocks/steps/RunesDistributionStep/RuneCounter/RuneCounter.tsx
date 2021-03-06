import * as React from "react";
const CSS = require('./RuneCounter.css');

interface RuneCounterProps {
    title: string,
    value: string,
    onIncrease(name: string): any,
    onReduce(name: string): any,
    canBeIncremented: boolean,
    canBeDecremented: boolean
}

export const RuneCounter: React.SFC<RuneCounterProps> = (props: RuneCounterProps) => {
    return <li>
        {props.title}:
        <button
            className={!props.canBeDecremented ? CSS.unactive : ''}
            disabled={!props.canBeDecremented}
            onClick={() => props.onReduce(props.title)}
        >
            reduce
        </button>

        {props.value} %

        <button
            className={!props.canBeIncremented ? CSS.unactive : ''}
            disabled={!props.canBeIncremented}
            onClick={() => props.onIncrease(props.title)}
        >
            increase
        </button>
    </li>
}