import axios from "axios";
import server from "../store";
export const getProperty = () => async (dispatch) => {
  try {
    dispatch({ type: "propertyRequest" });
    const { data } = await axios.get(`${server}/property`);
    head;
    dispatch({ type: "propertySuccess", payload: data });
  } catch (error) {
    dispatch({ type: "propertyFail", payload: error.response.data.message });
  }
};
