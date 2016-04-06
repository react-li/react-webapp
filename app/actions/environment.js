/**
 * environment
 * 
 * 所属环境
 * 
 */

import * as types from '../constants/ActionTypes.js'

function changeIsMobile(isMobile) {
  return {
    type: types.CHANGE_IS_MOBILE,
    isMobile
  }
}

export function changeWidthAndHeight(height, width) {
  return {
    type: types.CHANGE_WIDTH_AND_HEIGHT,
    height,
    width
  }
}

export function initEnvironment() {
  return dispatch => {
    // 判断硬件
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      // to do somthing
    }

    // 做出改变
    dispatch(changeIsMobile(isMobile))
    dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth))
  
    // 改变窗口时
    window.onresize = () => {
      dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth))
    }
  }
}