import React from "react"
import styles from "./Carddetail.module.css"
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
    Tooltip
  } from "@mui/material";
  import { CardOverflow } from '@mui/joy';


function Carddetails(data){
console.log(data.carddata.image)


return (
    
  <>
{/* <div className={styles.div}>
    <Card className={styles.card}>
    <CardMedia
        className={styles.image}
        height = "170"
        component="img"
        alt="product"
        image={data.carddata.image}
        
      />
       <CardContent>
<div className={styles.chip}>
<Chip  label={data.carddata.follows} size="small"/>
</div>

        </CardContent>

       <CardOverflow variant="soft" sx={{ bgcolor: 'black' }} >
       <Typography className={styles.typo} level="body-xs" fontWeight="md" textColor="white">
           {data.carddata.title}
          </Typography>
       </CardOverflow>
    </Card>
 


</div> */}
<div className={styles.div}>
  <Tooltip title={`${data.carddata.songs.length} Songs`} placement="top" arrow>
  <Card className={styles.card}>
  <CardMedia
        className={styles.image}
        height = "170"
        component="img"
        alt="product"
        image={data.carddata.image}
        
      />

  <div className={styles.chip} > {`${data.carddata.follows} Follows`}</div>




  </Card>
  <div className={styles.title}> {data.carddata.title}</div>
  </Tooltip>
</div>

    </>
)

}
export default Carddetails