import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

const getFoodList = async (category) => {
  const res = await axios.get(`/food?category=${category}`);
  // the data is an array of json data
  return res.data;
};

export default getFoodList;
