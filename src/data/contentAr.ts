import type {
  ActivityDivision,
  CommercialLicenseDetails,
  CompanyInfo,
  CompanyIntroduction,
  Industry,
  MainServiceCard,
  NavItem,
  OverviewCategory,
  PopularTrainingProgram,
  ProcessStep,
  WhyChooseUsItem,
} from './types';
import { companyInfo } from './contentEn';

export const companyInfoAr: CompanyInfo = {
  ...companyInfo,
  nameAr: 'كلير ايرث لاستشارات السلامة ش.ذ.م.م',
  tagline: 'السلامة. الامتثال. الثقة.',
  locationAr: 'دبي، الإمارات العربية المتحدة',
  addressAr: 'مكتب رقم A-092 هور العنز والسطوة، دبي، الإمارات العربية المتحدة',
};

export const navItemsAr: NavItem[] = [
  { id: 'home', label: 'الرئيسية', href: '#home' },
  { id: 'profile', label: 'الملف التعريفي', href: '#profile' },
  { id: 'activities', label: 'أنشطة الشركة', href: '#activities' },
  { id: 'services', label: 'خدماتنا', href: '#services' },
  { id: 'training', label: 'التدريب', href: '#training' },
  { id: 'license', label: 'الرخصة التجارية', href: '#license' },
  { id: 'contact', label: 'اتصل بنا', href: '#contact' },
];

export const heroContentAr = {
  badge: 'واضح أرض شركة استشارات السلامة ذ.م.م',
  headline: 'السلامة. الامتثال. الثقة.',
  description: 'خدمات احترافية في الفحص الفني، إصدار الشهادات، التدريب والحلول الهندسية للسلامة في دولة الإمارات.',
  ctaQuote: 'طلب عرض أسعار',
  ctaServices: 'استكشف الخدمات',
  trustStrip: [
    'الفحص الفني',
    'إصدار الشهادات',
    'التدريب المهني',
    'أجهزة القياس',
  ],
};

export const aboutContentAr = {
  tag: 'عن واضح أرض',
  heading: 'حلول عملية وموثوقة لتعزيز السلامة والامتثال في دولة الإمارات',
  shortBio: 'شركة واضح أرض لاستشارات السلامة ذ.م.م، مقرها دبي، تقدم خدمات الفحص الفني المستقل، إصدار شهادات السلامة، التدريب العملي للكوادر، وحلول أجهزة القياس الصناعية.',
  commitmentTitle: 'نهج عملنا',
  commitmentText: 'ملتزمون بدعم المؤسسات في حماية الكوادر البشرية وضمان الكفاءة التشغيلية من خلال خدمات هندسية معتمدة.',
  pillars: [
    { title: 'سلامة بيئة العمل', desc: 'إشراف فني وقائي مصمم خصيصاً للبيئات والمشاريع الصناعية الحيوية.' },
    { title: 'سلامة الأصول والآليات', desc: 'فحص دقيق وشامل لكافة معدات الرفع والمعدات الثقيلة.' },
    { title: 'الامتثال للوائح والأنظمة', desc: 'توافق كامل مع المعايير واللوائح المعتمدة في دبي ودولة الإمارات.' },
    { title: 'تأهيل وجاهزية الكوادر', desc: 'برامج تدريبية وتأهيلية عملية ترفع مستوى الكفاءة والأمان في الموقع.' },
  ],
};

export const quickOverviewAr: OverviewCategory[] = [
  {
    number: '01',
    title: 'الفحص وإصدار الشهادات',
    description: 'فحص فني مستقل وإصدار شهادات معتمدة للمعدات والآلات الصناعية الحيوية.',
    iconName: 'ShieldCheck',
    linkId: 'services',
  },
  {
    number: '02',
    title: 'التدريب المهني والسلامة',
    description: 'برامج تدريبية وتأهيلية معتمدة لتطوير مهارات العاملين ورفع مستويات السلامة.',
    iconName: 'GraduationCap',
    linkId: 'training',
  },
  {
    number: '03',
    title: 'أجهزة القياس الصناعية',
    description: 'توريد ومعايرة وفحص واعتماد أجهزة القياس الحساسة والمعدات الدقيقة.',
    iconName: 'Gauge',
    linkId: 'services',
  },
];

