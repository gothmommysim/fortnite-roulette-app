import React, {useEffect, useState} from 'react';
import RollButton from "./RollButton";
import OptionsBar from "./OptionsBar";

function ComponentParent() {
    const [themeListCreated, setThemeListCreated] = useState(false);
    const [isNSFW,setIsNSFW] = useState(true);

    return (
        <a>
        <RollButton isNSFW={isNSFW} setThemeListCreated={setThemeListCreated} themeListCreated={themeListCreated}/>
        <OptionsBar isNSFW={isNSFW} setIsNSFW={setIsNSFW} setThemeListCreated={setThemeListCreated}/>
        </a>
    );
}

export default ComponentParent;