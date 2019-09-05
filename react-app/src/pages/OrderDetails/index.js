/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: theme.spacing(3, 2)
  },
  table: {
    minWidth: 650
  }
}));

export default function Orders({ match }) {
  const classes = useStyles();

  const [hasErrors, setErrors] = useState(false);
  const [order, setOrder] = useState({});

  const orderId = match.params.id;

  async function fetchOrder(orderId) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ORDERS_URL}/${orderId}`
      );
      const order = await response.json();
      setOrder(order);
    } catch (err) {
      setErrors(true);
    }
  }

  useEffect(() => {
    fetchOrder(orderId);
  }, [orderId]);

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
        <Paper className={classes.paper}>
          <Grid
            className={classes.grid}
            container
            spacing={3}
            justify="flex-start"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <Typography variant="h5">{order.id}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography component="p">
                <b>Date: </b>
                {order.date}
              </Typography>
              <Typography component="p">
                <b>Cost: </b>${order.cost}
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography component="p">
                <b>Order Items: </b>
              </Typography>
              {order.items &&
                order.items.map(item => (
                  <Typography key={item}>{item}</Typography>
                ))}
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}
