import Star from "./Star"
function Card(props){
    return(
        <div className="card  bg-base-100 shadow-xl" >
        <figure><img className=' aspect-video' src={`http://${window.location.hostname}:5000/public/image/${props.image}`} alt="Shoes" /></figure>
        <div className="card-body rounded px-4 pb-3 bg-slate-800 text-white">
            <div className=' flex justify-between'>
            <p className=' font-medium'>IDR {props.price} </p>
            <Star/>
            </div>
          <h2 className="card-title">
            {props.title}
          </h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
           <div className="card-actions mt-6 justify-end">
          {/* <button className=' bg-red-500 text-white text-center py-1 font-boldhhjl w-full rounded-md'>Buy Now</button> */}
          </div>
        </div>
      </div>
    )
}

export default Card;
