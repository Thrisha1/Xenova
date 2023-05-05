import axios from "axios";
import Token from "../auth/token";

const endpoint = process.env.NEXT_PUBLIC_SERVER_ENDPOINT
console.log(endpoint)

export const restAPI = axios.create({
    baseURL: endpoint,
    headers: {
        'Authorization': `Bearer ${new Token("id").get()}`,
    }
});