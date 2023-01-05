import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { combineitems } from "./combineitems";
import { UserContext } from "../App";

function Cart({ items }) {
  const combinedItems = combineitems(items);
  const { handleRemoveFromCart } = useContext(UserContext);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {combinedItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.total}</TableCell>
              <TableCell>
                <Button
                  data-testid="remove"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Cart;
