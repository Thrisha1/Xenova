"use client";
import jwtDecode from "jwt-decode"

class Token {
  constructor(type) {
    this.type = type
  }
  getExpiry = token => {
    try {
      console.log(token)
      let tokenDecoded = jwtDecode(token)
      let exp = tokenDecoded.exp
      let expiry = new Date().valueOf() - new Date(exp * 1000).valueOf()

      ///consollleee
      console.log(expiry)
      return expiry
    } catch (e) {
      console.log(e)
    }
  }

  isValid() {
    let token = this.get()
    if (token === null) {
      return false
    }

    let expiry = this.getExpiry(token)
    if (expiry <= 0) {
      return true
    } else {
      return false
    }
  }

  get = () => {
    if (typeof window !== "undefined")
      return localStorage.getItem(this.type)
  }

  getData = () => {
    let token = this.get()
    if (token) return jwtDecode(token)
    else return null
  }

  set = token => {

    if (typeof window !== "undefined")
      localStorage.setItem(this.type, token)
  }

  remove = () => {
    if (typeof window !== "undefined")
      localStorage.removeItem(this.type)
  }
}
export default Token
