import '../css/main.css';
import Header from '../component/Header';
import axios from '../component/axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { check } from '../component/api';
import swal from "sweetalert";

function Product(){
  const user = useSelector((state)=>state);
  axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

  const {data} =useQuery('product',async () => {
   return await axios.get(`/product`);
 })

 const bntDelete=(id)=>{
     swal(`Delete Product id ${id}`,'are you sure ?' ,"warning").then((value)=>{
           if(value){
               axios.delete(`/product/${id}`).then((res)=>{
                  check(res);
                  if(res.data.status === "success") {
                      swal(`Delete Product id ${id}`,"success","success");
                  }
               });
           }
     });
  };

 check(data);

 console.log(data);
  const listItems = data?.data.data.products.map((product,i) =>
  <tr className="custtable" key={product.id}>
  <td >{i+1}</td>
  <td className=' flex justify-center items-center h-full '><img src={`${process.env.REACT_APP_URL}/public/image/${product.image}`} alt="" className='h-13 aspect-video' /></td>
  <td >{product.title}</td>
  <td >{product.desc}</td>
  <td >{product.price}</td>
  <td >{product.qty}</td>
  <td className="px-4 py-3 flex gap-3 self-center"> <a href={'/product/edit/'+ product.id} className='bg-green-500 rounded px-7 py-[1px] font-medium'>Edit</a> <button onClick={()=>{bntDelete(product.id)}} className='bg-red-500 rounded px-7 py-[1px] font-medium'>Delete</button></td>
</tr>
  );
    return (
<Header>
<div className='flex justify-between mt-4'>
     <p className='mt-3 font-medium text-lg text-white'>List Product</p>
    <div className=" gap-3">
        <a href='/product/softdelete' className=' text-white bg-blue-500 rounded pt-1 px-2 mr-4'>Softdelete</a>
        <a href='/product/form' className=' text-white bg-green-500 rounded pt-1 px-2'>Tambah</a>
    </div>
   </div>
     {/* <div className='overflow-x-auto'> */}
     <table className="rounded-t m-5 w-full table-fixed  mx-auto bg-[#303030] text-gray-200">
         <colgroup>
         <col span="1" className=" w-[3%]"/>
         <col span="1" className=" w-[17%]"/>
         <col span="1" className=" w-[20%]"/>
         <col span="1" className=" w-[20%]"/>
         <col span="1" className=" w-[10%]"/>
         <col span="1" className=" w-[10%]"/>
         <col span="1" className=" w-[20%]"/>
         </colgroup>
       <thead>
  <tr className="text-left border-b border-gray-300">
    <th className="px-4 py-3 ">No</th>
    <th className="px-4 py-3 ">Photo</th>
    <th className="px-4 py-3">Product Name</th>
    <th className="px-4 py-3">Product Desc</th>
    <th className="px-4 py-3">Price</th>
    <th className="px-4 py-3">Qty</th>
    <th className="px-4 py-3">Action</th>
  </tr>
</thead>
<tbody>
  {listItems}
</tbody>
</table>
</Header>
    );
}

export default Product;
