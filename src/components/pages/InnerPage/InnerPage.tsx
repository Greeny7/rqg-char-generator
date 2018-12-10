import * as React from 'react';
import { MyComponent } from '../../blocks/MyComponent/MyComponent';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';

export class InnerPage extends React.PureComponent {
    render() {
        return <>
            <MyComponent helloText={'this is INNER page'} />
            <Link to={'/'}>to main page</Link>
        </>
    }
}