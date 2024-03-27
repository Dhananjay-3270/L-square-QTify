
import React from "react";
import logo from "./logo.png"
import styles from "./Logo.module.css"
function Logo(){



    return(
      <div className={styles.div} >
        
       <img src={logo}alt="logo" width={67} />
       </div>
    )
}
export default Logo 