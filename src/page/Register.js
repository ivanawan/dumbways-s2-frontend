import { useState, useContext, useEffect} from "react";

import { useNavigate } from "react-router-dom";
import "../css/main.css";
import axios from "axios";
import swal from "sweetalert";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loding, setLoding] = useState(false);
  const [visiblity,setVisibility] =useState(false);
  // const user = useContext(UserContext);
  let navigate = useNavigate();

  // useEffect(()=>{
  //   if(user.get.login=== true){
  //    navigate('/',{replace:true});
  //   }
  //  });

  // hadle submit and send data toa api
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoding(true);
    axios({
      method: "POST",
      url: "http://localhost:5000/user/register",
      data: form,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setLoding(false);
        if (res.data.status === "error" || res.data.status === "failed") {
          swal("login Failed!", res.data.message, "error");
        } 
        //  if(res.data.status === "success"){
        //   user.setUser({
        //     ...user.get,
        //     login:true,
        //     address: res.data.data.address,
        //     email: res.data.data.email,
        //     id: res.data.data.id,
        //     gender: res.data.data.gender,
        //     image: res.data.data.image,
        //     token: res.data.data.token,
        //     name: res.data.data.name,
        //     phone: res.data.data.phone,
        //     role: res.data.data.role,
        //   });
        //   console.log("kjhkjhg",user);
        //   navigate("/", { replace: true });
        // }
      })
      .catch((err) => {
        setLoding(false);
        swal("login failed!", err.message,"error");
      });
  };

  //save all change from input to state
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
          <form onSubmit={handleSubmit}>
            <p className=" text-xl font-semibold text-white">Register</p>
            <div className="my-5 w-full max-w-sm mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Username"
                onChange={handleChange}
                className="input input-bordered text-white rounded bg-[#D2D2D2]/25  input-sm w-full "
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="input input-bordered rounded text-white bg-[#D2D2D2]/25  mt-2 input-sm w-full "
              />
              <div className=" relative">
             <i onClick={()=>setVisibility(!visiblity)} className={visiblity ? "ri-eye-line eye" :"ri-eye-close-line eye" }></i>
              <input
                 type={visiblity ? "text":"password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="input input-bordered  text-white rounded bg-[#D2D2D2]/25 mt-2 input-sm w-full "
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
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
