import '../css/main.css';
import Header from '../component/Header';
// import { useContext, useEffect } from 'react';
// import UserContext from '../component/context';
// import { useNavigate } from 'react-router-dom';

function Product(){
    return (
<Header>
<div className='flex justify-between mt-4'>
     <p className='mt-3 font-medium text-lg text-white'>List Product</p>
     <a href='/product/form' className=' text-white bg-green-500 rounded pt-1 px-2'>Tambah</a>
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
  <tr className="bg-[#232323] hover:bg-[#303030] border-b border-gray-600">
    <td className="px-4 py-3">1</td>
    <td className="px-4 py-3">Smith khjkj kjhk</td>
    <td className="px-4 py-3">Smith khjkj kjhk</td>
    <td className="px-4 py-3">Smith khjkj kjhk</td>
    <td className="px-4 py-3">1.000.000</td>
    <td className="px-4 py-3">600</td>
    <td className="px-4 py-3 flex gap-3"> <a href='/' className='bg-green-500 rounded px-7 py-[1px] font-medium'>Edit</a> <a href="/" className='bg-red-500 rounded px-7 py-[1px] font-medium'>Delete</a></td>
  </tr>    
  
</tbody>
</table>
     {/* </div> */}
</Header>
    );
}

export default Product;