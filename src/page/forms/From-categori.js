import '../../css/main.css'
import Header from '../../component/Header';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "../../component/axios";
import {useSelector} from "react-redux";
import {check} from "../../component/api";


function FromCategori(){
    const [kategori ,setKategori] =useState("");
    const user = useSelector((state)=>state);
    const {id} = useParams();
    const navigate = useNavigate();
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    useEffect(()=>{
        if(id !== undefined){
            axios.get(`/category/${id}`).then((res)=>{
                check(res);
                console.log(res);
                setKategori(res.data.data.category.name);
            });
        }
    },[]);

    const handlesubmit=(e)=>{
    e.preventDefault();
        if(id !== undefined){
            axios.put(`/category/${id}`,{name:kategori}).then((res)=>{
                check(res);
                navigate('/category');
            });
        }else {
            axios.post('/category',{name:kategori}).then((res)=>{
                console.log(res)
                check(res);
                navigate('/category');
            });
        }

    }

    return(
        <Header>
        <p className='mt-8 font-medium text-lg text-white'>Form Kategori</p>
        <form onSubmit={handlesubmit}>
        <input onChange={(e)=>{setKategori(e.target.value)}} value={kategori} type="text" placeholder="Type categori here" className="input mt-5 text-white bg-[#303030] input-bordered input-sm w-full " />
        <button type='submit' className='mt-6 bg-green-500 font-semibold text-white w-full rounded'>save</button>
        </form>
        </Header>
    );
}

export default FromCategori;
