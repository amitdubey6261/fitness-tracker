import {configureStore} from '@reduxjs/toolkit';

import { loader } from './reducers/global/loader';

const store = configureStore({
    reducer : {
        loader : loader , 
    } , 
})

export default store ; 