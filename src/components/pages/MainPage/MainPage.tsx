import * as React from 'react';
import { HomelandSelectList } from '../../blocks/HomelandSelectList/HomelandSelectList';
import { Link } from 'react-router-dom';
import { CharacterDetails } from '../../blocks/CharacterDetails/CharacterDetails';
const CSS = require('./MainPage.css');

export class MainPage extends React.PureComponent {
    render() {
        return <div>
            <h1>Character Generator for Runequest: Roleplaying in Glorantha</h1>
            <div className={CSS.content}>
                <main className={CSS.main}>
                    <HomelandSelectList />
                </main>
                <aside className={CSS.asideRight}>
                    <CharacterDetails />
                </aside>
            </div>
        </div>
    }
}