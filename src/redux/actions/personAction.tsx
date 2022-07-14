import axios from "axios";
import { Dispatch } from "redux";
import { PERSON_API_REQUEST, PERSON_API_SUCCESS } from "../constants/personContrasts";

// Gets best match for country probability
export const getCountryProbability = (query: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PERSON_API_REQUEST})
    axios.get(`http://localhost:5000/probability/country/${query}`).then(response => {
      const { data } = response

      dispatch({ type: PERSON_API_SUCCESS, payload: data })
    })
  } catch (err) {
    console.log(err)
  }
}
