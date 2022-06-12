import '../css/main.css'
import Header from '../component/Header';

function Complain(){
    return(
 <Header>
<div className='flex gap-6'>
    <div className='w-[30%]  h-[88vh]'>
    <div className=' bg-[#303030] h-20 flex rounded'> 
      <img src="/profile.jpg" className=' rounded-full aspect-square p-2 object-cover' alt="" />
      <p className='text-white mt-6 font-bold text-lg ml-2'>Mba admin</p>
    </div>
    </div>
    <div className='w-[70%]   h-[79vh]'>
    <div className='h-full overflow-y-auto'>

    <div >
    <p className=' bg-slate-800 text-white px-2 py-3 rounded w-fit max-w-[50%]'> kjhkjhgkjhg</p>
    </div>

    

    <div className='flex justify-end mt-2'>
    <p className=' bg-slate-400 text-white px-2 py-3 rounded w-fit max-w-[50%]'>kjhkjhgkjhg</p>
    </div>

    <div className='flex justify-end mt-2'>
    <p className=' bg-slate-400 text-white px-2 py-3 rounded w-fit max-w-[50%]'>kjhkjhgkjhg</p>
    </div>


    </div>
    <div className='flex'>
    <input type="text" placeholder="Type here" className="input mt-5 bg-[#303030] input-bordered rounded-r-none  w-full "/>
    <button className=' bg-slate-700 text-white h-12 mt-5 w-10 rounded-r'><i className="ri-send-plane-fill"></i></button>
    </div>
    </div>
    </div> 

 </Header>
    );
}

export default Complain;