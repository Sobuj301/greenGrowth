import About from '@/components/ui/About';
import Banner from '@/components/ui/banner/Banner';
import Skills from '@/components/ui/Skills';
import React from 'react';
import Services from '@/components/ui/Services';
import Portfolio from '@/components/ui/Portfolio';
import ContactForm from '@/components/ui/contactForm/ContactForm';

const HomePage = () => {


  return (
    <div className='flex min-h-screen flex-col '>
      <section>
      <Banner />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>

      <section id='contact'>
       <ContactForm />
      </section>

      <section id='services'>
        <Services />
      </section>
    </div>
  );
};

export default HomePage;