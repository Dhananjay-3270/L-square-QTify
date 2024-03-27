
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
      minHeight="100vh">
<Box className={styles.hero}>


</Box>
</Box>
    </div>
  );
}

export default Homepage;
