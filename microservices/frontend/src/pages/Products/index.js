import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3, 2)
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function Products() {
  const classes = useStyles();

  const [hasErrors, setErrors] = useState(true);
  const [products, setProducts] = useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:8080/api/products");
    response
      .json()
      .then(response => {
        console.log(response);
        setProducts(response);
      })
      .catch(err => setErrors(true));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      {hasErrors && (
        <Paper className={classes.paper}>
          <Typography component="p">
            An error has occurred, please try reloading the page.
          </Typography>
        </Paper>
      )}
      {!hasErrors && (
        <Grid container spacing={3} justify="flex-start" alignItems="stretch">
          {products.map(product => {
            return (
              <Grid key={product.id} item md={4} xs={12}>
                <Card
                  onClick={() => {
                    console.log("Clicked card");
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image={product.picture}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography variant="body1">
                      {product.name} - ${product.cost}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}
