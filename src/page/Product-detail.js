import '../css/main.css'
import Header from '../component/Header';
import { check } from '../component/api';
import axios from '../component/axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import swal from 'sweetalert';


function Detail(){
    const user = useSelector((state)=>state);
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    const {id} = useParams();
    const navigate= useNavigate();
    const {data} =useQuery('productDetail',async () => {
     return await axios.get(`/product/${id}`);
   })  
   check(data);
   
   useEffect(()=>{
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = "SB-Mid-client-4HI3uiV9g8Vf0PvA";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };

   });

const buyNow=()=>{
   axios.post('/transaction',{
        "idProduct": data?.data.data.product.id,
        "idSeller": data?.data.data.product.iduser,
        "price": data?.data.data.product.price
      }).then(res=>{
     check(res);

      window.snap.pay((res.data.data.transaction.payment.token), {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        swal("payment","successfull","success");
        navigate('/profil');
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate('/profil');
        //   history.push("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });

      });
}

    
return(
<Header>
    <div className='flex gap-6 mt-7 mb-7'>
        <div className='w-[50%]'> 
        <img src={`http://${window.location.hostname}:5000/public/image/${data?.data.data.product.image}`} className=' ml-28 w-[25rem] h-[30rem]  object-cover' alt="" />
        </div>
        <div className='w-[50%]'>
        <p className=' text-red-500 text-3xl font-semibold'>{data?.data.data.product.title}</p>
        <p className=' text-white'>{data?.data.data.product.qty}</p>
        <p className=' mt-10 h-56 text-white'>
        {data?.data.data.product.desc}
        </p>
        <p className='mt-10 text-2xl  text-red-500 font-medium text-right'>IDR {data?.data.data.product.price}</p>
        <button onClick={buyNow} className=' mt-10 bg-red-500 text-white w-full rounded font-bold h-8'>Buy Now</button>
        </div>
    </div>
</Header>
);
}

export default Detail;