export const mainServicesAr: MainServiceCard[] = [
  {
    id: 'lifting-equipment',
    title: 'فحص معدات الرفع',
    shortDesc: 'فحص شامل واختبارات أحمال دقيقة لكافة أنواع الرافعات البرجية والمتحركة والعلوية.',
    image: '/images/lifting-inspection.jpg',
    category: 'الفحص وإصدار الشهادات',
    bullets: [
      'الرافعات المتحركة والبرجية والرافعات المجنزرة',
      'الرافعات العلوية والجسور المتحركة',
      'الروافع والمصاعد الصناعية والونشات',
      'اختبارات الحمل وتحديد نسبة الانحناء الهيكلي',
      'فحص أنظمة الإيقاف الطارئ ومفاتيح الأمان',
    ],
  },
  {
    id: 'lifting-accessories',
    title: 'فحص ملحقات وأدوات الرفع',
    shortDesc: 'تقييم سلامة أحبال الرفع السلكية والشناكل والأحزمة النسيجية وأدوات التثبيت.',
    image: '/images/lifting-accessories.jpg',
    category: 'الفحص وإصدار الشهادات',
    bullets: [
      'أحبال الرفع السلكية وسلاسل الرفع الفولاذية',
      'الشناكل والمشابك وحلقات الرفع المعتمدة',
      'الأحزمة النسيجية وأحزمة الرفع الدائرية',
      'عارضات الرفع والملاقط الهندسية',
      'التحقق من حمولة التشغيل الآمنة (SWL) ووسمها',
    ],
  },
  {
    id: 'pressure-vessels',
    title: 'فحص أوعية الضغط',
    shortDesc: 'تقييم السلامة الهيكلية واختبارات السماكة لخزانات الهواء والمراجل والغلايات.',
    image: '/images/pressure-vessel.jpg',
    category: 'الفحص وإصدار الشهادات',
    bullets: [
      'خزانات ومستوعبات الهواء المضغوط',
      'المراجل البخارية والمبادلات الحرارية',
      'قياس سماكة الجدران بالموجات فوق الصوتية',
      'معايرة صمامات تنفيس الضغط والأمان',
      'الفحص البصري الداخلي والخارجي الدوري',
    ],
  },
  {
    id: 'earth-moving',
    title: 'فحص آليات تحريك التربة',
    shortDesc: 'فحص ميكانيكي وتشغيلي متكامل للحفارات والجرافات ومعدات المواقع الإنشائية.',
    image: '/images/heavy-equipment.jpg',
    category: 'الفحص وإصدار الشهادات',
    bullets: [
      'الحفارات الهيدروليكية وجرافات الحفر الخلفي',
      'الجرافات ذات العجلات والبلدوزرات والممهدات',
      'شاحنات النقل ومعدات المناولة والرافعات الشوكية',
      'التحقق من هياكل الحماية ضد الانقلاب (ROPS/FOPS)',
      'فحص الضغط الهيدروليكي وأنظمة الفرامل والتوجيه',
    ],
  },
  {
    id: 'scaffolding',
    title: 'فحص واعتماد السقالات',
    shortDesc: 'تدقيق سلامة السقالات، التحقق من التثبيت والاستقرار، وإصدار البطاقات الخضراء.',
    image: '/images/scaffolding.jpg',
    category: 'الفحص وإصدار الشهادات',
    bullets: [
      'التدقيق الإنشائي المستقل للسقالات',
      'فحص القواعد والألواح الأرضية ونقاط الارتكاز',
      'التأكد من سلامة روابط التثبيت والدرابزينات',
      'إجراءات الفحص الدوري والتعديلات الهيكلية',
      'إصدار بطاقات السلامة الخضراء للاستخدام الآمن',
    ],
  },
  {
    id: 'ndt-testing',
    title: 'الاختبارات غير الإتلافية (NDT)',
    shortDesc: 'كشف العيوب الداخلية والسطحية ولحامات الهياكل دون إلحاق أي ضرر بالأجزاء.',
    image: '/images/ndt-testing.jpg',
    category: 'الفحص وإصدار الشهادات',
    bullets: [
      'الفحص بالموجات فوق الصوتية (UT) للعيوب العميقة',
      'الفحص بالجزيئات المغناطيسية (MT) للشقوق السطحية',
      'فحص السوائل النافذة (PT)',
      'الفحص البصري الدقيق لجودة اللحام (VT)',
      'تقييم الوصلات الهيكلية والأنابيب المعدنية',
    ],
  },
  {
    id: 'safety-training',
    title: 'تدريب السلامة والمشغلين',
    shortDesc: 'برامج تأهيلية وعملية للمشغلين والكوادر الميدانية وفق معايير السلامة بدولة الإمارات.',
    image: '/images/training.jpg',
    category: 'التدريب والسلامة',
    bullets: [
      'تأهيل واعتماد مشغلي المعدات الثقيلة',
      'دورات مشغلي الرافعات ومشرفي الرفع',
      'تدريب المساعدين والإشارات (Rigger & Signalman)',
      'تأهيل مركبي ومشرفي السقالات المعتمدين',
      'الإسعافات الأولية ومكافحة الحرائق والأماكن المغلقة',
    ],
  },
  {
    id: 'instrumentation',
    title: 'أجهزة القياس والمعايرة',
    shortDesc: 'فحص وتوريد ومعايرة أجهزة القياس الصناعية والحساسات بدقة هندسية عالية.',
    image: '/images/instrumentation.jpg',
    category: 'أجهزة القياس',
    bullets: [
      'مقاييس ومحولات الضغط التناظرية والرقمية',
      'موازين الحرارة ومجسات درجات الحرارة الحساسة',
      'أجهزة قياس التدفق الكهرومغناطيسية والموجية',
      'أجهزة الاختبارات والقياسات الكهربائية (Megger)',
      'كواشف الغازات الثابتة والمحمولة مع شهادات المعايرة',
    ],
  },
];

