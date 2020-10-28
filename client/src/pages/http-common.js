import axios from "axios";
import AuthHeader from "./AuthHeader";

export default axios.create({
    baseURL: "http://localhost:8081/api",
    headers: AuthHeader(),
});