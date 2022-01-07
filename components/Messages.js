import { useRef } from "react";
import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis";
import Message from "./Message";
import SendMessages from "./SendMessages";

function Messages() {
    const {user} = useMoralis();
    const endOfMessageRef = useRef(null);
    const {data, loading, error} = useMoralisQuery(
        'Messages',
        (query) => query.ascending("createdAt"),
        [],{
            live: true,
        }
    );
    // console.log(data)
    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis style={{marginLeft: "auto", marginRight:"auto"}}/>
            </div>
            <div className="space-y-10 p-4">
                {data.map(message=>(
                    <Message key={message.id} message={message}/>
                ))}
            </div>
            <div className="flex justify-center">
                <SendMessages endOfMessageRef={endOfMessageRef}/>
            </div>
            <div className="text-gray-400 text-center mt-5" ref={endOfMessageRef}>
                <p>You're up to date {user.getUsername()} ❤️🧡💚</p>
            </div>
        </div>
    )
}

export default Messages
