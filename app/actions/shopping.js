/**
 * shopping
 * 
 * 购买流程
 * 
 */

import * as types from '../constants/ActionTypes.js'

export function receiveGoods(goods) {
  return {
    type: types.RECEIVE_GOODS,
    goods
  }
}

export function selectAttribute(attribute) {
  return {
    type: types.SELECT_ATTRIBUTE,
    attribute
  }
}

export function changeCartCount(count) {
  return {
    type: types.CHANGE_CART_COUNT,
    count
  }
}

export function finishToCart() {
  return (dispatch,getState) => {
    const shopping = getState().shopping
    if (shopping.cartCount >= 1 && shopping.cartAttribute) {
      dispatch(receiveCart(shopping))
    }
  }
}

function receiveCart(cart) {
  return {
    type: types.RECEIVE_CART,
    cart
  }
}