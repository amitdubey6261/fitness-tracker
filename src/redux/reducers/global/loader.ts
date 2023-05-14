import {createReducer} from '@reduxjs/toolkit';

const initialStage = {
    loading : false ,
}

export const loader = createReducer( initialStage ,{
    startLoading : ( state  )=>{
        state.loading = true ;
    } , 

    stopLoading : (state  )=>{
        state.loading = false ;
    } 
})