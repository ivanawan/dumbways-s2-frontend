import { useState, useContext, useEffect } from "react";
import UserContext from "../component/context";
import { useNavigate } from "react-router-dom";
import "../css/main.css";
import axios from "axios";
import swal from "sweetalert";
import { data } from "autoprefixer";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });// for hadle form 
  const [loding, setLoding] = useState(false); // for hadle loading 
  const [visiblity,setVisibility]= useState(false); //for handle visibility password
  const user = useContext(UserContext); // for hadle contect
  let navigate = useNavigate();

  // useEffect(()=>{
  //  if(user.get.login=== true){
  //   navigate('/',{replace:true});
  //  }
  // });
  //handle submit and send data to api
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoding(true);
    axios({
      method: "POST",
      url: "http://localhost:5000/user/login",
      data: form,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status === "error" || res.data.status === "failed") {
          swal("login Failed!", res.data.message, "error");
        } 
        if(res.data.status === "success"){
          updateContext(res.data.data);
          console.log("kjhkjhg",res.data.data,user.get);
          navigate("/", { replace: true });
        }
        setLoding();
      })
      .catch((err) => {
        setLoding(false);
        swal("login failed!", err.message,"error");
      });
  };

 const updateContext=(data)=>{
  user.setUser({
    ...user.get,
    login:true,
    id:data.id,  
    token:data.token,
    name:data.name,
    role:data.role
  });
 };

  //save all change to state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#0B0B0B] debug-screens">
      <div className="container-form ">
        <div className="item1 ">
          <img alt="logo" className="h-40 w-40" src="/Frame.png" />

          <p className=" text-4xl font-semibold mt-5 text-white">
            Easy, Fast and Reliable
          </p>
          <p className=" text-sm text-[#6A6A6A]">
            Go shopping for merchandise, just go to dumb merch<br></br>{" "}
            shopping. the biggest merchandise in Indonesia{" "}
          </p>
          <div className=" flex gap-4 mt-10">
            <a
              href="/login"
              className="rounded px-7 inline-block h-8 pt-1 font-medium text-white bg-red-500 "
            >
              Login
            </a>
            <a href="/register" className="pt-1 text-white font-medium">
              Register
            </a>
          </div>
        </div>
        <div className="item2">
          {/* //form */}
          <form onSubmit={handleSubmit}>
            <p className=" text-xl font-semibold text-white">Login</p>
            <div className="my-5 w-full max-w-sm mx-auto">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="input text-white input-bordered rounded bg-[#D2D2D2]/25  input-sm w-full "
              />
            <div className="relative">
              <i onClick={()=>setVisibility(!visiblity)} className={visiblity ? "ri-eye-line eye" :"ri-eye-close-line eye" }></i>
              <input
                type={visiblity ? "text":"password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered rounded bg-[#D2D2D2]/25 mt-2 text-white input-sm w-full "
                />
                </div>
            </div>
            {loding ? (
              <button
                type="submit"
                className=" bg-red-400 w-full rounded text-white text-center h-8"
              >
                <div className="loader"></div>
              </button>
            ) : (
              <button
                type="submit"
                className=" bg-red-500 w-full rounded text-white text-center h-8"
              >
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
