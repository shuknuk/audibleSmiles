import React from 'react'
import {Case, Contact, Footer, Happy, Hero, Navbar, Cards, Team, Testimonials, FRQ} from './sections'

  const App = () => {
    return (
          <main className='relative' >
              <Navbar/>
              <section className='section'><Hero/></section>
              <section className='section'><Cards/></section>
              <section className='section'><Case/></section>
              <section className='section'><FRQ/></section>
              <section className='section'><Team/></section>
              <section className='section'><Testimonials/></section>
              <section className='section'><Contact/></section>
              <Footer/>
          </main>
      
    )
  }

export default App