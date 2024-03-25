import React from "react";
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import Search  from "../Search/Search"
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
function Navbar(){


return(
    <>
    
    <nav className={styles.navbar}>
        <Link to="/">
     <Logo/>
     </Link>
     <Search/>   
    <Button/>
    </nav>
    </>
)

}
export default Navbar 