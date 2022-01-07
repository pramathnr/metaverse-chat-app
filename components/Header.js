import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";


function Header() {
    const {user} = useMoralis();
    return (
        <div className="text-black sticky rounded-br-2xl rounded-bl-2xl top-0 p-5 z-50 bg-gradient-to-b from-pink-500 to-yellow-500 shadow-sm border-b-2 border-black">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid border-4 border-black rounded-full" >
                    <Image src="https://wallpaperaccess.com/full/7547942.jpg" layout="fill" className="rounded-full" objectFit="cover"/>
                </div>
            
                <div className="text-left lg:text-center col-span-4">
                    <div className="relative h-48 w-48 lg:mx-auto border-black border-8 rounded-full">
                        <Avatar logoutOnPress/>
                    </div>
                    <h1 className="text-3xl">Welcome to the METAVERSE</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    <ChangeUsername/>
                </div>
            </div>
        </div>
    )
}

export default Header
