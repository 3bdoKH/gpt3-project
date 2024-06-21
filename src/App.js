import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './components/index'
import { Footer, Header, Blog, Possibility, GPT3, Features } from './container/index'
import './app.css'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <GPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
