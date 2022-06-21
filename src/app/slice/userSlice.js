import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false,
    name:"",
    email:"",
    token:"",
    status:""
}

// const  initialState =[
//     {id:"1",name:"patric",email:"email"},
//     {id:"2",name:"spongbob",email:"email"},
//     {id:"3",name:"syma",email:"email"}
// ]

const userSlice= createSlice({
 name:"users",
 initialState,
 reducers:{
    userAdd(state,action){
        const data= action.payload;
        state.login=data.login;
        state.name=data.name;
        state.email=data.email;
        state.token=data.token;
        state.status= data.status;
    },
    userlogout(state){
        state.login=false;
        state.name="";
        state.email="";
        state.token="";
        state.status="";
    }
 }
});

export const {userAdd,userlogout}= userSlice.actions;
export default userSlice.reducer;