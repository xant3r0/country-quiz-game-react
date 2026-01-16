import classes from "./Button.module.css"

const Button = ({children,...attr}) => {
    return (
        <button className={classes.btn} {...attr}>{children}</button>
    )
}

export default Button;