import Token from "./token"

const idToken = new Token("id")
const refreshToken = new Token("refresh")

function toUser(token) {
    const data = token.getData()
    return (
        data && {
            token: token.get(),
            role: JSON.parse(data["https://hasura.io/jwt/claims"])[
                "x-hasura-allowed-roles"
            ],
            user_id: JSON.parse(data["https://hasura.io/jwt/claims"])[
                "x-hasura-user-id"
            ]
        }
    )
}
class Auth {
    constructor() {
        this.signObservers = []
        this.signErrorObservers = []
        this.initAuth()
        this.signInCallback = this.signInCallback.bind(this)
        this.signInCallback = this.signInCallback.bind(this)
    }
    set user(u) { }

    get user() {
        return this._user
    }

    initAuth() {
        this.refreshSession(() => (this._initialized = true))
    }
    refreshSession(cb) {
        // if (refreshToken.get())
        //     this._refreshSession()
        //         .then(res => {
        //             const authResult = res.AuthenticationResult
        //             authResult?.IdToken && idToken.set(authResult.IdToken)
        //             this.setUserFromIdToken()
        //             cb && cb()
        //         })
        //         .catch(err => {
        //             this.signErrorObserverNotify(err)
        //             this.setUser(null)
        //             cb && cb(err)
        //         })
        // else {
        //     this.setUser(null)
        //     cb && cb(new Error("No refresh token found"))
        // }
    }
    removeTokens() {
        refreshToken.remove()
        idToken.remove()
    }
    setUserFromIdToken() {
        this.setUser(toUser(idToken))
    }
    setUser(u) {
        this._user = u
        this.signObserverNotify(u)
    }
    signObserverNotify(u) {
        this.signObservers.forEach(fn => fn(u))
    }
    signErrorObserverNotify(err) {
        this.signErrorObservers.forEach(fn => fn(err))
    }
    signInCallback(err, data) {
        if (!err) {

            data?.id_token && idToken.set(data.id_token)
            data?.refresh_token && refreshToken.set(data.refresh_token)
            this.setUserFromIdToken()
        } else {
            this.signErrorObserverNotify(err)
        }
    }
    onAuthStateChange = (successCB, signErrorCB) => {
        this.signObservers.push(successCB)
        if (this._initialized) successCB(this.user)
        signErrorCB && this.signErrorObservers.push(signErrorCB)
        return () => {
            this.signErrorObservers.splice(this.signErrorObservers.length - 1, 1)
            this.signObservers.splice(this.signObservers.length - 1, 1)
        }
    }
    //   emailPasswordSignIn(data, callback) {

    //   }

    oauth(provider, callback = () => { }) {
        // OAuth2(provider, (e, d) => {
        //   this.signInCallback(e, d)
        //   callback(e, d)
        // }).login()
    }

    //   emailPasswordSignUp(data, callback) {
    //     // cognitoSignUp(data, callback)
    //   }
    //   _refreshSession() {
    //     return new Promise((res, rej) => {
    //       const RT = refreshToken.get()
    //       if (RT)
    //         cognitoRefreshSession(RT, (err, data) => {
    //           if (err) rej(err)
    //           else {
    //             res(data)
    //           }
    //         })
    //       else rej(new Error("No refresh token found"))
    //     })
    //   }

    signOut() {
        //     idToken.remove()
        //     setGlobalLoader(true)
        //     revokeToken(refreshToken.get(), (err, data) => {
        //       refreshToken.remove()
        //       if (err) console.log(err)
        //       else {
        //         this.setUserFromIdToken()
        //         window.location.href =
        //           process.env.REACT_APP_API_AUTH_ENDPOINT +
        //           `/logout?client_id=2msia8lds7enqe1cqutubt1l4s&logout_uri=${
        //             process.env.NODE_ENV === "development"
        //               ? process.env.REACT_APP_LOGOUT_REDIRECT_URI_DEV
        //               : process.env.REACT_APP_LOGOUT_REDIRECT_URI_PROD
        //           }`
        //       }
        //       setGlobalLoader(false)
        //     })
    }
}

export default new Auth()