export const popularTrainingAr: PopularTrainingProgram[] = [
  { id: 'tr-rigging', title: 'الرفع والتجهيز', iconName: 'Anchor', description: 'إشارات الرافعات، طرق ربط الأحمال، وحسابات مراكز الثقل بأمان.' },
  { id: 'tr-heavy-eq', title: 'المعدات الثقيلة', iconName: 'Truck', description: 'تشغيل الحفارات والجرافات والشاحنات ومعدات المواقع بكفاءة.' },
  { id: 'tr-scaffold', title: 'السقالات', iconName: 'Layers', description: 'التركيب والتعديل والتفكيك الآمن وإجراءات التفتيش والإشراف.' },
  { id: 'tr-hse', title: 'الصحة والسلامة (HSE)', iconName: 'ShieldAlert', description: 'تحليل سلامة العمل (JSA)، تقييم المخاطر، واستخدام معدات الوقاية.' },
  { id: 'tr-first-aid', title: 'الإسعافات الأولية', iconName: 'HeartPulse', description: 'الاستجابة لحالات الطوارئ، الإنعاش القلبي والرئوي، واستخدام مزيل الرجفان.' },
  { id: 'tr-fire', title: 'مكافحة الحرائق', iconName: 'Flame', description: 'أنواع الحرائق، استخدام طفايات الحريق، وخطط الإخلاء الآمن.' },
  { id: 'tr-confined', title: 'الأماكن المغلقة', iconName: 'Box', description: 'فحص الغازات، تصاريح الدخول، التهوية المناسبة، وإجراءات الإنقاذ.' },
  { id: 'tr-welding', title: 'أعمال اللحام', iconName: 'Zap', description: 'تأهيل اللحامين في مختلف الأوضاع (1G إلى 6G) وإجراءات الأمان.' },
];

