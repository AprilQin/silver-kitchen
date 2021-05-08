import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

const sendOrder = (cart) => {
  axios.post(`/order`, cart).then((res) => {
    console.log(res.data);
  });
};

export default sendOrder;
