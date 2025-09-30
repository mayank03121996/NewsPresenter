import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Compontents/Footer'
import Navbar from './Compontents/Navbar'
import HomePage from './Pages/HomePage'
export default function () {
    return (
        <BrowserRouter basename="NewsPresenter">
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