export const industriesAr: Industry[] = [
  {
    id: 'ind-construction',
    title: 'الإنشاءات والبناء',
    description: 'فحص الرافعات البرجية، اعتماد السقالات، وتدريب عمال المشاريع الإنشائية الكبرى.',
    image: '/images/industry-construction.jpg',
  },
  {
    id: 'ind-oilgas',
    title: 'النفط والغاز',
    description: 'اعتماد أوعية الضغط، التدريب للمناطق الخطرة، وفحص المعدات البرية والبحرية.',
    image: '/images/industry-oilgas.jpg',
  },
  {
    id: 'ind-manufacturing',
    title: 'الصناعة والمصانع',
    description: 'فحص الرافعات العلوية، تدقيق سلامة المنشآت، وأجهزة قياس العمليات الصناعية.',
    image: '/images/industry-manufacturing.jpg',
  },
  {
    id: 'ind-infrastructure',
    title: 'البنية التحتية',
    description: 'إشراف هندسي دقيق لمشاريع الطرق والجسور وشبكات المرافق العامة.',
    image: '/images/industry-infrastructure.jpg',
  },
  {
    id: 'ind-heavyequipment',
    title: 'المعدات الثقيلة',
    description: 'فحص أساطيل الآليات وتأهيل المشغلين لمؤسسات وشركات تأجير المعدات.',
    image: '/images/industry-heavyequipment.jpg',
  },
  {
    id: 'ind-engineering',
    title: 'الهندسة والخدمات الفنية',
    description: 'فحص NDT الدقيق، اختبارات تأهيل اللحامين، والحلول الفنية التخصصية.',
    image: '/images/industry-engineering.jpg',
  },
];

export const whyChooseUsAr: WhyChooseUsItem[] = [
  {
    number: '01',
    title: 'منهجية مهنية واحترافية',
    description: 'التركيز على حلول سلامة عملية وموثوقة.',
  },
  {
    number: '02',
    title: 'أولوية السلامة دائماً',
    description: 'السلامة تمثل جوهر وقيمة كل خدمة نقدمها.',
  },
  {
    number: '03',
    title: 'خبرة فنية متكاملة',
    description: 'خدمات الفحص والتدريب والحلول الفنية تحت سقف واحد.',
  },
  {
    number: '04',
    title: 'خدمة موثوقة وسريعة',
    description: 'تواصل واضح، استجابة سريعة، وخدمات احترافية.',
  },
];

export const processStepsAr: ProcessStep[] = [
  {
    step: '01',
    title: 'أخبرنا باحتياجاتك',
    description: 'أرسل تفاصيل طلبك عبر الموقع أو واتساب أو باتصال مباشر.',
  },
  {
    step: '02',
    title: 'ندرس المتطلبات بدقة',
    description: 'يقوم فريقنا الهندسي بمراجعة مواصفات المعدات ونطاق العمل المطلوب.',
  },
  {
    step: '03',
    title: 'تحديد الموعد والجدول',
    description: 'نحدد موعد الفحص أو التدريب في موقعكم في الوقت المناسب بدولة الإمارات.',
  },
  {
    step: '04',
    title: 'تنفيذ الفحص أو التدريب',
    description: 'تنفيذ الخدمة ميدانياً بواسطة مهندسين معتمدين ومدربين مؤهلين.',
  },
  {
    step: '05',
    title: 'التقرير والشهادات الرسمية',
    description: 'تسليم تقارير الفحص الفنية التفصيلية وبطاقات السلامة والشهادات المعتمدة.',
  },
];

