import axios from "axios";

let API_URL = "https://homemade-goodies.herokuapp.com";
if (window.location.hostname === "localhost") {
  API_URL = "http://localhost:5000";
}

export default () => {
  // get dataAPI() {
  return axios.create({
    baseURL: API_URL,
    // withCredentials: false,
    headers: {
      // Accept: 'application/json',
      "Content-Type": "application/json",
    },
  });
  // }
};
