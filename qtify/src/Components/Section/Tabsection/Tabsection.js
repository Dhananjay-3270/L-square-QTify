import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./Tabsection.module.css";
import { useState } from "react";
function Tabsection({ filters, selectedFilterindex, setSelectedFilterindex }) {

  const [value, setValue] = useState("all");
  const handleChange = (event, newValue) => {
   
   setValue(newValue);
  };
  
  
  return (
    <>
      <Box
        sx={{ width: "max-content", borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          label="All"
          sx={{
            "& button": {
              color: "white",
              fontStyle: "Poppins",
              fontWeight: "bold",
             
            }
          }}
          value={value}
          onChange={handleChange}
        >{filters.map((ele , val)=>(<Tab key={ele.key} value={ele.key} label={ele.label} onClick={()=>(setSelectedFilterindex(val))}/>))}
         
        </Tabs>
      </Box>
    </>
  );
}

export default Tabsection;
