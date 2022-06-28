import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false,
    id:0,
    name:"",
    email:"",
    token:"",
    status:""
}

const userSlice= createSlice({
 name:"users",
 initialState,
 reducers:{
    userAdd(state,action){
        const data= action.payload;
        state.login=data.login;
        state.id=data.id;
        state.name=data.name;
        state.email=data.email;
        state.token=data.token;
        state.status= data.status;
    },
    userlogout(state){
        state.login=false;
        state.id=0;
        state.name="";
        state.email="";
        state.token="";
        state.status="";
    }
 }
});

export const {userAdd,userlogout}= userSlice.actions;
export default userSlice.reducer;
