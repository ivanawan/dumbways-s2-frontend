function  ChatLayout({datachat,iduser}){
    console.log(datachat, iduser)
    return(
        <>
            {datachat.map((chat)=>
                <div key={chat.id} className={chat.idsender === iduser ? "flex justify-end mt-2":"mt-2"}>
                    <p className=' bg-slate-800 text-white px-2 py-3 rounded w-fit max-w-[50%]'>{chat.chat}</p>
                </div>
            )}

            {/*<div className='flex justify-end mt-2'>*/}
            {/*    <p className=' bg-slate-400 text-white px-2 py-3 rounded w-fit max-w-[50%]'>kjhkjhgkjhg</p>*/}
            {/*</div>*/}

            {/*<div className='flex justify-end mt-2'>*/}
            {/*    <p className=' bg-slate-400 text-white px-2 py-3 rounded w-fit max-w-[50%]'>kjhkjhgkjhg</p>*/}
            {/*</div>*/}
        </>
    )
}

export  default  ChatLayout;
