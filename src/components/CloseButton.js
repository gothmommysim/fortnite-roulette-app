const CloseButton = ({onClick}) => {
    return (
        <a style={{
            fontSize: 20,
            padding: 8,
            backgroundColor: "rgba(0, 0, 0, 40%)",
            borderRadius: 80,
            outline: 'white solid 1px',
            float: "right",
            cursor: 'pointer'}}
        onClick={onClick}>❌</a>
    );
};

export default CloseButton;