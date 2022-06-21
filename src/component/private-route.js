
import { Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";

export const Islogin = ({children}) => {    
    const user = useSelector((state)=>state);
    if(user.login === false){
        console.log("if1" ,user);
        return  <Navigate to="/login" />
    }
    return  children ;    
};


export const Isadmin = ({children}) => {    
    const user = useSelector((state)=>state);
    if( user.role !== "ADMIN"){
    if(user.login === false){
        console.log("if2",user);
        return  <Navigate to="/login" />
    }
      console.log("if3",user);
     return  <Navigate to="/" />
    }
    return  children ;    
};


export const Notlogin = ({children}) => {    
    const user = useSelector((state)=>state);
    if(user.login === true){
        console.log("if4",user);
        return  <Navigate to="/" />
    }
    return  children ;
};

