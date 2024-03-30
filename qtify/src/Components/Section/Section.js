import headphone from "../Hero/headphone.png";
import styles from "./Section.module.css";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Grid,
  Typography,
} from "@mui/material";

function Section() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums } = data;
  console.log("Helloo", topAlbums, newAlbums);

  return (
    <>
      <Grid container>
        {/* <Card  className={styles.card}>
<CardMedia img="https://media.istockphoto.com/id/543336084/photo/silhouette-telecommunication-towers-with-tv-antennas-satellite-dish-in-sunset.jpg?s=1024x1024&w=is&k=20&c=UG8UhY50LicN6sIFVhWHvqp1yxh98G_MtAZYK69xhSE=" />
<CardContent>


</CardContent>
</Card> */}
      </Grid>
    </>
  );
}

export default Section;
