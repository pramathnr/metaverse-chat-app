import Image from "next/image";
import { useMoralis } from "react-moralis"

function Avatar({username, logoutOnPress}) {
    const {user, logout} = useMoralis();
    return <Image src={`https://avatars.dicebear.com/api/avataaars/${username || user.get("username")}.svg`} layout="fill" 
    onClick={() => logoutOnPress && logout()}
    className="rounded-full bg-slate-300 cursor-pointer hover:opacity-75"/>
}

export default Avatar
