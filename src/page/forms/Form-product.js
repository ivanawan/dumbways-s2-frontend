import '../../css/main.css'
import Header from '../../component/Header';
import {useEffect, useState} from 'react';
import {mutlipart} from '../../component/axios';
// import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import {check} from "../../component/api";
import {useNavigate, useParams} from "react-router-dom";

function FormPruduct(){
    const [preview, setPreview] = useState(null);
    const user = useSelector((state)=>state);
    const [form,setForm]= useState({  image:"",  title:"", desc:"",   qty :"",  price:"" });
    const {id}= useParams();
    const navigate = useNavigate();
    mutlipart.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    useEffect(()=>{
       if(id !== undefined){
            mutlipart.get(`/product/${id}`).then((res)=>{
               check(res)
                // console.log(res?.data.data.product);
               setForm({ ...form,
                   title: res.data.data.product.title,
                   desc: res.data.data.product.desc,
                   qty:res.data.data.product.qty,
                   price:res.data.data.product.price
               });
               setPreview(`http://${window.location.hostname}:5000/public/image/${res.data.data.product.image}`);
            });

       }
    },[]);


    const Handlecahnge=(e)=>{
        setForm({ ...form, [e.target.name]:  e.target.type === "file" ? e.target.files[0] : e.target.value, });

        // Create image url for preview
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    }


    // const mutation = useMutation(Form => {
    //     return mutlipart.post('/product', Form)
    // });

    const handlesubmit=(e)=>{
        // console.log(form.image[0]);
        e.preventDefault();
      if(id!== undefined){
         let data = form;
         if(data.image ===""){
             delete data.image;
         }
          console.log(data);
          mutlipart.put(`/product/${id}`, form).then(reslt=>{
              check(reslt);
              navigate('/product');
          });
      }else{
        mutlipart.post('/product', form).then(reslt=>{
            check(reslt);
         navigate('/product');
        });
      }
    // mutation.mutate(form)
    }

    return(
        <Header>
        <p className='mt-8 font-medium text-lg text-white'>Form Product</p>
            <img alt=" priview" src={preview} className=" h-14 aspect-video" />
        <form  onSubmit={handlesubmit} >
        <input type="file" name='image' onChange={Handlecahnge} className="mt-5 "/>
        <input type="text" name='title' onChange={Handlecahnge} value={form.title} placeholder="Type name" className="input mt-5 bg-[#303030] text-white input-bordered input-sm w-full "/>
        <textarea name='desc' onChange={Handlecahnge} value={form.desc} placeholder="Description" className="input mt-5 bg-[#303030] input-bordered input-sm w-full h-14 text-white" ></textarea>
        <input type="text" onChange={Handlecahnge} value={form.qty} name='qty' placeholder="Type qty" className="input mt-5 bg-[#303030] text-white input-bordered input-sm w-full "/>
        <input type="text" onChange={Handlecahnge} value={form.price} name='price' placeholder="Type price" className="input mt-5 bg-[#303030] text-white input-bordered input-sm w-full "/>
        <button type='submit' className='mt-6 bg-green-500 font-semibold text-white w-full rounded'>save</button>
        </form>
        </Header>
    );
}

export default FormPruduct;
