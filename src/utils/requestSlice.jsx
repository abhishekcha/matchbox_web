import { createSlice } from "@reduxjs/toolkit";

const requestSlice=createSlice({
    name:'requests',
    initialState:null,
    reducers:{
        addRequests:(state,action)=>action.payload,
        removeConnections:()=>null,
    }
});

export const{addRequests,removeConnections}=requestSlice.actions;
export default requestSlice.reducer;