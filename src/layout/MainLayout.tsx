import Footer from '@/AllComponent/Footer'
import NavBar from '@/AllComponent/NavBar'
import React from 'react'
import { Outlet } from 'react-router'

const MainLayout: React.FC = () => {
  return (
    <main>
        <NavBar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default MainLayout
