import {createReducer} from '@reduxjs/toolkit';

const initialStage = {
    loading : false ,
}

export const loader = createReducer( initialStage ,{
    startLoading : ( state  , action )=>{
        state.loading = true ;
    } , 

    stopLoading : (state , action )=>{
        state.loading = false ;
    } 
})