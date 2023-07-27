import axios from "axios";
// const server = "http://localhost:4000/api/v1"
export const getProperty = () => async (dispatch) => {
  try {
    dispatch({ type: "propertyRequest" });
    console.log("hiii")
    const { data } = await axios.get("/api/v1/property");
    console.log("b")
  
    dispatch({ type: "propertySuccess", payload: data });
  } catch (error) {
    dispatch({ type: "propertyFail", payload: error.response.data.message });
  }
};
