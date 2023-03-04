import './App.css';

import bg_C2S3 from './images/bg/bg_C2S3.png';
import bg_C2S4 from './images/bg/bg_C2S4.png';
import bg_C2S5 from './images/bg/bg_C2S5.png';
import bg_C2S6 from './images/bg/bg_C2S6.png';
import bg_C2S7 from './images/bg/bg_C2S7.png';
import bg_C2S8 from './images/bg/bg_C2S8.png';
import bg_C3S1 from './images/bg/bg_C3S1.png';
import bg_C3S3 from './images/bg/bg_C3S3.png';
import bg_C3S2 from './images/bg/bg_C3S2.png';
import bg_C3S4 from './images/bg/bg_C3S4.png';
import bg_C4S1 from './images/bg/bg_C4S1.png';

import React, {useState} from "react";
import ComponentParent from "./components/ComponentParent";

const bg = [
    bg_C2S3,
    bg_C2S4,
    bg_C2S5,
    bg_C2S6,
    bg_C2S7,
    bg_C2S8,
    bg_C3S1,
    bg_C3S2,
    bg_C3S3,
    bg_C3S4,
    bg_C4S1
];

function App() {

    return (
        <div>
            <div className='App-background' style={{
                backgroundImage: `url(${bg[Math.floor(Math.random() * bg.length)]})`,
            }}>
            </div>
            <header className={'App-header'}>FORTNITE THEME RANDOMIZER
                <a className="App-special" style={{fontSize: 24}}> v2</a> <br/>
                <span style={{fontSize: 32}}>by <a href={'https://github.com/gothmommysim'}
                                                   style={{textDecoration: 'none', color: "inherit"}}>
                        Sim❤️</a>
                </span>
            </header>
            <ComponentParent/>
            <footer className={'App-footer'}>
                <span style={{fontSize: 32}}>2023</span>
            </footer>
        </div>
    );
}

export default React.memo(App);
