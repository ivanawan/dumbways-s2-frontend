import  { useContext} from 'react';
import { Navigate} from 'react-router-dom';
import UserContext from "./context"; 

export const Islogin = ({children}) => {    
    const user= useContext(UserContext)
    if(user.get.login === false){
        console.log("if1" ,user);
        return  <Navigate to="/login" />
    }
    return  children ;    
};


export const Isadmin = ({children}) => {    
    const user= useContext(UserContext)  
    if( user.get.role !== "ADMIN"){
    if(user.get.login === false){
        console.log("if2",user);
        return  <Navigate to="/login" />
    }
      console.log("if3",user);
     return  <Navigate to="/" />
    }
    return  children ;    
};


export const Notlogin = ({children}) => {    
    const user= useContext(UserContext)
    if(user.get.login === true){
        console.log("if4",user);
        return  <Navigate to="/" />
    }
    return  children ;
};

