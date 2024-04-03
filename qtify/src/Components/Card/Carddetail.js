import React from "react";
import styles from "./Carddetail.module.css";
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Grid,
  Typography,
  Chip,
  Tooltip,
} from "@mui/material";
import { CardOverflow } from "@mui/joy";

function Carddetails({ carddata, type }) {







  if (type==="album")
    return (
      <>
        <div className={styles.div}>
          <Tooltip
            title={`${carddata.songs.length} Songs`}
            placement="top"
            arrow
          >
            <Card className={styles.card}>
              <CardMedia
                className={styles.image}
                height="170"
                component="img"
                alt="product"
                image={carddata.image}
              />

              <div className={styles.chip}>
                {" "}
                {`${carddata.follows} Follows`}
              </div>
            </Card>
            <div className={styles.title}> {carddata.title}</div>
          </Tooltip>
        </div>
      </>
    );



    else return (
      <>
        <div className={styles.div}>
          
            <Card className={styles.card}>
              <CardMedia
                className={styles.image}
                height="170"
                component="img"
                alt="product"
                image={carddata.image}
              />

              <div className={styles.chip}>
                
                {`${carddata.likes} Likes`}
              </div>
            </Card>
            <div className={styles.title}> {carddata.title}</div>
       
        </div>
      </>
    );
}
export default Carddetails;
