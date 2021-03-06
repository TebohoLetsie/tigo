import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const userInfoFromStorage = localStorage.getItem('useInfo') 
?  JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    userLogin : {userInfo: userInfoFromStorage}
}

const store = createStore(reducers, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():f=>f));

ReactDOM.render(<Provider store={store}>
<App />
</Provider>,document.getElementById("root"));