import React, { useEffect } from "react";
import styles from "./Section.module.css";
import { Box, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import {  SentimentDissatisfied } from "@mui/icons-material";
import Carddetails from "../Card/Carddetail";
import Carousel from "../Carousel/Carousel";
import Tabsection from "./Tabsection/Tabsection";
function Section(data) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [carouselToggle, setCarouseltoggle] = useState(false);
  const [selectedFilterindex, setSelectedFilterindex] = useState(0);

  useEffect(() => {
    if (data.filtersource) {
      data.filtersource().then((res) => {
        const resdata = res.data;
        setFilters([...filters, ...resdata]);
      });
    }
  }, []);
  console.log("Aftercall", filters);
  const showfilters = filters.length > 1;
  const cardstorender = data.data.filter((card) =>
    showfilters && selectedFilterindex !== 0
      ? card.genre.key === filters[selectedFilterindex].key
      : card
  );
  console.log("These are updated cards", cardstorender);
  const handleToggle = () => {
    setCarouseltoggle((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <div className={styles.header}>
          <h1 className={styles.tittletext}>{data.tittle}</h1>
          {data.type === "album" ? (
            <h4 className={styles.toggletext} onClick={handleToggle}>
              {carouselToggle ? "Collapse All" : "Show All"}
            </h4>
          ) : null}
        </div>
        {showfilters && (
          <div className={styles.tab}>
           
            <Tabsection
              filters={filters}
              selectedFilterindex={selectedFilterindex}
              setSelectedFilterindex={setSelectedFilterindex}
            />
          </div>
        )}
        {data.data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div>
            {carouselToggle ? (
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
                    cardstorender.map((ele) => (
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
            ) : (
              <Grid container>
                <Carousel carouseldata={cardstorender} type={data.type}/>
              </Grid>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Section;
