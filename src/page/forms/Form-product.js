import '../../css/main.css'
import Header from '../../component/Header';
import { useState } from 'react';
function FormPruduct(){
    const [form,setForm]= useState({
     name:"",
     desc:"",
     qty :"",
     price:""
    });

    const handlecahnge=(e)=>{
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(form);
    }

    return(
        <Header>
        <p className='mt-8 font-medium text-lg text-white'>Form Product</p>
        <form  onSubmit={handlesubmit}>
        <input type="file" name='name'  placeholder="Type here" className="input mt-5 bg-[#303030] text-white input-bordered input-sm w-full "/>
        <input type="text" name='name' handlecahnge={handlecahnge} value={form.name} placeholder="Type here" className="input mt-5 bg-[#303030] text-white input-bordered input-sm w-full "/>
        <textarea name='desc' handlecahnge={handlecahnge}  className="input mt-5 bg-[#303030] input-bordered input-sm w-full  text-white" rows={3}>{form.desc}</textarea>
        <input type="text" handlecahnge={handlecahnge} value={form.qty} name='qty' placeholder="Type here" className="input mt-5 bg-[#303030] text-white input-bordered input-sm w-full "/>
        <input type="text" handlecahnge={handlecahnge} value={form.qty} name='price' placeholder="Type here" className="input mt-5 bg-[#303030] text-white input-bordered input-sm w-full "/>
        <button type='submit' className='mt-6 bg-green-500 font-semibold text-white w-full rounded'>save</button>
        </form>
        </Header>
    );
}

export default FormPruduct;