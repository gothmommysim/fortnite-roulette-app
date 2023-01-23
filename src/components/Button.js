import {useState} from 'react';
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
    'Dads',
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
    'Boots'];

const colorRoll = ['#F60000', '#FF8C00', '#FFEE00', '#4DE94C', '#3783FF', '#4815AA'];


let buttonStyle = 'Active';




function Button(){
    const [theme,setTheme] = useState('Roll!');

    function RollColor() {

        setTheme(themeList[Math.floor(Math.random() * themeList.length)]);
        console.log(theme);
        return theme;
    }

    return(
        <div >
            <div className="App">
                <h1 style={{fontSize: 48, color: `${colorRoll[Math.floor(Math.random() * colorRoll.length)]}`}}>
                    {theme}</h1>
            </div>
            <img className={buttonStyle} src={icon} alt="icon" onClick={RollColor} style={{cursor:'pointer', boxShadow:'none'}}/>
        </div>
    );
}
export default Button;