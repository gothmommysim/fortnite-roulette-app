import {useState} from "react";

import IncludeNSFW from "./IncludeNSFW";
import AddThemeButton from "./AddThemeButton";
import AddThemeInput from "./AddThemeInput";

import './OptionsBar.css';
import CashAppButton from "./CashAppButton";



function OptionsBar({isNSFW, setIsNSFW, setThemeListCreated}){
    const [buttonClicked, setButtonClick] = useState(false);

    function handleAddTheme(){
        setButtonClick(true);
    };

    return(
        <div className="optionsBar">
            <IncludeNSFW isNSFW={isNSFW} setIsNSFW={setIsNSFW} setThemeListCreated={setThemeListCreated}/>
            <a style={{margin: 10, userSelect: "none"}}>{" "}</a>
            <AddThemeButton onClick={handleAddTheme}/>
            <AddThemeInput buttonClicked={buttonClicked} setButtonClick={setButtonClick}/>
            <a style={{margin: 10, userSelect: "none"}}>{" "}</a>
            <CashAppButton/>
        </div>
    );
}

export default OptionsBar;