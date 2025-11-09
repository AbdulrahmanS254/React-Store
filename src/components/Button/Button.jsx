import './Button.css'

const Button = ({ btnText }) => {
    return (
        <>
            <button className="btn">{btnText}</button>
        </>
    );
}

export default Button;