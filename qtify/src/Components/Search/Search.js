
import React from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";
import styles from "./Search.module.css"
function Search(){



    return(
      <>

   <TextField id="outlined-basic"  variant="outlined" className={styles.search}
   InputProps={{
    startAdornment: <InputAdornment position="start"></InputAdornment>,
  }}
  placeholder="Search a album of your choice"
   />
  

      </>
        
       
        
    )
}
export default Search 