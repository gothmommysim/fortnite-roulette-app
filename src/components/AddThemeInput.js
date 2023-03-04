import {useEffect, useState} from "react";
import CloseButton from "./CloseButton";

const AddThemeInput = ({buttonClicked, setButtonClick}) => {
    const [visible, setVisible] = useState(buttonClicked);

    const handleCloseClick = () =>{
        setVisible(false);
        setButtonClick(false);
    }

    const handleOkClick = () => {
        //Send input to db
        setVisible(false);
        setButtonClick(false);
    };

    useEffect(() => {
        setVisible(buttonClicked);
    }, [buttonClicked]);

    return visible ? (
        <div className='App' style={{zIndex: '10', fontSize: 64, paddingTop: 16, paddingBottom: 16, backgroundColor: "rgba(0, 0, 0, 95%)"}}>
            <CloseButton onClick={handleCloseClick}/> <br/>
            New Theme Name: <br/>
            <input className='App-placeholder' placeholder="Eggs" style={{width: "288px", height: "50px"}}/>
            <br/>
            <label htmlFor="nsfwCheckbox"><a style={{color: "red", fontSize: 24}}>🔞NSFW?</a></label>
            <input type="checkbox" id="nsfwCheckbox" name="nsfwCheckbox" value="nsfw" onChange={undefined}/><br/>
            <a style={{cursor: 'pointer'}}
             onClick={handleOkClick}>🆗</a>
        </div>) : null;
};
export default AddThemeInput