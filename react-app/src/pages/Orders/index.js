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
import { useHistory } from "react-router-dom";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export default function Orders() {
  const history = useHistory();

  const [hasErrors, setErrors] = useState(false);
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    try {
      const response = await fetch(`${process.env.REACT_APP_ORDERS_URL}`);
      const orders = await response.json();
      setOrders(orders);
    } catch (err) {
      setErrors(true);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

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
          <Typography variant="h5">Orders</Typography>
          <Table sx={{ minWidth: "650px" }}>
            <TableHead>
              <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Total Items</TableCell>
                <TableCell>Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  sx={{ cursor: "pointer" }}
                  key={order.id}
                  onClick={() => {
                    history.push(`/orders/${order.id}`);
                  }}
                >
                  <TableCell component="th" scope="row">
                    {order.id}
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    {(order.items && order.items.length) || 0}
                  </TableCell>
                  <TableCell>${order.cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Box>
  );
}
