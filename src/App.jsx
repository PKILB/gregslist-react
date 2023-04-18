import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'


export function App() {

  return (
    <div className="App" id="app">
      <header>
        <Navbar />
      </header>

      <main className='bg-custom-primary'>
        <Outlet />
      </main>

      <footer className="bg-success text-black text-center p-3 ">
        Made with 💖 by CodeWorks
      </footer>

    </div>
  )
}
