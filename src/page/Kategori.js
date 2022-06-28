import '../css/main.css'
import Header from '../component/Header';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from '../component/axios';
import { check } from '../component/api';
import swal from "sweetalert";


function Kategori(){
  const user = useSelector((state)=>state);
  axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

  const {data} =useQuery('kategori',async () => {
   return await axios.get(`/category`);
 })

    const btnDelete  = (id) => {
        swal(`Delete Product id ${id}`,'are you sure ?' ,"warning").then((value)=>{
            if(value){
                axios.delete(`/category/${id}`).then(res=>{
                check(res);
                   if(res.data.status === "success") {
                        swal(`Delete Product id ${id}`,"success","success");
                    }
               })
            }
        });

    }

 check(data);
    console.log(data);
 const listItems = data?.data.data.categories.map((kategori,i) =>
  <tr className="custtable" key={i}>
  <td >{i+1}</td>
  <td className="px-4 py-3">{kategori.name}</td>
  <td className="px-4 py-3 flex gap-3 self-center"> <a href={`/category/${kategori.id}`} className='bg-green-500 rounded px-7 py-[1px] font-medium'>Edit</a> <button onClick={ ()=>{btnDelete(kategori.id)}} className='bg-red-500 rounded px-7 py-[1px] font-medium'>Delete</button></td>
</tr>
  );

    return(
 <Header>
   <div className='flex justify-between mt-4'>
     <p className='mt-3 font-medium text-lg text-white'>List Categori</p>
     <a href='/category/form' className=' text-white bg-green-500 rounded pt-1 px-2'>Tambah</a>
   </div>
     <div className='overflow-x-auto'>
     <table className="rounded-t m-5 w-full table-fixed  mx-auto bg-[#303030] text-gray-200">
         <colgroup>
         <col span="1" className=" w-[10%]"/>
         <col span="1" className=" w-[70%]"/>
         <col span="1" className=" w-[20%]"/>
         </colgroup>
       <thead>
  <tr className="text-left border-b border-gray-300">
    <th className="px-4 py-3 ">No</th>
    <th className="px-4 py-3 ">Category Name</th>
    <th className="px-4 py-3">Action</th>
  </tr>
</thead>
<tbody>
{listItems}

</tbody>
</table>
     </div>
 </Header>
    );
}

export default Kategori;
