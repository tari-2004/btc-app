import { Metadata } from 'next';

import  Navbar  from './components/navbar';

import  Hero  from './components/hero-section';

import  AboutUs  from './components/about';

import  LatestSermon  from './components/sermons';

import  TeachingSeries  from './components/teaching';

import  UpcomingEvents  from './components/events';

import  GiveSection  from './components/give';

// import  Footer  from './components/footer';







export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian bg-depth-radial selection:bg-gold-base/30 selection:text-gold-light">
      
  
      <section id="apply">
        <Navbar />
      </section>

      <section id="apply">
        <Hero />
      </section>

      <section id="apply">
        <AboutUs />
      </section>

      <section id="apply">
        <LatestSermon />
      </section>

      <section id="apply">
        <TeachingSeries />
      </section>

      <section id="apply">
        <UpcomingEvents />
      </section>

      <section id="apply">
        <GiveSection />
      </section>

      {/* <section id="apply">
        <Footer />
      </section> */}

    </main>
  );
};

