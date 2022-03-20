import { CHANGE_LOCALE } from "./types"

export const changeLocale = newLocale => dispatch => {
  console.log("newLocale", newLocale)
  dispatch({
    type: CHANGE_LOCALE,
    payload: newLocale
  })
}
