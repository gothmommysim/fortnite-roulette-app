import {useEffect, useState} from 'react';

import './Button.css';
import icon from '../images/ai_dice_icon.png';

const themeList = ['Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Pink',
    'White',
    'Black',
    'Gold',
    'Silver',
    'Gay ',
    'Straight',
    'Bi',
    'Transfem',
    'Transmasc',
    'Enby',
    'Ace',
    'Boomers',
    'Gen Z',
    'Millennials',
    'Girl Boss',
    'Animals',
    'Foods',
    'Music',
    'Jocks',
    'Preps',
    'Goths',
    'Emos',
    'Republicans',
    'Chaotic',
    'Bruh Girls',
    'Mysterious',
    'Twinks',
    'Celebrities',
    'Bears',
    'Doms',
    'Subs',
    'Switches',
    'Business Majors',
    'Cucks',
    'Holiday',
    'Bitches',
    'Moms',
    'Dad Energy',
    'Pajamas',
    'Mascots',
    'Met Gala',
    'Blue Collar',
    'Virgins',
    'Tide Pod Eaters',
    'Aliens',
    'Monsters',
    'Pups',
    'Feet',
    'Sparkles',
    'Chrome',
    'Bootycore',
    'Slimecore',
    'Golden Retriever Energy',
    'Clown',
    'Cam Girls',
    'Butches',
    'Boots',
    'Pick me Bitch',
    'Doesn’t tip',
    'Opens eyes while kissing',
    'Mountain Dew Baja Blast',
    'Mountain Dew Code Red',
    'Four Loko Connoisseur',
    'Fucks with socks on',
    'Fucks with shoes on',
    'Has never eaten a vegetable',
    'Has never eaten an animal',
    'Has never eaten pussy',
    'Elizabeth’s childhood',
    'Ohio 10s',
    'Shoes off on public transport',
    'Facebook Poke',
    'Casual Racists',
    'My parents are conservatives',
    'Has a tramp stamp',
    'Has tribal tattoo. Is white.',
    'Crypto Guy',
    'Incel',
    'Coughs like a child',
    'Andrew Tate fan',
    'UwU',
    '1.5 GPA',
    'Smol bois',
    'Giant dicks',
    'Directed by Quentin Tarantino',
    'Written by a woman',
    'A face only a mother could love',
    'La Croix flavors',
    'Killer bussy',
    'Sleep Paralysis Vision',
    'Drag Race Contestant'
];

const colorRoll = ['#F60000', '#FF8C00', '#FFEE00', '#4DE94C', '#3783FF', '#4815AA'];
const buttonStyles = ['Deactivated','Active'];
const cursorStyles = ['default','pointer'];

function Button() {
    let time = 50;
    const [buttonStyle, setButtonStyle] = useState('Active');
    const [theme, setTheme] = useState('Roll!');
    const [rollState, setRollState] = useState(false);
    const [cursorType, setCursor] = useState('pointer');

    useEffect(() => {
        if (rollState) {
            for (let i = 0; i < themeList.length; i++) {
                setButtonStyle(buttonStyles[0]);
                setTimeout(() => setTheme(themeList[Math.floor(Math.random() * themeList.length)]),
                    time = (time + 50) + 0.01 * time);
                if(i == themeList.length-1){
                    setTimeout(() => {setButtonStyle(buttonStyles[1]); setCursor(cursorStyles[1])},
                        time = (time + 50) + 0.01 * time);
                }
            }

        }
        setRollState(false);
    });

    function rollColor() {
        if(buttonStyle == 'Active'){
            setRollState(true);
            setCursor(cursorStyles[0]);
        }
    }

    return (
        <div>
            <div className="App">
                <h1 style={{fontSize: 48, color: `${colorRoll[Math.floor(Math.random() * colorRoll.length)]}`}}>
                    {theme}</h1>
            </div>
            <div className={'diceImage'}>
            <img className={buttonStyle} src={icon} alt="icon" onClick={() => rollColor()}
                 style={{cursor: cursorType}}/>
            </div>
        </div>
    );
}

export default Button;