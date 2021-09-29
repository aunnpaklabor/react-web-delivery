import React from 'react'
import Annoucement from '../components/Annoucement/Annoucement'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Slider from '../components/Slider/Slider'

export default function Home() {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories />
            <Menu />
            <Newsletter />
            <Footer />
        </div>
    )
}
