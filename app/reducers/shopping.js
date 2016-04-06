/**
 * shopping
 * 
 * 购买流程
 * 
 */

import {
  RECEIVE_GOODS,SELECT_ATTRIBUTE,CHANGE_CART_COUNT,
  RECEIVE_CART
} from '../constants/ActionTypes.js'

export function shopping(state={}, action) {
  switch (action.type) {
    case RECEIVE_GOODS:
    // && Object.prototype.toString.call(action.goods.attribute) !== '[object Array]'
      let attribute = action.goods.attribute
      let inventoryCount = 0
      if (attribute) {
        for (var i=0; i < attribute.length; i++) {
          attribute[i].checked = false
          if (attribute[i].inventory >= 0) {
            inventoryCount = inventoryCount + attribute[i].inventory
          }
        }
        action.goods.inventoryCount = inventoryCount
      }
      return action.goods
    case SELECT_ATTRIBUTE:
      for (var i=0; i < state.attribute.length; i++) {
        state.attribute[i].checked = false
        if (action.attribute.name === state.attribute[i].name) {
          state.attribute[i].checked = !state.attribute[i].checked
          state.inventoryCount = action.attribute.inventory
          state.cartAttribute = action.attribute.name
        }
      }
      state.cartCount = 1
      return {
        ...state
      }
    case CHANGE_CART_COUNT:
      let newCount = state.cartCount + action.count
      if (newCount >= 1 && newCount <= state.inventoryCount) {
        state.cartCount = newCount
        return {
          ...state
        }
      }
      return state
    default:
      return state
  }
}

export function cart(state={}, action) {
  switch (action.type) {
    case RECEIVE_CART:
      let attribute = action.cart.attribute
      if (attribute) {
        for (var i=0; i<attribute.length; i++) {
          if (attribute[i].name === action.cart.cartAttribute) {
            return {
              ...state,
              [action.cart.id + attribute[i].name]: {
                id: action.cart.id,
                title: action.cart.title,
                price: attribute[i].price,
                count: action.cart.cartCount,
                gallery: action.cart.gallery,
                attribute: attribute[i].name
              }
            }
          }
        }
      }
      return state
    default:
      return state
  }
}