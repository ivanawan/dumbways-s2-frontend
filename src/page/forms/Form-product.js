import '../../css/main.css'
import Header from '../../component/Header';
function FormPruduct(){
    return(
        <Header>
        <p className='mt-8 font-medium text-lg text-white'>Form Product</p>
        <input type="file" placeholder="Type here" className="input mt-5 bg-[#303030] input-bordered input-sm w-full "/>
        <input type="text" placeholder="Type here" className="input mt-5 bg-[#303030] input-bordered input-sm w-full "/>
        <input type="text" placeholder="Type here" className="input mt-5 bg-[#303030] input-bordered input-sm w-full "/>
        <input type="text" placeholder="Type here" className="input mt-5 bg-[#303030] input-bordered input-sm w-full "/>
        <button className='mt-6 bg-green-500 font-semibold text-white w-full rounded'>save</button>
        </Header>
    );
}

export default FormPruduct;