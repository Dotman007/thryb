import axios from "axios";

export default axios.create({
  baseURL: "https://thrybe.azurewebsites.net/api/BackofficeUser",
});
