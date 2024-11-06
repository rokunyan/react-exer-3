import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'


function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const CartTable = ({cartList, onDecrement, onIncrement, onDelete}) => {


    const getSubtotal = () => {

        let subtotal = 0;

        cartList.map((item) => {
            let itemSub = item.value * item.unitPrice
            subtotal += itemSub
        })

        return subtotal;

    }

    return (
        (cartList.length <= 0)?<div style={{ textAlign: "center"}}><h2>No Items in Cart</h2></div>:
      <><TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                <b>Details</b>
              </TableCell>
              <TableCell align="right" rowSpan={3}>
                <b>Price</b>
              </TableCell>
              <TableCell align="center" rowSpan={3}>
                <b>Actions</b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Product Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Qty</b>
              </TableCell>
              <TableCell align="right">
                <b>Unit Price</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">{`P${row.unitPrice}`}</TableCell>
                <TableCell align="right">{`P${ccyFormat(
                  row.value * row.unitPrice
                )}`}</TableCell >
                <TableCell align='center'>
                  <button
                    onClick={() => {(row.value === 1)?onDelete(row.id):onDecrement(row.id)}}
                    className="btn btn-secondary"
                    style={{ margin: "2px" }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => onIncrement(row.id)}
                    className="btn btn-primary"
                    style={{ margin: "2px" }}
                  >
                    +
                  </button>
                  <IconButton onClick={() => onDelete(row.id)}>
                      <DeleteIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{`P${ccyFormat(
                getSubtotal()
              )}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </>);
}

export default CartTable