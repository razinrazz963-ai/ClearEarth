export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SubService {
  name: string;
  description: string;
  items?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  scope: 'On-Shore & Off-Shore' | 'Workforce Development' | 'Precision & Calibration';
  items: {
    title: string;
    description: string;
    details?: string[];
  }[];
}

export interface FeaturedService {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  linkId: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  category: string;
  description: string;
  audience: string;
}

export interface OverviewCategory {
  number: string;
  title: string;
  description: string;
  iconName: string;
  linkId: string;
}

export interface MainServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  bullets: string[];
  category: string;
}

export interface PopularTrainingProgram {
  id: string;
  title: string;
  iconName: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  nameEn: string;
  nameAr: string;
  tagline: string;
  phone1: string;
  phone1Display: string;
  phone2: string;
  phone2Display: string;
  phone3?: string;
  phone3Display?: string;
  email: string;
  emailAlt?: string;
  locationEn: string;
  locationAr: string;
  addressEn: string;
  addressAr: string;
  whatsapp: string;
  whatsappLink: string;
}

export interface Signee {
  name: string;
  role: string;
  subRole?: string;
}

export interface StandardServiceItem {
  title: string;
  description: string;
}

export interface CompanyIntroduction {
  greeting: string;
  introParagraph1: string;
  introParagraph2: string;
  introParagraph3: string;
  introParagraph4: string;
  regards: string;
  signees: Signee[];
  qualityPolicy: {
    title: string;
    description: string;
    bgImage: string;
  };
  vision: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    description: string;
  };
  standardsOfServices: {
    title: string;
    items: StandardServiceItem[];
  };
}

export interface CommercialLicenseDetails {
  licenseNo: string;
  companyNameEn: string;
  companyNameAr: string;
  businessNameEn: string;
  businessNameAr: string;
  licenseCategoryEn: string;
  licenseCategoryAr: string;
  legalTypeEn: string;
  legalTypeAr: string;
  expiryDate: string;
  issueDate: string;
  dcciNo: string;
  registerNo: string;
  mainLicenseNo: string;
  managerEn: string;
  managerAr: string;
  nationalityEn: string;
  nationalityAr: string;
  sharePercentage: string;
  activityEn: string;
  activityAr: string;
  statusEn: string;
  statusAr: string;
  parcelId: string;
  addressEn: string;
  addressAr: string;
  phone: string;
  email: string;
  qrCodeUrl?: string;
  documentImage: string;
}

export interface ActivityDivisionItem {
  id: string;
  name: string;
  description?: string;
  iconName?: string;
}

export interface ActivityDivision {
  id: string;
  divisionNumber: string;
  title: string;
  subtitle?: string;
  themeColor: 'green' | 'blue';
  items: ActivityDivisionItem[];
}

export interface FullTrainingCourse {
  id: string;
  title: string;
  category: string;
  description: string;
  duration?: string;
  certification?: string;
  highlights?: string[];
}

export interface EquipmentShowcaseItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs?: string[];
}

export interface InstrumentationShowcaseItem {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
}

export interface GovernmentApprovalItem {
  id: string;
  authority: string;
  title: string;
  approvalType: string;
  docNumber?: string;
  date?: string;
  status: string;
  summary: string;
  documentImage?: string;
  pdfUrl?: string;
  isPlaceholder?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

