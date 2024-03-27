import React from "react";
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import Searchh  from "../Search/Searchh"
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
function Navbar(){


return(
    <>
    
    <nav className={styles.navbar}>
        <Link to="/">
     <Logo/>
     </Link>
     <Searchh 
     flag={true}
     Placeholder="Search a album of your choice"/>   
    <Button/>
    
    </nav>
    </>
)

}
export default Navbar 