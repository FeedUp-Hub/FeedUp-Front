import axios from "axios"

export const api = axios.create({
  baseURL: "https://9b1a-2804-5d0-8105-4f00-2dcc-c777-68ee-a971.ngrok-free.app/",
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning"
  }
})

