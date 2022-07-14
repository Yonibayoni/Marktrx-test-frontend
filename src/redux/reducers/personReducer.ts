import { PayloadAction } from "@reduxjs/toolkit";
import { PERSON_API_FAIL, PERSON_API_REQUEST, PERSON_API_SUCCESS } from "../constants/personContrasts";

// Person Reducer
export const personReducer = (state = {}, action: PayloadAction) => {
  switch(action.type) {
    case PERSON_API_REQUEST:
      return { loading: true }
    case PERSON_API_SUCCESS:
      return { ...state, loading: false, result: action.payload }
    case PERSON_API_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}