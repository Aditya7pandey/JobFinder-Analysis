import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    apiOneData : [],
    apiTwoData : [],
};

export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        //reducer 1
        setApiOneData:(state,action) =>{
            state.apiOneData = action.payload
        },

        //reducer 2
        setApiTwoData :(state,action) =>{
            state.apiTwoData = action.payload
        },
    }
})

export const {setApiOneData,setApiTwoData} = dataSlice.actions
export default dataSlice.reducer