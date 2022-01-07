import Image from "next/image"
import Head from 'next/head'
import { useMoralis } from 'react-moralis'

function login() {

    const {authenticate} = useMoralis();

    return (
        <div className="bg-black relative">
            <Head>
                <title>Metaverse Chat App</title>
                <link rel="icon" href="https://iconape.com/wp-content/png_logo_vector/metaverse-etp-etp-logo.png" />
            </Head>
            {/* <h1>I am login</h1> */}
            <div className="flex flex-col absolute z-50 items-center h-4/6 justify-center w-full space-y-4">
                <Image src="https://wallpaperaccess.com/full/7547942.jpg" height={220} width={220} className="object-cover rounded-full"/>
                <button onClick={authenticate} className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg p-5 font-bold text-xl animate-pulse">Login to the METAVERSE</button>
            </div>
            <div className="w-full h-screen">
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
            </div>
        </div>
    )
}

export default login
