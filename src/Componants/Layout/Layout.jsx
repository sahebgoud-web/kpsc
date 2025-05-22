import React from 'react';
import Header from '../Header';
import BannerCarousel from '../BannerCarousel';
import MarqueeSection from '../MarqueeSection';
import FeatureGrid from '../FeatureGrid';
import Kpscoverview from '../Kpscoverview';
import AboutMalnadAcademy from '../AboutMalnadAcademy';
import TeamSection from '../TeamSection';
import TestimonialsSection from '../TestimonialsSection';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

function Layout () {
  return (
    <div>
      <Header/>
      <BannerCarousel/>
      <FeatureGrid />
      <MarqueeSection />
      <Kpscoverview />
      <AboutMalnadAcademy />
      <TeamSection />
      <TestimonialsSection />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Layout;
