import classes from "./Input.module.css"

const Input = (attr) => {
    return (
        <input className={classes.input} placeholder="..." {...attr}/>
    )
}

export default Input;