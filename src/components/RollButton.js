import {useEffect, useState} from 'react';

import './RollButton.css';
import icon from '../images/ai_dice_icon.png';

const colorRoll = ['#F60000', '#FF8C00', '#FFEE00', '#4DE94C', '#3783FF', '#4815AA'];
const buttonStyles = ['Deactivated','Active'];
const cursorStyles = ['default','pointer'];

function RollButton({isNSFW, setThemeListCreated, themeListCreated}) {

    const [buttonStyle, setButtonStyle] = useState('Active');
    const [theme, setTheme] = useState('Roll!');
    const [rollState, setRollState] = useState(false);
    const [cursorType, setCursor] = useState('pointer');
    const [themeList, setThemeList] = useState([]);

    useEffect(() => {
        if(!themeListCreated) {
            // Fetch themes from the database
            let url = `/themes?isNSFW=${isNSFW}`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setThemeList(data);
                    console.log("Reloaded themes");
                    console.log(data);
                })
                .catch((err) => console.error(err));
            setThemeListCreated(true);
        }
    }, [isNSFW, themeListCreated, setThemeListCreated]);

    useEffect(() => {
        if (rollState && themeListCreated) {
            console.log(themeList);
            let time = 50;
            for (let i = 0; i < themeList.length; i++) {
                setButtonStyle(buttonStyles[0]);
                setTimeout(() => setTheme(themeList[Math.floor(Math.random() * themeList.length)].theme),
                    time = (time + 50) + 0.01 * time);
                if(i === themeList.length-1){
                    setTimeout(() => {
                            setButtonStyle(buttonStyles[1]);
                            setCursor(cursorStyles[1])},
                        time = (time + 50) + 0.01 * time);
                }
            }
        }
        setRollState(false);
    }, [rollState,themeList, themeListCreated]);

    function rollColor() {
        if(buttonStyle === 'Active'){
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

export default RollButton;
