import axios from "axios";

const apiPixture = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json',
});

export default apiPixture;