export const companyIntroductionAr: CompanyIntroduction = {
  greeting: 'عملاؤنا الأعزاء،',
  introParagraph1:
    'تأسست شركة كلير ايرث لاستشارات السلامة ش.ذ.م.م (واضح أرض) في إمارة دبي، دولة الإمارات العربية المتحدة، لتكون صرحاً موثوقاً وشريكاً استراتيجياً يسهم في تعزيز معايير السلامة الصناعية وتلبية متطلبات القطاعات المحلية والإقليمية. ونحن ملتزمون بتقديم أعلى مستويات الخدمة في مجالات الفحص الفني كطرف ثالث مستقل، استشارات السلامة والصحة المهنية، إصدار شهادات السلامة للمعدات، التقييم المهني، التدريب والتأهيل، بالإضافة إلى توريد ومعايرة أجهزة القياس للعمليات البرية والبحرية، بما في ذلك قطاعات النفط والغاز، البناء والتشييد، الطاقة، والمرافق الحيوية.',
  introParagraph2:
    'صُممت أهدافنا وبرامجنا لتلبي كافة متطلبات المستخدم النهائي والجهات التنظيمية. لقد طورنا فهماً عميقاً لاحتياجات العملاء، ونكرس جهودنا وخبراتنا على الدوام لنكون الأفضل في كل ما نقدمه لتحقيق الرضا المستدام لعملائنا وضمان أعلى درجات الأمان في مواقع العمل.',
  introParagraph3:
    'تتوافق خدماتنا الفنية بدقة مع المعايير والمواصفات الوطنية والدولية الصادرة عن الجهات الحكومية والتنظيمية؛ وانطلاقاً من التزامنا باشتراطات بلدية دبي واللوائح التنظيمية في دولة الإمارات والمعايير الدولية (ISO)، فإننا نبني جسور الثقة مع شركائنا عبر إنجاز أدق المتطلبات الفنية، ويسعدنا دائماً استمرار تعاوننا المثمر مع نخبة من المؤسسات الصناعية المرموقة.',
  introParagraph4:
    'يسرنا ويسعدنا أن نرحب بكم لتكونوا جزءاً من خدماتنا الواعدة، ونتطلع بثقة لمواصلة التطور والريادة معكم كشركة رائدة في مجال السلامة.',
  regards: 'مع خالص الشكر والتقدير،',
  signees: [
    {
      name: 'السيدة / كريستل الفاريل اكولا',
      role: 'المدير العام / المالك',
      subRole: 'مالك الحصص بنسبة 100%',
    },
    {
      name: 'المهندس / روديل لاوسين اكولا',
      role: 'المدير الفني',
      subRole: 'مهندس ميكانيكي',
    },
  ],
  qualityPolicy: {
    title: 'سياسة الجودة',
    description:
      'تسعى شركة كلير ايرث لاستشارات السلامة ش.ذ.م.م دائماً لتقديم أفضل مستويات الخدمة لجميع عملائها الكرام من خلال تطبيق نظام متكامل لإدارة الجودة والالتزام التام بالاشتراطات التنظيمية ومعايير الآيزو (ISO) واللوائح المعتمدة في دبي، مع المتابعة الدورية والتحديث المستمر لضمان أعلى درجات الامتثال والكفاءة.',
    bgImage: '/images/hero-industrial.jpg',
  },
  vision: {
    title: 'الرؤية',
    description:
      'أن نكون الخيار الرائد والنموذج المرجعي الأول في استشارات السلامة، الفحص الفني المستقل للمعدات، وتأهيل الكوادر الفنية في دولة الإمارات والمنطقة من خلال خدمات ذات جودة استثنائية، دقة في المواعيد، وتشغيل يتسم بأقصى معايير الأمان.',
  },
  mission: {
    title: 'الرسالة',
    description:
      'توفير نخبة من المهندسين المعتمدين والمفتشين الفنيين والمدربين المؤهلين لتلبية كافة تطلعات واحتياجات عملائنا عبر فريق عمل عالي الكفاءة يلتزم بأرفع المعايير البيئية ولوائح الصحة والسلامة المهنية المعتمدة.',
  },
  standardsOfServices: {
    title: 'معايير تقديم الخدمة',
    items: [
      {
        title: 'رضا وسعادة العملاء',
        description: 'التزام مطلق بتحقيق تطلعات العملاء وضمان أعلى درجات الأمان والتشغيل المستمر.',
      },
      {
        title: 'الدقة الهندسية المتناهية',
        description: 'دقة عالية في الفحص الميداني والمخبري والمعايرة وإصدار التقارير الفنية المعتمدة.',
      },
      {
        title: 'الالتزام التام بالوقت والمواعيد',
        description: 'سرعة الاستجابة والجاهزية الفورية للتحرك لكافة مواقع العمل في دولة الإمارات.',
      },
      {
        title: 'تشجيع التواصل المفتوح والشفافية',
        description: 'تعزيز قنوات المشورة الفنية المستمرة لرفع الإنتاجية وتطوير بيئة عمل آمنة ومثالية.',
      },
    ],
  },
};

