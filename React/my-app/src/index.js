import  ReactDOM  from "react-dom";
import './index.css'
import { Provider } from "react-redux";


// import Forprops from './Forprops'
// import ReactForms from './ReactForms'
// import Assignment1 from './Assignment1';
// import Forref from './Forref'
// import Context from "./Context";
//  import Forportals from './Forportals'
//  import Foruseeffect from './Foruseeffect'
//  import Foruseeffect2 from './Foruseeffect2'
//  import Stateassignment from './Stateassignment'
//  import Stateassignment2 from './stateassignment2'
//  import Stateassignment3 from '../src/first project/Componenets/stateassignment3'
//  import Staaateassignment from './first project/Componenets/staaateassignment'
//  import Maincomponent from './Maincomponent'
// import App from './App';
// import ForState from './ForState'
// import Appp from './FoodOrderingProject/Appp'
// import React from "react";
// import ToCountNumberBackward from './18-04-2022/ToCountNumberBackward'
// import ToCountNumberForward from './18-04-2022/ToCountNumberForward'
// import MainFileForhooks from './18-04-2022/MainFileForhooks'
// import Form from "./21-04-2022/FormsProject/Form";
// import ForForms from "./21-04-2022/ForForms"
// import OnBlur from "./21-04-2022/ForForms"
// import Checkout from "./FoodOrderingProject/Checkout"
// import reduxstore from './redux6'
// import Counter from './redux5'
import store from './18-05-2022/Store/redux-store'
import App from './18-05-2022/App'




ReactDOM.render( 
    <Provider store={store}>
        <App/>
    </Provider> 
    , document.getElementById('root'));
    
            