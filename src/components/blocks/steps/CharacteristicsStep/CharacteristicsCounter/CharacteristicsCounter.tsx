import * as React from "react";
const CSS = require('./CharacteristicsCounter.css');

interface CharacteristicsCounterProps {
    title: string,
    value: number,
    onIncrease(name: string): any,
    onReduce(name: string): any,
    canBeIncremented: boolean,
    canBeDecremented: boolean
}

export const CharacteristicsCounter: React.SFC<CharacteristicsCounterProps> = (props: CharacteristicsCounterProps) => {
    return <li>
        {props.title}:
        <button
            className={!props.canBeDecremented ? CSS.unactive : ''}
            disabled={!props.canBeDecremented}
            onClick={() => props.onReduce(props.title)}
        >
            reduce
        </button>

        {props.value}

        <button
            className={!props.canBeIncremented ? CSS.unactive : ''}
            disabled={!props.canBeIncremented}
            onClick={() => props.onIncrease(props.title)}
        >
            increase
        </button>
    </li>
}