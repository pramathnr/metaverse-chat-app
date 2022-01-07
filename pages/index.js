import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const {isAuthenticated} = useMoralis();

   if(!isAuthenticated)return <Login/>

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black via-fuchsia-700 to-pink-700 overflow-hidden">
      <Head>
        <title>Metaverse Chat App</title>
        <link rel="icon" href="https://iconape.com/wp-content/png_logo_vector/metaverse-etp-etp-logo.png" />
      </Head>
      <div className="max-w-screen-2xl mx-5">
        <Header/>
        <Messages/>
      </div>
    </div>
  )
}
