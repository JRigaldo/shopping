import { CHANGE_LOCALE } from "../actions/types"

const initialStateLocales = {
  locales: ["fr", "de", "en", "it"],
  currentLocale: "en"
}

export default function (state = initialStateLocales, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        locales: state.locales,
        currentLocale: action.payload
      }
  }
  return state
}
