import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();

   if(!isAuthenticated)return <Login/>

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Chat App</title>
        <link rel="icon" href="https://iconape.com/wp-content/png_logo_vector/metaverse-etp-etp-logo.png" />
      </Head>
      <h1>Welcome to app</h1>
      <button onClick={logout}>Logout</button>
      
    </div>
  )
}
