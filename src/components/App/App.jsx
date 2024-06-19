import React from 'react';
import "./App.css";

// fonts
import "../../fonts/fonts.css"

// img
import doubleQuote from "../../assets/double-quote.svg"

// components
import Page from './../Page/Page';
import Header from './../Header/Header';
import Navigation from './../Navigation/Navigation';
import Hero from './../Hero/Hero';
import Logos from './../Logos/Logos';
import Testimonial from './../Testimonial/Testimonial';
import Features from './../Features/Features';
import Video from './../Video/Video';
import Pricing from './../Pricing/Pricing';
import FAQ from './../FAQ/FAQ';
import Accordion from './../Accordion/Accordion';
import CTA from './../CTA/CTA';
import Footer from './../Footer/Footer';



const App = () => {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Logos />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">TechSavvy Solutions</p>
        </div>
        <img className="testimonial__quotes" src={doubleQuote} alt="quote" />
      </Testimonial>
      <Features />
      <Testimonial></Testimonial>
      <Video />
      <Testimonial></Testimonial>
      <Pricing />
      <Testimonial></Testimonial>
      <FAQ>
        <Accordion />
      </FAQ>
      <Testimonial></Testimonial>
      <CTA />
      <Footer />
    </Page>
  )
}

export default App