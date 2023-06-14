import jwtDecode from "jwt-decode"
import graphQLClient from "../graphql/apolloClient"
import Token from "./token"
import { restAPI } from "../rest/request"
import { auth } from '../../functions/auth/firebase';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";


export async function registerUser(auth, successCB) {

    const access = auth.accessToken
    console.log(access)
    const base64Payload = access.split(".")[1];
    const payloadBuffer = Buffer.from(base64Payload, "base64");
    const decoded = JSON.parse(payloadBuffer.toString());
    if (!decoded["https://hasura.io/jwt/claims"]) {
        // TODO: fix issue - race condition when user is created
        const res = await restAPI.post("auth/register");
        if(typeof successCB === 'function')
            successCB()
        return true
    }

    return true

}



export async function googleSignInWithPopup() {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    setIdToken(result.user);
    return user;
}


export function setIdToken(user, force = false){
    const tknId = new Token("id");
    user.getIdToken(force).then((token) => {
        tknId.set(token);
    });
}