export const commercialLicenseAr: CommercialLicenseDetails = {
  licenseNo: '1639056',
  companyNameEn: 'CLEAREARTH SAFETY CONSULTANCY L.L.C',
  companyNameAr: 'كلير ايرث لاستشارات السلامة ش.ذ.م.م',
  businessNameEn: 'CLEAREARTH SAFETY CONSULTANCY L.L.C',
  businessNameAr: 'كلير ايرث لاستشارات السلامة ش.ذ.م.م',
  licenseCategoryEn: 'Dep. of Economic Development (Dubai Economy & Tourism)',
  licenseCategoryAr: 'دائرة التنمية الاقتصادية (دبي للاقتصاد والسياحة)',
  legalTypeEn: 'Limited Liability Company - Single Owner (LLC - SO)',
  legalTypeAr: 'شركة ذات مسؤولية محدودة - الشخص الواحد (ش.ذ.م.م)',
  expiryDate: '30/07/2027',
  issueDate: '31/07/2026',
  dcciNo: '695698',
  registerNo: '2896808',
  mainLicenseNo: '1639056',
  managerEn: 'CHRISTEL ALVAREZ ACULA',
  managerAr: 'كريستل الفاريل اكولا',
  nationalityEn: 'Philippines',
  nationalityAr: 'الفلبين',
  sharePercentage: '100.00%',
  activityEn: 'Occupational Safety Consultancy',
  activityAr: 'استشارات السلامة والصحة المهنية',
  statusEn: 'Active',
  statusAr: 'فعال',
  parcelId: '127-345',
  addressEn: 'Hor Al Anz Office A-092 & Al Satwa, Dubai, UAE',
  addressAr: 'مكتب رقم A-092 هور العنز والسطوة، دبي، الإمارات العربية المتحدة',
  phone: '+971 54 739 9893',
  email: 'clearearthsafety@gmail.com',
  documentImage: '/images/commercial-license.png',
};

