
import { useState } from "react";
import { useMoralis } from "react-moralis"

function SendMessages({endOfMessageRef}) {
    const {user, Moralis} = useMoralis();
    const [message, setMessage] = useState("");
    const sendMessages = (e) =>{
        e.preventDefault();
        if (!message) return;
        const Messages = Moralis.Object.extend('Messages');
        const messages = new Messages();
        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress"),
        }).then((message) => {

        });
        endOfMessageRef.current.scrollIntoView({behavior: "smooth"});
        setMessage("");
    };
    return (
        <form className="flex w-11/12 fixed bottom-10 bg-black rounded-full opacity-80 px-6 py-4 max-w-2xl shadow-xl border-4 border-blue-400">
            <input className=" flex-grow pr-5 outline-none bg-transparent text-white placeholder-gray-500" 
            type="text" 
            placeholder={`Heyy ${user.getUsername()} enter a message 😄`}
            value={message}
            onChange={e => setMessage(e.target.value)}/>
            <button className="font-bold text-indigo-600 " type="submit" onClick={sendMessages}>Send</button>
        </form>
    )
}

export default SendMessages
