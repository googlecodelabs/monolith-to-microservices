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
import { useRouteMatch } from "react-router-dom";
import { Box, Paper, Grid, Typography } from "@mui/material";

export default function OrderDetails() {
  const match = useRouteMatch();

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
    <Box sx={{ flexGrow: 1 }}>
      {hasErrors && (
        <Paper
          elevation={3}
          sx={{
            background: "#f99",
            padding: (theme) => theme.spacing(3, 2),
          }}
        >
          <Typography component="p">
            An error has occurred, please try reloading the page.
          </Typography>
        </Paper>
      )}
      {!hasErrors && (
        <Paper
          elevation={3}
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: (theme) => theme.spacing(3, 2),
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="flex-start"
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
                order.items.map((item) => (
                  <Typography key={item}>{item}</Typography>
                ))}
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
}