export const activityDivisionsAr: ActivityDivision[] = [
  {
    id: 'div-inspection',
    divisionNumber: '01',
    title: 'فحص واعتماد المعدات للعمليات البرية والبحرية',
    subtitle: 'فحص فني شامل كطرف ثالث واختبارات أحمال وإصدار شهادات الامتثال المعتمدة.',
    themeColor: 'green',
    items: [
      {
        id: 'lifting-eq',
        name: 'معدات الرفع',
        description: 'الرافعات المتحركة، البرجية، المجنزرة، الرافعات العلوية، وأوناش السحب.',
        iconName: 'Anchor',
      },
      {
        id: 'lifting-acc',
        name: 'ملحقات وأدوات الرفع',
        description: 'أحبال الرفع السلكية، السلاسل الفولاذية، الشناكل، والأحزمة النسيجية.',
        iconName: 'Link',
      },
      {
        id: 'pressure-vess',
        name: 'أوعية ومستودعات الضغط',
        description: 'خزانات الهواء المضغوط، الغلايات البخارية، صمامات الأمان وتصريف الضغط.',
        iconName: 'Gauge',
      },
      {
        id: 'earth-moving',
        name: 'آليات تحريك التربة',
        description: 'الحفارات، اللوادر، الجرافات، شاحنات التفريغ، ومداحل الدك.',
        iconName: 'Truck',
      },
      {
        id: 'scaffolding',
        name: 'فحص واعتماد السقالات',
        description: 'تدقيق سلامة وتثبيت السقالات، فحص القواعد، ومنح الكروت الخضراء.',
        iconName: 'Layers',
      },
      {
        id: 'ndt',
        name: 'الاختبارات غير الإتلافية (NDT)',
        description: 'فحص بالموجات فوق الصوتية (UT)، الجزيئات المغناطيسية (MT)، واختبار السوائل النافذة (PT).',
        iconName: 'ScanLine',
      },
    ],
  },
  {
    id: 'div-training',
    divisionNumber: '02',
    title: 'التقييم والتدريب المهني',
    subtitle: 'برامج تدريب وتأهيل المشغلين وشهادات الكفاءة في الصحة والسلامة.',
    themeColor: 'blue',
    items: [
      {
        id: 'tr-earth-moving',
        name: 'تدريب مشغلي آليات تحريك التربة',
        description: 'تشغيل الحفارات واللوادر والجرافات وفق أحدث معايير السلامة المهنية.',
        iconName: 'Truck',
      },
      {
        id: 'tr-lifting-eq',
        name: 'تدريب مشغلي معدات الرفع والرافعات',
        description: 'تأهيل واعتماد مشغلي الرافعات البرجية والمتحركة والعلوية.',
        iconName: 'Activity',
      },
      {
        id: 'tr-rigger',
        name: 'تدريب فنيي الربط والتوجيه (Rigger & Banksman)',
        description: 'الإشارات القياسية، حسابات الأحمال، واختيار طرق التثبيت الآمنة.',
        iconName: 'Radio',
      },
      {
        id: 'tr-scaffold-erect',
        name: 'تدريب مشرفي ومركبي السقالات',
        description: 'طرق التركيب والتعديل والتفكيك الآمن وفق المعايير القياسية.',
        iconName: 'Layers',
      },
      {
        id: 'tr-fire-fight',
        name: 'تدريب مكافحة الحرائق والإخلاء',
        description: 'استخدام أجهزة الإطفاء ميدانياً وإجراءات الاستجابة لحالات الطوارئ.',
        iconName: 'Flame',
      },
      {
        id: 'tr-hse',
        name: 'تدريب الصحة والسلامة والبيئة (HSE)',
        description: 'تحديد المخاطر، تقييم بيئة العمل، وتطبيق إجراءات الأمان الوقائية.',
        iconName: 'ShieldAlert',
      },
      {
        id: 'tr-heavy-eq',
        name: 'تدريب مشغلي المعدات الثقيلة',
        description: 'قواعد تشغيل وتوجيه الآليات الثقيلة وتجنب مخاطر الانقلاب.',
        iconName: 'Compass',
      },
      {
        id: 'tr-lifting-sup',
        name: 'تدريب مشرفي عمليات الرفع',
        description: 'إعداد خطط الرفع المعقدة وإدارة السلامة أثناء العمليات المشتركة.',
        iconName: 'Award',
      },
      {
        id: 'tr-welder',
        name: 'تدريب واعتماد اللحامين (1G إلى 6G)',
        description: 'تأهيل لحامي الهياكل والأنابيب بمختلف الأوضاع وفق المواصفات العالمية.',
        iconName: 'Zap',
      },
      {
        id: 'tr-first-aid',
        name: 'تدريب الإسعافات الأولية المعتمدة',
        description: 'الإنعاش القلبي الرئوي (CPR)، واستخدام أجهزة الصدمات والتعامل مع الإصابات.',
        iconName: 'HeartPulse',
      },
      {
        id: 'tr-confined-space',
        name: 'تدريب دخول الأماكن المغلقة',
        description: 'فحص الغازات، التهوية الإلزامية، تصاريح العمل، وخطط الإنقاذ السريع.',
        iconName: 'Box',
      },
      {
        id: 'tr-heavy-mech',
        name: 'تدريب ميكانيكي المعدات الثقيلة',
        description: 'تشخيص الأنظمة الهيدروليكية والميكانيكية والصيانة الوقائية الآمنة.',
        iconName: 'Wrench',
      },
    ],
  },
  {
    id: 'div-instrumentation',
    divisionNumber: '03',
    title: 'أجهزة القياس والمعايرة الصناعية',
    subtitle: 'توريد ومعايرة وفحص واعتماد أجهزة القياس الحساسة والمعدات الدقيقة.',
    themeColor: 'green',
    items: [
      {
        id: 'inst-pressure',
        name: 'أجهزة قياس الضغط (Pressure Gauges)',
        description: 'معايرة وفحص مقاييس الضغط التناظرية والرقمية ومحولات الضغط.',
        iconName: 'Gauge',
      },
      {
        id: 'inst-electrical',
        name: 'أجهزة القياس الكهربائية',
        description: 'أجهزة فحص العزل (الميجر)، الملتيميتر، وأجهزة قياس المقاومة الأرضية.',
        iconName: 'Zap',
      },
      {
        id: 'inst-flow',
        name: 'أجهزة قياس التدفق (Flow Meters)',
        description: 'معايرة مقاييس التدفق الكهرومغناطيسية والموجات الصوتية والتوربينية.',
        iconName: 'Waves',
      },
      {
        id: 'inst-temperature',
        name: 'أجهزة قياس درجات الحرارة',
        description: 'موازين الحرارة ثنائية المعدن، مجسات RTD، والمزدوجات الحرارية.',
        iconName: 'Thermometer',
      },
      {
        id: 'inst-surveying',
        name: 'أجهزة المساحة الهندسية',
        description: 'معايرة المحطات الشاملة (Total Stations)، أجهزة الميزان والليزر.',
        iconName: 'Crosshair',
      },
      {
        id: 'inst-gas',
        name: 'أجهزة ومعدات كشف الغازات',
        description: 'أجهزة كشف الغازات الثابتة والمحمولة واختبارات المعايرة الدورية.',
        iconName: 'Wind',
      },
    ],
  },
];

