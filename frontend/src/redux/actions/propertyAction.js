import axios from "axios";
// const server = "http://localhost:4000/api/v1"
export const getProperty = () => async (dispatch) => {
  try {
    dispatch({ type: "propertyRequest" });
    const { data } = await axios.get("/api/v1/property");
  
    dispatch({ type: "propertySuccess", payload: data });
  } catch (error) {
    dispatch({ type: "propertyFail", payload: error.response.data.message });
  }
};

export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "propertyDetailsRequest" });
    const { data } = await axios.get(`/api/v1/property/${id}`);
  console.log(data)
    dispatch({ type: "propertyDetailsSuccess", payload: data.property });
  } catch (error) {
    dispatch({ type: "propertyDetailsFail", payload: error.response.data.message });
  }
};
