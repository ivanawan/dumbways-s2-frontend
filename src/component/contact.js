
function Contact({ dataContact, clickContact}){
    // console.log(dataContact);
    // const actifClass=" bg-red-400/20 mt-5 h-20 flex rounded"
    const imageNull='/profil.jpeg'
    return(
        <>
            <div className='bg-[#303030] mt-5 h-20 flex rounded' onClick={()=>{ clickContact(dataContact)}} key={dataContact?.name}>
                <img src={dataContact?.Profil === null ? imageNull:`http://${window.location.hostname}:5000/public/image/${dataContact?.Profil.image}`} className=' rounded-full aspect-square p-2 object-cover' alt="" />
                <p className='text-white mt-6 font-bold text-lg ml-2'>{dataContact.name}</p>
            </div>
        </>
    )
}

export  default  Contact;
