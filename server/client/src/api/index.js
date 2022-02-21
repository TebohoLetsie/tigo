import axios from "axios";

const url = "http://localhost:5000";

const calc = 'http://localhost:5000/calculate';
const user1 = "http://localhost:5000/users"

export const PostLogin = (data)=>{axios.post(url,data)}
export const calculate = (data)=>{axios.post(calc,data)}
export const user = (data)=>{axios.post(user1,data)}
