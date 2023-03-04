import {useEffect, useState} from 'react';

import './ButtonStyles.css';

function AddThemeButton({onClick}) {
    const [cursorType, setCursor] = useState('pointer');

    return (
        <a className="addTheme" //style={{cursor: cursorType}} Change when enabled
         //onClick={onClick}
        >
            ☝️Add A Theme! (Coming soon™)
        </a>
    );
}

export default AddThemeButton;