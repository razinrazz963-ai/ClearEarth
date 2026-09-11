import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickOverview } from './components/QuickOverview';
import { About } from './components/About';
import { CompanyProfile } from './components/CompanyProfile';
import { InspectionCertification } from './components/InspectionCertification';
import { EquipmentSection } from './components/EquipmentSection';
import { InstrumentationSection } from './components/InstrumentationSection';
import { TrainingSection } from './components/TrainingSection';
import { AssessmentTraining } from './components/AssessmentTraining';
import { Industries } from './components/Industries';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { GovernmentApprovals } from './components/GovernmentApprovals';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CommercialLicenseModal } from './components/CommercialLicenseModal';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-brand-green/20 selection:text-brand-navy">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <QuickOverview />
          <About />
          <CompanyProfile />
          <InspectionCertification />
          <EquipmentSection />
          <InstrumentationSection />
          <TrainingSection />
          <AssessmentTraining />
          <Industries />
          <GallerySection />
          <WhyChooseUs />
          <Process />
          <GovernmentApprovals />
          <CTASection />
          <Contact />
        </main>

        <Footer />
        <QuoteModal />
        <CommercialLicenseModal />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}

export default App;
