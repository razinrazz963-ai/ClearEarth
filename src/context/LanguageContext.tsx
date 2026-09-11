import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  Language,
  OverviewCategory,
  MainServiceCard,
  PopularTrainingProgram,
  Industry,
  ProcessStep,
  WhyChooseUsItem,
  CompanyInfo,
  NavItem,
  CompanyIntroduction,
  CommercialLicenseDetails,
  ActivityDivision,
  EquipmentShowcaseItem,
  InstrumentationShowcaseItem,
  FullTrainingCourse,
  GovernmentApprovalItem,
  GalleryItem,
} from '../data/types';
import {
  companyInfo,
  navItemsEn,
  heroContentEn,
  aboutContentEn,
  quickOverviewEn,
  mainServicesEn,
  popularTrainingEn,
  industriesEn,
  whyChooseUsEn,
  processStepsEn,
  uiEn,
  companyIntroductionEn,
  commercialLicenseEn,
  activityDivisionsEn,
  equipmentShowcaseEn,
  instrumentationShowcaseEn,
  fullTrainingCoursesEn,
  governmentApprovalsEn,
  galleryItemsEn,
  assessmentTrainingItems,
} from '../data/contentEn';

export type UIStrings = typeof uiEn;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  navItems: NavItem[];
  heroContent: typeof heroContentEn;
  aboutContent: typeof aboutContentEn;
  companyIntroduction: CompanyIntroduction;
  commercialLicense: CommercialLicenseDetails;
  activityDivisions: ActivityDivision[];
  quickOverview: OverviewCategory[];
  mainServices: MainServiceCard[];
  popularTraining: PopularTrainingProgram[];
  fullTrainingCourses: FullTrainingCourse[];
  equipmentShowcase: EquipmentShowcaseItem[];
  instrumentationShowcase: InstrumentationShowcaseItem[];
  governmentApprovals: GovernmentApprovalItem[];
  galleryItems: GalleryItem[];
  assessmentTraining: typeof assessmentTrainingItems;
  industries: Industry[];
  whyChooseUs: WhyChooseUsItem[];
  processSteps: ProcessStep[];
  companyInfo: CompanyInfo;
  ui: UIStrings;
  openQuoteModal: (preselectedService?: string) => void;
  quoteModalOpen: boolean;
  closeQuoteModal: () => void;
  preselectedService: string;
  licenseModalOpen: boolean;
  openLicenseModal: () => void;
  closeLicenseModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [licenseModalOpen, setLicenseModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const isRTL = false;

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.documentElement.classList.remove('rtl');
  }, []);

  const toggleLanguage = () => {
    // Kept as no-op or default to 'en' per user instruction "no need of arabic website"
    setLanguageState('en');
  };

  const setLanguage = (_lang: Language) => {
    setLanguageState('en');
  };

  const openQuoteModal = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    } else {
      setPreselectedService('');
    }
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
    setPreselectedService('');
  };

  const openLicenseModal = () => {
    setLicenseModalOpen(true);
  };

  const closeLicenseModal = () => {
    setLicenseModalOpen(false);
  };

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    setLanguage,
    isRTL,
    navItems: navItemsEn,
    heroContent: heroContentEn,
    aboutContent: aboutContentEn,
    companyIntroduction: companyIntroductionEn,
    commercialLicense: commercialLicenseEn,
    activityDivisions: activityDivisionsEn,
    quickOverview: quickOverviewEn,
    mainServices: mainServicesEn,
    popularTraining: popularTrainingEn,
    fullTrainingCourses: fullTrainingCoursesEn,
    equipmentShowcase: equipmentShowcaseEn,
    instrumentationShowcase: instrumentationShowcaseEn,
    governmentApprovals: governmentApprovalsEn,
    galleryItems: galleryItemsEn,
    assessmentTraining: assessmentTrainingItems,
    industries: industriesEn,
    whyChooseUs: whyChooseUsEn,
    processSteps: processStepsEn,
    companyInfo,
    ui: uiEn,
    openQuoteModal,
    quoteModalOpen,
    closeQuoteModal,
    preselectedService,
    licenseModalOpen,
    openLicenseModal,
    closeLicenseModal,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
