import '../css/main.css'
import Header from '../component/Header';
import { io } from 'socket.io-client'
import {useEffect, useState} from "react";
import Contact from "../component/contact";
import {useSelector} from "react-redux";
import ChatLayout from "../component/chatlayout";


let socket;
function Complain(){
    const [contact, setContact] = useState(null)
    const [contacts, setContacts] = useState([])
    const [messages, setMessages] = useState([])
    const [form ,setForm]=useState("");
    const user = useSelector((state)=>state);

    console.log("contacts data => " ,contacts);
    console.log("contact data => " ,contact);
    console.log("message data => " ,messages);
    console.log("user=> ", user);

    useEffect(()=>{
        socket = io(`${process.env.REACT_APP_URL}`, {
            auth: { token: user.token }
        })

        socket.on("new message", () => {
            socket.emit('load messages', contact?.id)
        })

        loadContact()
        loadMessages()

        socket.on('connect_error', (err)=>{
            console.error(err)
        })

        return () =>{
            socket.disconnect()
        }
    },[messages]);

    const loadMessages=()=>{
        socket.on('messages', async (data) => {
            if(data.length > 0){
                setMessages(data)
            }else{
                setMessages([])
                loadContact()
            }
        })
    }
    const loadContact = () => {
        // emit event to load  contact
        socket.emit(`load ${user.status === "ADMIN"? "MEMBER" : "ADMIN"} contact`)
        // listen event to get  contact
        socket.on(`${user.status === "ADMIN"? "MEMBER" : "ADMIN"} contact`, (data) => {
            setContacts(data);
        })
    }

    const onClickContact = (data) => {
        setContact(data);
        socket.emit('load messages', data.id);
    }

    const onSendMessage = (e) => {
        e.preventDefault();
            const data = {
                idreceiver: contact.id,
                chat: form
            }
           console.log(data);

            socket.emit('send message', data)
            setForm("");
    }

    const listContact=contacts.map(item=>
        <Contact dataContact={item}  clickContact={onClickContact}/>
    );


    return(
 <Header>
<div className='flex gap-6 h-[76vh]'>
    <div className='w-[30%] '>
        {listContact}
    </div>
    <div className='w-[70%] '>
    <div className='h-full overflow-y-auto'>

  <ChatLayout datachat={messages} iduser={user.id}/>

    </div>
    {contact === null ? "":
    <form onSubmit={onSendMessage}>
    <div className='flex'>
    <input type="text" value={form} onChange={(e)=>{setForm(e.target.value)}} placeholder="Type here" className="input text-white mt-5 bg-[#303030] input-bordered rounded-r-none  w-full "/>
    <button type={"submit"} className=' bg-slate-700 text-white h-12 mt-5 w-10 rounded-r'><i className="ri-send-plane-fill"></i></button>
    </div>
       </form>
    }
    </div>
    </div>

 </Header>
    );
}



export default Complain;
