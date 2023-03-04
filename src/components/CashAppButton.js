import './ButtonStyles.css';

function CashAppButton() {

    return (
        <a className="cashApp" style={{cursor: 'pointer'}}>
            <a title="Donate because you're cute 💅" href="https://cash.app/$gothmommysim" style={{textDecoration: 'none', color: "inherit"}}>
                💲</a>
        </a>
    );
}

export default CashAppButton;