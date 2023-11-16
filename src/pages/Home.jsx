import React from 'react'
import Nav from '../components/Nav'
import FetchApi from './FetchApi'

const Home = () => {
  return (
    <>
    <Nav />
    <div>
        <h1>Portfolio</h1>
        <h2>นายณัฐพงศ์ รั้วมั่น</h2>
        <FetchApi/>
    </div>
    </>
  )
}

export default Home