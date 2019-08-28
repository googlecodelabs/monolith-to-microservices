import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3, 2)
  },
  table: {
    minWidth: 650
  }
}));

export default function Orders() {
  const classes = useStyles();

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
    <div className={classes.root}>
      {hasErrors && (
        <Paper className={classes.paper}>
          <Typography component="p">
            An error has occurred, please try reloading the page.
          </Typography>
        </Paper>
      )}
      {!hasErrors && (
        <Paper>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Total Items</TableCell>
                <TableCell>Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(order => (
                <TableRow
                  hover
                  key={order.id}
                  onClick={() => {
                    console.log("load order details");
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
    </div>
  );
}
