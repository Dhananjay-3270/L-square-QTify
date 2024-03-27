
import React from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";
import styles from "./Search.module.css"
import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
function Searchh(props){



    return(
      <>

   <TextField id="outlined-basic"  variant="outlined" className={styles.search}
   InputProps={{
    startAdornment: <InputAdornment position="start"></InputAdornment>,
    
  }}
  placeholder={props.Placeholder}

   />
{/* <Button>Search</Button> */}
  

      </>
        
       
        
    )
}
export default Searchh