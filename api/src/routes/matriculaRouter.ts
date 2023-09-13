import express from 'express'
const matriculaRouter = express.Router()

matriculaRouter.get('/', (_req, res) => {
  res.send('Is getting')
})

matriculaRouter.post('/', (_req, res) => {
  res.send('Is posting')
})
matriculaRouter.put('/', (_req, res) => {
  res.send('Is putting')
})

matriculaRouter.delete('/', (_req, res) => {
  res.send('Is deleted')
})

export default matriculaRouter
/* const { Router } = require("express");
const {
  getCartProducts,
  createCartProduct,
  deleteCart,
  modifyCartProduct,
} = require("../handlers/cartHandler.js");
const cartRouter = Router();

cartRouter.post("/", createCartProduct);

cartRouter.get("/", getCartProducts);

cartRouter.put("/", modifyCartProduct);

cartRouter.delete("/", deleteCart);

module.exports = cartRouter;
*/
