import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CardProduct = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={data.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {data.manufacturer}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.capacity}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.memory}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.color}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {data.price} | stock: {data.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;