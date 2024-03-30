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
    Chip
  } from "@mui/material";
  import { CardOverflow } from '@mui/joy';


function Carddetails(data){
console.log(data.carddata.image)


return (
    
  <>
<div className={styles.div}>
    <Card className={styles.card}>
    <CardMedia
        className={styles.image}
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
 


</div>
    </>
)

}
export default Carddetails