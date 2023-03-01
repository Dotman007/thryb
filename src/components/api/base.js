import axios from "axios";

export default axios.create({
  baseURL: "https://thrybeapi.azurewebsites.net/api/BackofficeUser",
});
