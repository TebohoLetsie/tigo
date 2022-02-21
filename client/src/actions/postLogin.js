import axios from "axios"
import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL} from "../constants/userContants"

export const login = (email,password) => async(dispatch) => {
    try{
        console.log("login dispatch working");
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config={ 
            headers:{
            'content-Type':'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:5000/login',{email,password})

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        
       
        localStorage.setItem('userInfo',JSON.stringify(data));

    }
    catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
//register

export const register = (firstname,lastname,email,password) => async(dispatch) => {
    try{
        console.log("register dispatch working");
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config={
            headers:{
                'content-Type':'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:5000/register',{firstname,lastname,email,password})

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        
       
        localStorage.setItem('userRegister',JSON.stringify(data));

    }
    catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}