import axios from "axios";

const coffeeAPI = axios.create({
    baseURL: "https://fake-coffee-api.vercel.app"
})

export default coffeeAPI