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

  async function fetchOrder() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ORDERS_URL}/${match.params.id}`
      );
      const order = await response.json();
      setOrder(order);
    } catch (err) {
      setErrors(true);
    }
  }

  useEffect(() => {
    fetchOrder();
  }, {});

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
          <Typography component="p">
            <b>Order ID: </b>
            {order.id}
          </Typography>
          <Typography component="p">
            <b>Date: </b>
            {order.date}
          </Typography>
        </Paper>
      )}
    </div>
  );
}
