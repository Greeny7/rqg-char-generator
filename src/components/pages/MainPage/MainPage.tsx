import * as React from 'react';
import { MyComponent } from '../../blocks/MyComponent/MyComponent';
import { Link } from 'react-router-dom';

export class MainPage extends React.PureComponent {
    render() {
        return <>
            <MyComponent helloText={'this is MAIN page'} />
            <Link to={'/inner'}>to inner page</Link>
        </>
    }
}