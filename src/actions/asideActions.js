import { ASIDE_OPEN, ASIDE_CLOSE, ASIDE_LANG_OPEN, ASIDE_LANG_CLOSE, ASIDE_SOCIAL_OPEN, ASIDE_SOCIAL_CLOSE, ASIDE_CART_OPEN, ASIDE_CART_CLOSE } from "../actions/types"

export const toggleAside = asideName => (dispatch, getState) => {
  const isOpen = getState().asideReducer
  switch (asideName) {
    case "lang":
      return dispatch({
        type: isOpen.asideLangOpen ? ASIDE_LANG_CLOSE : ASIDE_LANG_OPEN
      })
    case "social":
      return dispatch({
        type: isOpen.asideSocialOpen ? ASIDE_SOCIAL_CLOSE : ASIDE_SOCIAL_OPEN
      })
    case "closeAll":
      dispatch({
        type: ASIDE_LANG_CLOSE
      })
      return dispatch({
        type: ASIDE_SOCIAL_CLOSE
      })
    default:
      console.log("Default aside action")
      dispatch({
        type: isOpen.asideOpen ? ASIDE_CLOSE : ASIDE_OPEN
      })
  }
}

export const toggleAsideCart = asideCart => (dispatch, getState) => {
  const isCartOpen = getState().asideReducer.asideCartOpen
  if (asideCart === "cart") {
    return dispatch({
      type: !isCartOpen ? ASIDE_CART_OPEN : ASIDE_CART_CLOSE
    })
  }
}
