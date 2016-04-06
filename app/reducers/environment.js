/**
 * environment
 * 
 * 所属环境
 * 
 */

import {
  CHANGE_IS_MOBILE,
  CHANGE_WIDTH_AND_HEIGHT
} from '../constants/ActionTypes.js'

const initialState = {
  isMobile: false,
  height: null,
  width: null
}

export default function environment(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IS_MOBILE:
      return {
        ...state,
        ...{
          isMobile: action.isMobile
        }
      }
    case CHANGE_WIDTH_AND_HEIGHT:
      return {
        ...state,
        ...{
          height: action.height,
          width: action.width
        }
      }
    default:
      return state
  }
}