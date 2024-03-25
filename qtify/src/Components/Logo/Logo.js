
import React from "react";
import logo from "../Logo/logo.jpg"
import styles from "./Logo.module.css"
function Logo(){



    return(
      <div className={styles.div} >
        
       <img src={logo}alt="logo" width={67} />
       </div>
    )
}
export default Logo 