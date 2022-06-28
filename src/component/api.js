import swal from 'sweetalert';
// import axios from 'axios'
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import {useNavigate} from "react-router-dom";


// export function api(api){

// // console.log(api);
//    return axios({
//         method: api.method,
//         url: `http://${window.location.hostname}:5000/${api.url}`,
//         data: api.data,
//         headers: {
//             "Access-Control-Allow-Origin": "http://localhost:3000",
//             "Content-Type": api.type === undefined ? "application/json":api.type,
//             "Authorization":`Bearer ${api.token === undefined ? "" : api.token}`
//         },
//     })
//         .catch((err) => {
//             swal("Failed!", err.message,"error");
//         });
//     }


 export  function check(res){  
    //  console.log(res);
        // console.log(res?.message === "error on token");
        if (res?.data.status === "error" || res?.data.status === "failed") {
            if(res?.data.message === "error on token"){
                // console.log('navigate');
                window.location.href = '/logout';
            }
                    swal("Failed!", res?.data.message, "error");
            }
    }

    // function Navigate(){
    // const  navigate = useNavigate();
    // return navigate('/logout',{replace:true});
    // }

//  export const useData=(route)=>{
//     const [data,setData]=useState();
//     const user = useSelector((state)=>state);
//     useEffect(()=>{
//         axios({
//             method:'GET',
//             url: `http://${window.location.hostname}:5000/${route}`,
//             headers: {
//                 "Access-Control-Allow-Origin": "http://localhost:3000",
//                 "Content-Type": "application/json",
//                 "Authorization":`Bearer ${user.token}`
//             },
//         }).then((res)=>{
//              check(res);
//              setData(res.data.data)
//         }).catch((err) => {
//                 swal("Failed!", err.message,"error");
//             });
//     },[]);

//     return data;
//  }

// export function api(api){
//    return axios({
//         method: api.method,
//         url: `http://${window.location.hostname}:5000/${api.url}`,
//         data: api.data,
//         headers: {
//             "Access-Control-Allow-Origin": "http://localhost:3000",
//             "Content-Type": api.type === undefined ? "application/json":api.type,
//             "Authorization":`Bearer ${api.token}`
//         },
//     })
//         .catch((err) => {
//             swal("Failed!", err.message,"error");
//         });
//     }
