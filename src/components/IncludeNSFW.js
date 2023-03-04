import {useEffect, useState} from 'react';

import './ButtonStyles.css';

function IncludeNSFW({isNSFW, setIsNSFW, setThemeListCreated}) {

    function getNSFW(box){
        setIsNSFW(box.target.checked);
        setThemeListCreated(false);
    };

    return (
        <a className="includeNSFW">
            <label htmlFor="nsfwCheckbox">🔞<a style={{color: "red"}}></a></label>
            <input type="checkbox" id="nsfwCheckbox" name="nsfwCheckbox" value="nsfw" onChange={getNSFW} checked={isNSFW}/>
        </a>
    );
}

export default IncludeNSFW;