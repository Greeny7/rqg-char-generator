import * as React from "react";
const CSS = require('./RuneCounter.css');

interface RuneCounterProps {
    title: string,
    value: string,
    onIncrease(name: string): any,
    onReduce(name: string): any,
    increaseActive: boolean,
    decreaseActive: boolean
}

export const RuneCounter: React.SFC<RuneCounterProps> = (props: RuneCounterProps) => {
    return <li>
        {props.title}:
        <button
            className={!props.decreaseActive ? CSS.unactive : ''}
            disabled={!props.decreaseActive}
            onClick={() => props.onReduce(props.title)}
        >
            reduce
        </button>

        {props.value} %

        <button
            className={!props.increaseActive ? CSS.unactive : ''}
            disabled={!props.increaseActive}
            onClick={() => props.onIncrease(props.title)}
        >
            increase
        </button>
    </li>
}