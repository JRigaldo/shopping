import { ASIDE_OPEN, ASIDE_CLOSE, ASIDE_LANG_OPEN, ASIDE_LANG_CLOSE, ASIDE_SOCIAL_OPEN, ASIDE_SOCIAL_CLOSE, ASIDE_CART_OPEN, ASIDE_CART_CLOSE } from "../actions/types"

const initialStateCart = {
  asideOpen: false,
  asideLangOpen: false,
  asideSocialOpen: false,
  asideCartOpen: false
}

export default function (state = initialStateCart, action) {
  switch (action.type) {
    case ASIDE_OPEN:
      return {
        asideOpen: true
      }
    case ASIDE_CLOSE:
      return {
        asideClose: false
      }
    case ASIDE_LANG_OPEN:
      return {
        asideLangOpen: true
      }
    case ASIDE_LANG_CLOSE:
      return {
        asideLangOpen: false
      }
    case ASIDE_SOCIAL_OPEN:
      return {
        asideSocialOpen: true
      }
    case ASIDE_SOCIAL_CLOSE:
      return {
        asideSocialOpen: false
      }
    case ASIDE_CART_OPEN:
      return {
        asideCartOpen: true
      }
    case ASIDE_CART_CLOSE:
      return {
        asideCartOpen: false
      }
  }
  return state
}
