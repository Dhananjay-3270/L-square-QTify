import React from "react";
import styles from "./Section.module.css";
import { Box, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { Search, SentimentDissatisfied } from "@mui/icons-material";
import Carddetails from "../Card/Carddetail";
function Section(data) {
  const [filters, setFilters] = useState([{ key: "all", Label: "All" }]);
  const [carouselToggle, setCarouseltoggle] = useState(true);

  const handleToggle = () => {
    setCarouseltoggle((prevState) => !prevState);
  };
  console.log("Homepage", data);
  return (
    <>
      <div>
        <div className={styles.header}>
          <h1 className={styles.tittletext}>{data.tittle}</h1>
          <h4 className={styles.toggletext} onClick={handleToggle}>
           {carouselToggle? ("Show All"):("Collapse All")}
          </h4>
        </div>
        {data.data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div>
            {
              <Grid container>
                <Grid
                container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  className={styles.maingrid}
                  spacing={5}
                >
                  {data.data.length ? (
                    data.data.map((ele) => (
                      <Grid item key={ele.id} md={1.7}>
                        <Carddetails carddata={ele} type={data.type} />
                      </Grid>
                    ))
                  ) : (
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <SentimentDissatisfied size={40} />
                    </Box>
                  )}
                </Grid>
              </Grid>
            }
          </div>
        )}
      </div>
    </>
  );
}

export default Section;
