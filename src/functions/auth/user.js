import jwtDecode from "jwt-decode"
import graphQLClient from "../graphql/apolloClient"
import Token from "./token"
import { restAPI } from "../rest/request"

export async function registerUser() {

    console.log("sdfsdfsdf")
    const tkn = new Token("id")
    const access = tkn.get()
    console.log(access)
    const base64Payload = access.split(".")[1];
    const payloadBuffer = Buffer.from(base64Payload, "base64");
    const decoded = JSON.parse(payloadBuffer.toString());

    if (!decoded["https://hasura.io/jwt/claims"]) {
        console.log("sending")
        restAPI.post("auth/register").then(res => {
            console.log(res.data)
        }).catch(e=>{
            if(e.response.status == 401){
                //TODO: refresh the session or login
            }
        })
    }

    return false

}