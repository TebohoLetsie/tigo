import {combineReducers} from "redux"
import {userLoginReducer,userRegisterReducer} from "./users";

export default combineReducers({
    userLogin: userLoginReducer,
    userRegister : userRegisterReducer
})