export const uiAr = {
  getQuote: 'طلب عرض أسعار',
  exploreServices: 'استكشف الخدمات',
  whatWeDo: 'ماذا نقدم',
  whatWeDoSub: 'حلول فنية وخدمات سلامة متكاملة ننفذها بدقة هندسية عالية في كافة أنحاء الإمارات.',
  ourServices: 'خدماتنا',
  ourServicesSub: 'حلول سلامة وفحص فني متخصصة مصممة لبيئات عمل أكثر أماناً وكفاءة.',
  trainingHeading: 'تدريب السلامة الذي يبني الثقة',
  trainingSub: 'برامج تدريبية عملية مصممة لرفع كفاءة الكوادر وتعزيز معايير السلامة المهنية.',
  viewTraining: 'استعراض برامج التدريب',
  industriesHeading: 'القطاعات التي نخدمها',
  industriesSub: 'خبرة واسعة في تلبية متطلبات السلامة الصارمة لأبرز القطاعات بدولة الإمارات.',
  whyChooseHeading: 'لماذا تختار واضح أرض؟',
  howItWorksHeading: 'كيف نعمل',
  howItWorksSub: 'إجراءات واضحة ومنظمة تبدأ من طلبك وتكتمل بتسليم التقارير والشهادات.',
  requestQuoteHeading: 'طلب عرض أسعار',
  requestQuoteSub: 'أخبرنا بالخدمة التي تحتاجها وسيتواصل فريقنا الفني معك مباشرة.',
  submitRequest: 'إرسال الطلب',
  fullName: 'الاسم الكامل',
  companyName: 'اسم الشركة',
  phone: 'رقم الهاتف',
  email: 'البريد الإلكتروني',
  serviceRequired: 'الخدمة المطلوبة',
  message: 'تفاصيل الطلب أو المشروع',
  selectService: 'اختر الخدمة...',
  enquirySuccessMsg: 'شكراً لتواصلكم! تم استلام طلبكم بنجاح وسيقوم فريقنا بالتواصل معكم في أقرب وقت.',
  enquirySent: 'تم إرسال الطلب بنجاح',
  learnMore: 'اعرف المزيد',
  close: 'إغلاق',
  quickLinks: 'روابط سريعة',
  contactInfoHeading: 'معلومات الاتصال',
  viewDetails: 'عرض التفاصيل',
  talkToExpert: 'تحدث مع خبير السلامة',
  backToTop: 'العودة للأعلى',
  callNow: 'اتصل بنا الآن',
  chatWhatsApp: 'محادثة عبر واتساب',
  copyright: '© 2026 كلير ايرث لاستشارات السلامة ش.ذ.م.م. جميع الحقوق محفوظة.',
  // New UI strings for Letterhead, Profile, Activities & License
  companyProfileTag: 'الملف التعريفي والرسالة الرسمية',
  companyProfileHeading: 'ملتزمون بالسلامة الصناعية والامتثال الهندسي المعتمد',
  viewCommercialLicense: 'استعراض الرخصة التجارية الرسمية',
  verifiedLicenseTag: 'معتمد من دائرة الاقتصاد والسياحة بدبي',
  licenseNoLabel: 'رقم الرخصة',
  registerNoLabel: 'رقم السجل',
  dcciNoLabel: 'عضوية الغرفة',
  legalTypeLabel: 'الشكل القانوني',
  issueDateLabel: 'تاريخ الإصدار',
  expiryDateLabel: 'تاريخ الانتهاء',
  statusLabel: 'حالة الرخصة',
  activityLabel: 'النشاط المرخص',
  managementSignoff: 'الإدارة التنفيذية والاعتماد',
  activitiesHeading: 'أنشطة ومجالات عمل الشركة',
  activitiesSub: 'منظومة خدمات متكاملة تشمل فحص المعدات البرية والبحرية، التدريب والتأهيل، وأجهزة القياس والمعايرة.',
  allDivisions: 'كافة الأنشطة',
  requestConsultation: 'طلب استشارة فنية',
  officialDocumentNotice: 'وثيقة رسمية صادرة عن دائرة الاقتصاد والسياحة في دبي.',
};
