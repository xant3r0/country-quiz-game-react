import classes from "./styles/navbar.module.css";

const NavBar = () => {
    return (
        <header>
            <nav className={classes.nav}>
                <h3>Country Quiz App</h3>
            </nav>
        </header>
    )
}

export default NavBar;