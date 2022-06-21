import '../../css/main.css'
import Header from '../../component/Header';
import { useState } from 'react';
function FromCategori(){
    const [kategori ,setKategori] =useState("");

    const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(kategori);
    }

    return(
        <Header>
        <p className='mt-8 font-medium text-lg text-white'>Form Kategori</p>
        <form onSubmit={handlesubmit}>
        <input onChange={(e)=>{setKategori(e.target.value)}} type="text" placeholder="Type categori here" className="input mt-5 text-white bg-[#303030] input-bordered input-sm w-full " />
        <button type='submit' className='mt-6 bg-green-500 font-semibold text-white w-full rounded'>save</button>
        </form>
        </Header>
    );
}

export default FromCategori;