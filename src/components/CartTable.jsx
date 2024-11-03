import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'


function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const CartTable = ({productList, cartList, onDecrement, onIncrement, onDelete}) => {

    const getProduct = (id) => {
        return productList.find((product) => product.id === id)
    }

    const getToList = () =>{
        
        let list = []
        
        if(cartList.length > 0){
            cartList.map((cart) =>{
                if(cart.value > 0){
                    let newList = {
                        id: cart.id, 
                        productName: getProduct(cart.id).title,
                        qty: cart.value,
                        unit: getProduct(cart.id).price,
                    }
                    list.push(newList)
                }
                return list;
            })
        }

        return list;
    }

    const getSubtotal = () => {

        let subtotal = 0;
        const list = getToList();

        list.map((item) => {
            let itemSub = item.qty * item.unit
            subtotal += itemSub
        })

        return subtotal;

    }

    return (
        (getToList().length <= 0)?<div style={{ textAlign: "center"}}><h2>No Items in Cart</h2></div>:
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
            {getToList().map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.productName}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{`P${row.unit}`}</TableCell>
                <TableCell align="right">{`P${ccyFormat(
                  row.qty * row.unit
                )}`}</TableCell >
                <TableCell align='center'>
                  <button
                    onClick={() => onDecrement(row.id)}
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