import './Button.css'

const Button = ({ btnText, ...otherProps }) => {
    return (
        <>
            <button className="btn" {...otherProps}>{btnText}</button>
        </>
    );
}

export default Button;