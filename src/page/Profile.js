import '../css/main.css'
import Header from '../component/Header';

function Profile(){
    return(
 <Header>
<div className='flex'>
    <div className='w-[50%] pl-7 h-[88vh]'>
<p className=' text-red-500 text-xl font-medium'>
    My Profile
</p>
<div className=' flex mt-5'>
<img src="/profile.jpg" className='aspect-[4/5] object-cover w-72' alt="" />
<div className=' w-full pl-4'>
<div className=' flex flex-col text-white'>
<div className=' '>
        <p className=' text-red-500 font-semibold'>Name</p>
        <p>ivan setiawan</p>
    </div> 
    <div className='mt-3'>
        <p className=' text-red-500 font-semibold'>email</p>
        <p>ivansetiawan@gmail.com</p>
    </div>
    <div className='mt-3'>
        <p className=' text-red-500 font-semibold'>Phone</p>
        <p>081392554252</p>
    </div>
    <div className='mt-3'>
        <p className=' text-red-500 font-semibold'>Gender</p>
        <p>Male</p>
    </div>
    <div className='mt-3'>
        <p className=' text-red-500 font-semibold'>Alamat</p>
        <p> kec cilongok kab. banyumas prov jawa tengah</p>
    </div>
</div>
</div>
</div>
    </div>
    <div className='w-[50%]   px-5 h-[88vh]'>
    <p className=' text-red-500 text-xl font-medium'>
    My Transaction
</p>

<div className=' bg-[#303030] mt-5  gap-4 h-36 flex justify-between'>
<div className='flex gap-3 p-3'>
<img src="/profile.jpg" className=' aspect-square object-cover' alt="" />
<div className='flex flex-col gap-4'>
    <div className=''>
    <p className='text-red-500 font-semibold'>Name</p>
    <p className='text-red-500 font-semibold'>Saturday <span className=' font-normal'>9 juli 2022</span></p>
    <p className='text-white'>price: 500.000</p>
    </div>
    <p className='text-white  justify-end'>Sub Total: 500.000</p> 
</div>
    </div>
    <div className=' mr-8'>
  <img src="/Frame.png" className='h-32 w-[11rem] pt-2' alt="" />
    </div>
</div>
    </div>
    </div>  
 </Header>
    );
}

export default Profile;