import '../css/main.css';

function Star(props){
   // di jadiin 100% kemudian dibagi 20
let nilai=70/20;
const starfull="text-yellow-400 ri-star-fill";
const starhalf="text-yellow-400 ri-star-half-fill";
const deft="ri-star-fill";

   return(
      <div className=' flex gap-1'>
      <i className={nilai >= 1 ? starfull: nilai >= 0.5 ? starhalf : deft }></i>
      <i className={nilai >= 2 ? starfull: nilai >= 1.5 ? starhalf : deft }></i>
      <i className={nilai >= 3 ? starfull: nilai >= 2.5 ? starhalf : deft }></i>
      <i className={nilai >= 4 ? starfull: nilai >= 3.5 ? starhalf : deft }></i>
      <i className={nilai >= 5 ? starfull: nilai >= 4.5 ? starhalf : deft }></i>
      <p className='text-sm text-white font-bold ml-1'>{nilai}</p>
      </div>
   );
}

export default Star;
