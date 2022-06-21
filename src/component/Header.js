import "../css/main.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"


function Header(props) {
const a ="text-white";
const b="text-red-500";
const user = useSelector((state)=>state);
// console.log(user);

  return (
    <>
    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col bg-[#0B0B0B]">
  
    <div className="w-full navbar bg-[#0B0B0B] ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2"><img alt="logo" src="/Frame.png" className="w-10 h-10" /></div>
      <div className="flex-none hidden lg:block">
        <ul className=" gap-10 pr-5 menu-horizontal">
        <li><NavLink to="/" className={({ isActive }) => isActive ? b : a}>Home</NavLink></li>
        {user.status==='ADMIN' ? <Navadmin></Navadmin> :"" }
        <li><NavLink to="/complain" className={({ isActive }) => isActive ? b : a}>Complain</NavLink></li>
          <li><NavLink to="/profile" className={({ isActive }) => isActive ? b : a}>Profil</NavLink></li>
          <li><button className=" text-white">Logout</button></li>
        </ul>
      </div>
    </div>
    {/* content here */}
    <div className="px-4">
   {props.children}
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100"> 
     <li><NavLink to="/" className={({ isActive }) => isActive ? b : a}>Home</NavLink></li>
        <li><NavLink to="/product" className={({ isActive }) => isActive ? b : a}>Product</NavLink></li>
          <li><NavLink to="/complain" className={({ isActive }) => isActive ? b : a}>Complain</NavLink></li>
          <li><NavLink to="/categori" className={({ isActive }) => isActive ? b : a}>Categori</NavLink></li>
          <li><NavLink to="/profile" className={({ isActive }) => isActive ? b : a}>Profil</NavLink></li>
          <li><button className=" text-white">Logout</button></li>
    </ul>
  </div>
</div>
    </>
  );
}



function Navadmin(){
  return(
    <>
    <li><NavLink to="/product" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Product</NavLink></li>
          <li><NavLink to="/categori" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Categori</NavLink></li>
    </>
  )}


export default Header;
