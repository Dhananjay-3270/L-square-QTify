
import React from "react";
import {Link} from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import { Box } from "@mui/system";
import styles from "../../Components/Hero/Hero.module.css"
function Homepage() {
  return (
    <div>
<Navbar/>
<Box  display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
      className={styles.box}>
<Box className={styles.hero}>


</Box>
<p className={styles.heading}>100 Thousand Songs, ad-free Over thousands podcast episodes</p>

</Box>
    </div>
  );
}

export default Homepage;
