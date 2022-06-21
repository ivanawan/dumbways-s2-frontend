import '../css/main.css'
import Header from '../component/Header';
function Detail(){
return(
<Header>
    <div className='flex gap-6 mt-10 mb-4'>
        <div className='w-[50%]'> 
        <img src="/profile.jpg" className=' ml-28 w-[25rem] h-[30rem]  object-cover' alt="" />
        </div>
        <div className='w-[50%]'>
        <p className=' text-red-500 text-3xl font-semibold'>Mose</p>
        <p className=' text-white'>Stok 600</p>
        <p className=' mt-10 h-60 text-white'>
         ladgsf ksadjfg sdkfhg sdfghksdgf hksadfgh ksdfg dfkgh dfgkh fdghkjdfhngdfsgkh sdfkghj sdfgk dfsgkjdsfgh skdfjg sdkfg dsfkg sdkgf fsd gkdfjgkjsdfhkdjf fdgkjfdhg dfkgjskdjf
        </p>
        <p className='mt-10 text-2xl  text-red-500 font-medium text-right'>IDR 500.000</p>
        <button className=' mt-10 bg-red-500 text-white w-full rounded font-bold h-8'>Buy Now</button>
        </div>
    </div>
</Header>
);
}

export default Detail;