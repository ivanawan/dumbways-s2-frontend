import '../css/main.css'
import Header from '../component/Header';
import {useSelector} from "react-redux";
import axios from "../component/axios";
import {useQuery} from "react-query";
import {check} from "../component/api";


function Profile(){
    const user = useSelector((state)=>state);
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    const {data} =useQuery('getProfil',async () => {
        return await axios.get(`/user/profil`);
    })
    check(data);
    const imageNull="/profil.jpeg";
    
    let { data: transactions, refetch: transactionsRefetch } = useQuery(
        "transactionsCache",
        async () => {
          const config = {
            method: "GET",
          };
          const response = await axios.get("/transaction");
          return response.data;
        }
      );

const transactionsList = (transactions?.data.transaction.map(item=>
    // console.log(item.Product?.title)
<div className=' bg-[#303030] mt-5  gap-4 h-36 flex justify-between '>
<div className='flex gap-3 p-3 '>
<img src="/profile.jpg" className=' aspect-square object-cover' alt="" />
<div className='flex flex-col gap-4'>
    <div className=''>
    <p className='text-red-500 font-semibold'>{item?.Product.title}</p>
    <p className='text-red-500 font-semibold'>Saturday <span className=' font-normal'>9 juli 2022</span></p>
    <p className='text-white'>price:{item.price}</p>
    </div>
    <p className='text-white  justify-end'>Sub {item.price}</p>
</div>
    </div>
    <div className=' mr-8'>
  <img src="/Frame.png" className='h-32 w-[11rem] pt-2' alt="" />
    </div>
</div>
    ));

    // console.log(transactions?.data.transaction);
    return(
 <Header>
<div className='flex'>
    <div className='w-[50%] pl-7 h-[88vh]'>
<p className=' text-red-500 text-xl font-medium'>
    My Profile
</p>
<div className=' flex mt-5'>
<img src={data?.data.data?.Profil === null ? imageNull:`${process.env.REACT_APP_URL}/public/image/${data?.data.data?.Profil.image}`} className='aspect-[4/5] object-cover w-72' alt="" />
<div className=' w-full pl-4'>
<div className=' flex flex-col text-white'>
<div className=' '>
        <p className=' text-red-500 font-semibold'>Name</p>
        <p>{data?.data.data.name}</p>
    </div>
    <div className='mt-3'>
        <p className=' text-red-500 font-semibold'>email</p>
        <p>{data?.data.data.email}</p>
    </div>
    <div className='mt-3'>
        <p className=' text-red-500 font-semibold'>Phone</p>
        <p>{data?.data.data?.Profil===null ? "null": data?.data.data?.Profil.phone}</p>
    </div>
    <div className='mt-3'>
        <p className=' text-red-500 font-semibold'>Gender</p>
        <p>{data?.data.data?.Profil===null ? "null":data?.data.data?.Profil.gender}</p>
    </div>
    <div className='mt-3'>
        <p className=' text-red-500 font-semibold'>Alamat</p>
        <p> {data?.data.data?.Profil===null ? "null":data?.data.data?.Profil.address}</p>
    </div>
</div>
</div>
</div>
    </div>
    <div className='w-[50%]   px-5 h-[88vh]'>
    <p className=' text-red-500 text-xl font-medium'>
    My Transaction
</p>
{transactions?.data.transaction.map(item=>
    // console.log(item.Product?.title)
<div className=' bg-[#303030] mt-5  gap-4 h-36 flex justify-between ' key={item.id}>
<div className='flex gap-3 p-3 '>
<img src={`${process.env.REACT_APP_URL}/public/image/${item.Product.image}`} className=' aspect-square object-cover' alt="" />
<div className='flex flex-col gap-4'>
    <div className=''>
    <p className='text-red-500 font-semibold'>{item?.Product.title}</p>
    <p className='text-red-500 font-semibold'>Saturday <span className=' font-normal'>9 juli 2022</span></p>
    <p className='text-white'>price:{item.price}</p>
    </div>
    <p className='text-white  justify-end'>Sub {item.price}</p>
</div>
    </div>
    <div className='bg-white w-20 h-full'>
    <p className=' text-center mt-14'> pending</p>
    </div>
</div>
    )}
    </div>
    </div>
 </Header>
    );
}

export default Profile;
