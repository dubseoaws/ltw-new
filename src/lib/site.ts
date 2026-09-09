/**
 * All copy in this file is transcribed from the live site teethwhitening.london.
 * Do not add invented content here.
 */

export const site = {
  name: "Teeth Whitening London",
  tagline: "Professional Results in 2 Weeks",
  url: "https://www.teethwhitening.london",
  phone: "020 7043 4315",
  phoneHref: "tel:02070434315",
  email: "info@teethwhitening.london",
  price: "£199",
  topBar: "South Kensington & City of London",
  footerIntro:
    "London's boutique dental clinic offering professional teeth whitening with GDC-registered, dentist-supervised treatments. Two locations: South Kensington & City of London.",
  social: {
    facebook: "https://www.facebook.com/WhiteTeethLondon/",
    instagram: "https://www.instagram.com/teethwhitening.london/",
  },
  copyright: "© 2026 Teeth Whitening London. All rights reserved.",
  cqcLine:
    "CQC Registered – Provider: Medical and Dental Limited (1-20629579981) | South Kensington Clinic. City of London: St Paul's Medical & Dental — CQC registered.",
  resultsDisclaimer:
    "*Shade improvement varies between individuals. Results are not guaranteed and depend on factors including original tooth colour and type of discolouration.",
  credit: { label: "Dubseo", href: "https://dubseo.co.uk/" },
} as const;

export const clinics = {
  southKensington: {
    slug: "south-kensington",
    name: "Teeth Whitening London",
    label: "South Kensington",
    lines: ["20 Old Brompton Road", "South Kensington", "London SW7 3DL"],
    note: "Directly opposite South Kensington tube station",
    mapUrl: "https://maps.app.goo.gl/si9Bi4we4duoRonG8",
    hours: [
      ["Monday", "9:00 AM – 6:00 PM"],
      ["Tuesday", "9:00 AM – 8:00 PM"],
      ["Wednesday", "9:00 AM – 6:00 PM"],
      ["Thursday", "9:00 AM – 8:00 PM"],
      ["Friday", "8:00 AM – 5:00 PM"],
      ["Saturday", "10:00 AM – 4:00 PM"],
      ["Sunday", "10:00 AM – 4:00 PM"],
    ],
    hoursNote: "Evening appointments available Tuesday & Thursday",
  },
  cityOfLondon: {
    slug: "city-of-london",
    name: "Teeth Whitening London",
    label: "City of London",
    lines: ["5 Ave Maria Lane", "City of London", "London EC4M 7AQ"],
    note: "Near St Paul's Cathedral — now open",
    mapUrl: "https://maps.app.goo.gl/LbxqaAGkRC3MzZRV8",
    hours: [
      ["Monday", "8:00 AM – 8:00 PM"],
      ["Tuesday", "8:00 AM – 8:00 PM"],
      ["Wednesday", "8:00 AM – 8:00 PM"],
      ["Thursday", "8:00 AM – 8:00 PM"],
      ["Friday", "8:00 AM – 8:00 PM"],
      ["Saturday", "Closed"],
      ["Sunday", "Closed"],
    ],
    hoursNote: "Extended hours designed for City professionals",
  },
} as const;

export const footerHours = [
  "Mon, Wed: 9am - 6pm",
  "Tue, Thu: 9am - 8pm",
  "Fri: 8am - 5pm",
  "Sat - Sun: 10am - 4pm",
];

export const footerCityHours = ["Mon - Fri: 8am - 8pm", "Now Open — CQC Registered"];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Dentists", href: "/dentists" },
  { label: "Results Gallery", href: "/smile-gallery" },
  { label: "Pricing", href: "/teeth-whitening-cost" },
  { label: "FAQs", href: "/faqs" },
];

export const locationNav = [
  { label: "South Kensington", href: "/south-kensington" },
  { label: "City of London", href: "/city-of-london" },
];

export const footerQuickLinks = [
  { label: "Teeth Whitening London", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Dentists", href: "/dentists" },
  { label: "Results Gallery", href: "/smile-gallery" },
  { label: "Blog", href: "/blog" },
];

export const footerServices = [
  { label: "About Us", href: "/about-us" },
  { label: "Pricing", href: "/teeth-whitening-cost" },
  { label: "FAQs", href: "/faqs" },
  { label: "South Kensington", href: "/south-kensington" },
  { label: "City of London", href: "/city-of-london" },
];

/* ---------------------------------------------------------------- images */

const CLD = "https://res.cloudinary.com/da1zmp1ib/image/upload";

export const img = {
  clinicAbout: `${CLD}/v1765883125/southkenmd-about-img_iyiv4g.jpg`,
  clinicTeam: `${CLD}/v1765883128/southkenmd-about-img1_rca6f9.jpg`,
  skExterior: `${CLD}/v1765881716/SouthKen_Medical_Dental_Finalised_f1mq2s.jpg`,
  skReception: `${CLD}/v1770120191/IMG_2026_2_e2b63w_b99ibg.webp`,
  skTreatmentRoom: `${CLD}/v1765881697/IMG_2017_2_1_pykavp.jpg`,
  cityShopFront: `${CLD}/v1787743967/St_Paul_s_Medical_Dental_Clinic_Shop_front_home_page_banner_ckpodv.jpg`,
  cityReception: `${CLD}/v1787730117/ST-pauls-medical-and-dental-reception_1_lkwwcm.jpg`,
  cityWaiting: `${CLD}/v1787730117/ST-pauls-medical-and-dental-waiting-area_1_tgx2sa.jpg`,
  dentistsHero: `${CLD}/v1765881133/WhatsApp_Image_2025-12-03_at_3.56.09_PM_bys237.jpg`,
} as const;

export type BeforeAfter = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  meta: string;
};

export const homeResults: BeforeAfter[] = [
  {
    before: `${CLD}/v1766206507/IMG_5127_kwuuhx.jpg`,
    after: `${CLD}/v1766206508/IMG_5133_hw3ccq.jpg`,
    beforeAlt: "Before teeth whitening treatment in London",
    afterAlt: "After teeth whitening treatment in London",
    title: "Whitening + Composite",
    meta: "3 weeks",
  },
  {
    before: `${CLD}/v1766077551/home_teeth_Whitening_before_wsnotb.png`,
    after: `${CLD}/v1766077551/home_teeth_Whitening_after_cqigym.jpg`,
    beforeAlt: "Before professional home teeth whitening London",
    afterAlt: "After professional home teeth whitening London",
    title: "Boutique Home Whitening",
    meta: "12 days",
  },
  {
    before: `${CLD}/v1766081028/WhatsApp_Image_2025-12-03_at_16.07.43_rzadyg.jpg`,
    after: `${CLD}/v1766081027/WhatsApp_Image_2025-12-03_at_16.07.43_1_fmjkuh.jpg`,
    beforeAlt: "Before whitening and veneers",
    afterAlt: "After whitening and veneers",
    title: "Whitening + Veneers",
    meta: "4 weeks",
  },
  {
    before: `${CLD}/v1771765267/Teeth_Whitening_By_Dr_Reza_Davari_before_msw1za.jpg`,
    after: `${CLD}/v1771765267/Teeth_Whitening_By_Dr_Reza_Davari_after_k2pmue.jpg`,
    beforeAlt: "Before teeth whitening by Dr Reza Davari",
    afterAlt: "After teeth whitening by Dr Reza Davari",
    title: "Professional Home Whitening",
    meta: "By Dr Reza Davari",
  },
];

export const heroBeforeAfter = {
  before: `${CLD}/v1766077914/home_teeth_whitening_before_x4sqbs.jpg`,
  after: `${CLD}/v1766077915/home_teeth_whitening_after_2_ybvpko.jpg`,
  beforeAlt: "Before teeth whitening at South Kensington clinic",
  afterAlt: "After teeth whitening at South Kensington clinic",
};

export const resultsDisclaimerLong =
  "*Individual results vary. Images show actual patient outcomes but results depend on factors including initial tooth shade, lifestyle habits, and compliance with treatment instructions. Temporary tooth sensitivity may occur during treatment.";

/* ------------------------------------------------------------------ home */

export const heroStats = [
  { value: "GDC", label: "REGISTERED DENTISTS" },
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "4.9★", label: "GOOGLE RATING" },
  { value: "300+", label: "GOOGLE REVIEWS" },
];

export const home = {
  eyebrow: "✓ GDC Registered · ⭐ 4.9/5 (300+)",
  h1a: "Teeth Whitening London",
  h1b: "Professional Results in 2 Weeks",
  heroLead:
    "Professional teeth whitening in London from just £199. GDC-registered dentists, professional-grade treatment, and custom-fitted trays for up to 8 shades whiter teeth.*",
  heroLeadNote: "*Shade improvement varies between individuals",
  packageLabel: "COMPLETE PROFESSIONAL PACKAGE",
  packageItems: [
    "Professional consultation & assessment",
    "Custom-fitted whitening trays",
    "Premium whitening gel (full course)",
    "Follow-up review & top-up gel",
  ],
  packageFooter: "Complete Package — From £199",
  packageNote: "Suitability assessed at consultation. Temporary sensitivity may occur.",
  clinicHeading: "Teeth Whitening London Clinic",
  clinicBody: [
    "Looking for professional teeth whitening in London? Teeth Whitening London is the dedicated whitening clinic of South Kensington Medical & Dental Centre — a CQC-registered practice with over 15 years of experience. Our GDC-registered dentists prescribe professional-grade home whitening using custom-fitted trays and 6% hydrogen peroxide gel — the maximum concentration permitted under UK regulations — to help you achieve a noticeably whiter smile in as little as two weeks.",
    "We have two clinics: our established South Kensington practice (SW7 3DL) and our new City of London clinic (EC4M 7AQ, now open). Complete teeth whitening packages start from £199, including consultation, custom trays, professional gel, and follow-up care. Suitability is assessed at your consultation.",
  ],
  resultsEyebrow: "REAL RESULTS",
  resultsHeading: "Teeth Whitening Before & After",
  resultsSub: "See real results from our London teeth whitening patients",
  welcomeEyebrow: "YOUR TREATMENT",
  welcomeHeading: "Welcome to Teeth Whitening London",
  welcomeBody:
    "We only do one thing — teeth whitening — and we've spent 15 years getting it right. While most dental practices offer whitening as a side service, it's all we focus on. That means our dentists see more whitening cases in a week than a typical practice sees in a year, so they know exactly how to handle staining, sensitivity, and everything in between. Two London clinics, one flat fee, no upselling.",
  welcomePoints: [
    "Whitening-only clinic — it's all we do, every day",
    "300+ five-star Google reviews (4.9/5 average)",
    "£199 all-in — consultation, trays, gel, aftercare",
    "Open 7 days including evenings at South Kensington",
    "Second clinic now open in the City of London",
  ],
  approachEyebrow: "OUR APPROACH",
  approachHeading: "Professional Home Whitening",
  approachBody:
    "We prescribe professional-grade whitening gel (6% hydrogen peroxide — the maximum concentration permitted under UK regulations) with custom-fitted trays made from your dental impressions. Every treatment is supervised by a GDC-registered dentist who assesses your suitability and monitors your progress. See our patient results gallery for examples of what professional whitening can achieve.",
  approachPoints: [
    "Suitability assessed at consultation",
    "Custom trays for even, comfortable fit",
    "UK-approved professional-grade gel",
    "Follow-up review included",
  ],
  clinicImageCaption: {
    title: "Our South Kensington Clinic",
    sub: "Warm, welcoming & professional",
  },
  includedHeading: "What's Included in Your London Whitening Package",
  includedSub: "Everything you need for a brighter smile — from consultation to aftercare.",
  suitabilityHeading: "Who Is Professional Whitening Suitable For?",
  suitabilityBody:
    "Professional teeth whitening is suitable for most adults with healthy teeth and gums. At your initial consultation, your GDC-registered dentist will assess your oral health, discuss your goals, and confirm whether whitening is appropriate for you. Whitening may not be suitable for patients who are pregnant, breastfeeding, under 18, or who have certain dental conditions. If you're searching for teeth whitening near me, our South Kensington clinic is easily accessible from across London, and our City of London clinic is now open. For more information, visit our frequently asked questions page or see our teeth whitening cost breakdown.",
  whyEyebrow: "WHY CHOOSE US",
  whyHeading: "Why Londoners Choose Our Clinic",
  whySub: "Highly rated teeth whitening clinic in South Kensington.",
  whyImageCaption: "Your Comfort is Our Priority",
  journeyEyebrow: "SIMPLE PROCESS",
  journeyHeading: "Your Teeth Whitening Journey",
  journeySub: "From first visit to visible results, typically in 2–3 weeks.",
  teamHeading: "Meet Your Dental Team",
  ctaHeading: "Ready for Your Brighter Smile?",
  ctaSub:
    "Join hundreds of Londoners who've chosen our clinic for their professional teeth whitening.",
  ctaPoints: ["No obligation", "Same-day appointments", "From just £199"],
  blogEyebrow: "EXPERT ADVICE",
  blogHeading: "From Our Whitening Blog",
  blogSub: "Expert guidance from our GDC-registered dental team",
};

export const packageSteps = [
  {
    n: "1",
    title: "Consultation",
    items: [
      "15-minute assessment with a GDC-registered dentist",
      "Oral health check to confirm suitability",
      "Shade assessment and treatment plan",
      "Discussion of expected outcomes and any risks",
      "Dental impressions for your custom trays",
    ],
    badge: "FROM £199",
  },
  {
    n: "2",
    title: "Your Whitening Kit",
    items: [
      "Custom-fitted trays made from your impressions",
      "Professional-grade gel (6% hydrogen peroxide)",
      "Full course of whitening gel included",
      "Desensitising agent to help minimise sensitivity",
      "Detailed instructions for safe home use",
    ],
  },
  {
    n: "3",
    title: "Aftercare",
    items: [
      "Follow-up review with your dentist",
      "Shade assessment to track your progress",
      "Personalised aftercare guidance",
      "Top-up gel available from £35",
      "Your custom trays are reusable long-term",
    ],
  },
];

export const packageStepsNote =
  "*Shade improvement varies between individuals. Your dentist will discuss realistic expectations at your consultation. Temporary sensitivity may occur during treatment.";

export const whyPoints = [
  {
    title: "Dentist-Supervised",
    body: "All treatments prescribed by GDC-registered dental professionals",
  },
  {
    title: "Visible Results",
    body: "Professional-grade whitening designed to help achieve noticeably whiter teeth",
  },
  {
    title: "Home Whitening Kits",
    body: "Custom trays you use comfortably at home — professional results, your schedule",
  },
  {
    title: "Fast Whitening",
    body: "Visible results typically within days, with optimal results in 10-14 days",
  },
  {
    title: "Same Products, Better Price",
    body: "We use the same professional-grade materials as clinics charging £400+ — our volume means you pay less",
  },
  {
    title: "Great Value",
    body: "Complete professional whitening packages from just £199 — exceptional value for dentist-supervised treatment",
  },
];

export const journey = [
  {
    n: "1",
    when: "DAY 1",
    title: "Book Your Appointment",
    body: "15-minute assessment to ensure whitening is right for you",
  },
  {
    n: "2",
    when: "DAY 7-10",
    title: "Get Custom Trays",
    body: "Perfectly-fitted trays made from your dental impressions",
  },
  {
    n: "3",
    when: "10-14 DAYS",
    title: "Whiten at Home",
    body: "Use professional gel in your trays for 1-2 hours daily",
  },
  {
    n: "4",
    when: "RESULTS!",
    title: "Reveal Your Smile",
    body: "Enjoy your whiter, brighter smile — individual results may vary.",
  },
];

export const homeFaqs = [
  {
    q: "What is the best teeth whitening in London?",
    a: "Professional dentist-supervised teeth whitening using 6% hydrogen peroxide gel with custom-fitted trays is widely considered the most effective option by dental professionals. Most London dental clinics charge £300–600 for this treatment. At our clinic, we offer the same professional-grade materials and GDC-registered dentist supervision from just £199 — because whitening is all we do, we can offer it at a fraction of the price.",
  },
  {
    q: "How much does teeth whitening cost in London?",
    a: "Most London dental clinics charge between £300 and £600 for professional teeth whitening. We offer the same treatment — same professional-grade gels, same custom trays, same dentist supervision — from just £199. Because we specialise exclusively in whitening, we see more patients and can pass on the savings.",
  },
  {
    q: "Is teeth whitening at a London dentist safe?",
    a: "Yes. Our treatments are provided by GDC-registered dentists in a CQC-registered clinic using UK-approved products with desensitising agents. We use the same professional materials as any top London dental practice — the difference is we do this every day, so our dentists have extensive experience managing sensitivity and optimising results. Temporary sensitivity may occur but is typically mild and short-lived.",
  },
  {
    q: "How long does professional teeth whitening last?",
    a: "Professional teeth whitening results from our London clinic typically last 1-2 years with proper care. We provide aftercare guidance and affordable top-up gel options to maintain your bright smile long-term.",
  },
  {
    q: "What's included in your £199 teeth whitening London package?",
    a: "Our complete London teeth whitening package includes: initial consultation, custom-fitted whitening trays, professional-grade whitening gel (full course), detailed instructions, and a follow-up review.",
  },
  {
    q: "How does professional teeth whitening work?",
    a: "At our London clinic, your GDC-registered dentist takes impressions of your teeth to create custom-fitted trays. You then apply professional-grade whitening gel (6% hydrogen peroxide) at home for 1–2 hours daily over 10–14 days. Your dentist monitors your progress and provides a follow-up review.",
  },
  {
    q: "Where is your teeth whitening clinic in London?",
    a: "Our established clinic is at 20 Old Brompton Road, South Kensington, London SW7 3DL — just 2 minutes from South Kensington tube station (CQC-registered, Provider: Medical and Dental Limited). Our second clinic, St Paul's Medical & Dental, is now open at 5 Ave Maria Lane, City of London, EC4M 7AQ (CQC-registered). We're rated 4.9/5 stars with over 300 Google reviews.",
  },
  {
    q: "Can I get same-day teeth whitening in London?",
    a: "Yes! We offer same-day consultations at our South Kensington clinic. You can have your impressions taken on day one and receive your custom whitening kit within 7-10 days.",
  },
];

export const homeFaqsUpdated = "Last updated: March 2026";

export const blogPosts = [
  {
    title: "How Professional Whitening Gel Works",
    excerpt:
      "The science behind hydrogen peroxide and why professional-grade gel delivers better results.",
    href: "/blog/science-of-peroxide-how-professional-whitening-gel-works",
  },
  {
    title: "Can Yellow Teeth Become White Again?",
    excerpt: "What causes yellowing and what professional whitening can realistically achieve.",
    href: "/blog/can-yellow-teeth-become-white-again",
  },
  {
    title: "Is Professional Whitening Safe for Enamel?",
    excerpt:
      "How professional-grade whitening gels are designed to protect your enamel during treatment.",
    href: "/blog/is-boutique-whitening-safe-protecting-your-enamel",
  },
  {
    title: "Maintaining Results for Up to 2 Years",
    excerpt: "Aftercare tips and top-up strategies to keep your smile bright long-term.",
    href: "/blog/how-to-maintain-your-whitening-results-for-up-to-2-years",
  },
  {
    title: "Managing Sensitivity During Whitening",
    excerpt: "Practical advice for patients concerned about tooth sensitivity.",
    href: "/blog/managing-tooth-sensitivity-with-boutique-gels",
  },
  {
    title: "How Often Can You Top Up?",
    excerpt:
      "When and how to safely maintain your whitening results with affordable top-ups.",
    href: "/blog/how-often-can-you-safely-top-up-teeth-whitening",
  },
];

export const regulated = {
  heading: "Registered & Regulated",
  body: "Our clinic is registered with the Care Quality Commission (Provider: Medical and Dental Limited, CQC ID: 1-20629579981) and our clinicians are registered with the relevant UK professional regulators.",
  links: [
    { label: "General Dental Council", href: "https://www.gdc-uk.org/" },
    { label: "Care Quality Commission", href: "https://www.cqc.org.uk/" },
  ],
};

export const newsletter = {
  eyebrow: "STAY UPDATED",
  heading: "Exclusive Offers & Smile Tips",
  body: "Join our community for special promotions and expert advice on maintaining your perfect smile.",
  cta: "SUBSCRIBE",
};

/* --------------------------------------------------------------- dentists */

export type Dentist = {
  name: string;
  role: string;
  quals?: string;
  gdc: string;
  image: string;
  bio?: string[];
  specialties: string[];
};

export const principal: Dentist = {
  name: "Dr. Yasha Y Shirazi",
  role: "Principal Dentist & Clinical Lead",
  quals: "DDS (University of Regensburg, Germany)",
  gdc: "195843",
  image: `${CLD}/v1765814659/dr_yasha_shirazi_new_wellcome_image_copy_copy_tjavhf.jpg`,
  bio: [
    "Having qualified from the University of Regensburg in Germany, Yasha has worked as a dentist in both Germany as well as the UK. To Yasha, dentistry is very much a vocation and his calling. He is a firm believer in prevention being better than the cure and therefore is meticulous in spending time with patients educating them in the importance of good oral care.",
    "Yasha is an exceptionally competent dentist and has a wide range of skillsets. His calm and patient manner is reassuringly welcome and very much appreciated by his patients. Yasha believes that dentistry is not only about treating patients' teeth but also about caring for one's general wellbeing and respecting the individuality of each person. No two patients are ever the same.",
    "Yasha offers a full range of cosmetic and preventative/remedial dental treatment including complicated surgical extractions, complex treatments and smile makeovers, all with the highest quality dentistry as well as huge focus on aftercare to ensure the whole process is as comfortable as possible.",
  ],
  specialties: [
    "Teeth Whitening",
    "Smile Makeovers",
    "Complex Treatments",
    "Surgical Extractions",
  ],
};

export const team: Dentist[] = [
  {
    name: "Dr. Kamran Yazdi",
    role: "Dentist",
    quals: "DDS, MSc Conservative Dentistry (UCL), Dip Oral Dental Science (UCL)",
    gdc: "197926",
    image: `${CLD}/v1765880757/dr-kamran-yazdi_image_z69snd.jpg`,
    bio: [
      "Originally from Iran, Dr Yazdi was awarded a Doctorate in Dental Surgery (DDS) in 2002. He moved to the UK in 2006 and sat the IQE exam to re-qualify to local regulations.",
    ],
    specialties: ["Conservative Dentistry", "Teeth Whitening", "Restorative Dentistry"],
  },
  {
    name: "Dr. Andreia Phipps",
    role: "Dentist",
    quals:
      "BDS (Brazil), ORE (UK), ADS Certificate in Cosmetic and Aesthetic Restorative Dentistry",
    gdc: "229601",
    image: `${CLD}/v1765880758/Dr-Narges-Ameri_gejrdv.jpg`,
    bio: [
      "Dr. Andreia Phipps qualified in 2002 in Fortaleza, Brazil. She is a friendly and enthusiastic dentist who believes in patient-centred dentistry, taking time to build positive relationships.",
    ],
    specialties: ["Cosmetic Dentistry", "Teeth Whitening", "Aesthetic Restorations"],
  },
  {
    name: "Dr. Reza Davari",
    role: "Dentist",
    quals: "London Gold Medal for Outstanding Achievement",
    gdc: "302422",
    image: `${CLD}/v1771765267/Teeth_Whitening_By_Dr_Reza_Davari_after_k2pmue.jpg`,
    bio: [
      "Dr. Reza is a caring and dedicated dentist. Having worked in both hospital and practice settings, he has developed a broad range of experience that helps him provide exceptional care.",
    ],
    specialties: ["Prosthodontics", "Teeth Whitening", "Smile Makeovers"],
  },
  {
    name: "Dr. Narges Ameri",
    role: "Dentist",
    quals: "DDS (Tehran University), Advanced Training in Prosthodontics and Implantology",
    gdc: "325081",
    image: `${CLD}/v1765880758/Dr-Narges-Ameri_gejrdv.jpg`,
    bio: [
      "Dr Narges Ameri (DDS) qualified from Tehran University of Medical Sciences in 2012 and completed a four-year advanced training programme in Prosthodontics and Implantology.",
    ],
    specialties: ["Prosthodontics", "Teeth Whitening", "Cosmetic Dentistry"],
  },
  {
    name: "Jack Button",
    role: "Clinical Director & Dental Hygienist",
    quals: "Dental Hygienist and Dental Therapist (University of Manchester)",
    gdc: "244367",
    image: `${CLD}/v1767691904/jack-button-mobile-image1_bpm24z_l0lxrf.jpg`,
    bio: [
      "Originally from Brighton and now based in Tunbridge Wells, Jack is a highly qualified Dental Hygienist and Dental Therapist who graduated from the University of Manchester Dental School.",
    ],
    specialties: ["Dental Hygiene", "Teeth Cleaning", "Gum Health"],
  },
  {
    name: "Laila Alhussein",
    role: "Dental Hygienist",
    quals: "University College London",
    gdc: "328882",
    image: `${CLD}/v1765880764/laila-alhussein_gdajal.webp`,
    bio: [
      "Laila is a skilled dental hygienist at South Kensington Medical and Dental Clinic. Originally from Damascus, Syria, she grew up in Dubai before earning a prestigious scholarship.",
    ],
    specialties: ["Dental Hygiene", "Teeth Cleaning", "Oral Health Education"],
  },
];

export const homeTeam = [
  { name: "Dr. Yasha Y Shirazi", gdc: "GDC: 195843", image: principal.image },
  { name: "Dr. Andreia Phipps", gdc: "GDC: 229601", image: team[1].image },
  { name: "Dr. Reza Davari", gdc: "GDC: 302422", image: team[2].image },
  { name: "Jack Button", gdc: "GDC: 244367", image: team[4].image },
];

export const dentistsPage = {
  eyebrow: "MEET OUR TEAM",
  h1: "Teeth Whitening Dentists in London",
  lead: "Our team of GDC-registered teeth whitening dentists in London are experts in cosmetic dentistry and smile transformations. With decades of combined experience, we've helped many patients achieve their perfect smile.",
  stats: [
    { value: "6", label: "EXPERT DENTISTS" },
    { value: "2", label: "DENTAL HYGIENISTS" },
    { value: "15+", label: "YEARS EXPERIENCE" },
    { value: "4.9★", label: "PATIENT RATING" },
  ],
  teamHeading: "Expert Teeth Whitening Dentists",
  teamSub:
    "Every member of our team is committed to helping you achieve a brighter, more confident smile through professional teeth whitening in London.",
  whyHeading: "Why Choose Our Teeth Whitening Dentists?",
  why: [
    {
      title: "Highly Qualified",
      body: "All our teeth whitening dentists in London hold advanced qualifications from top UK and international universities.",
    },
    {
      title: "GDC Registered",
      body: "Every dentist is registered with the General Dental Council, ensuring you receive safe, regulated teeth whitening treatment.",
    },
    {
      title: "Experienced Team",
      body: "Our dentists and hygienists bring years of specialist training and extensive experience in whitening treatments.",
    },
    {
      title: "Patient-Centred Care",
      body: "We take time to understand your goals and create personalised teeth whitening plans for natural-looking results.",
    },
    {
      title: "Latest Technology",
      body: "Digital radiography, 3D scanning, and needle-free injections for comfortable teeth whitening consultations.",
    },
    {
      title: "4.9★ Google Rating",
      body: "Over 260 five-star reviews from satisfied teeth whitening patients across London.",
    },
  ],
  ctaHeading: "Ready to Meet Our Teeth Whitening Dentists?",
  ctaSub:
    "Book your appointment today and discover how our expert London dentists can transform your smile with professional teeth whitening from just £199.",
};

/* ------------------------------------------------------------------ about */

export const about = {
  eyebrow: "ABOUT US",
  h1: "Teeth Whitening London – Your London Clinics",
  lead: "GDC-registered dentists providing safe, effective teeth whitening in Central London",
  stats: [
    { value: "Since 2010", label: "ESTABLISHED" },
    { value: "5", label: "GDC-REGISTERED DENTISTS" },
    { value: "4.9★", label: "GOOGLE RATING" },
  ],
  storyEyebrow: "OUR STORY",
  storyHeading: "How Teeth Whitening London Started",
  story: [
    "Teeth Whitening London was founded in 2010 by Dr. Yasha Shirazi with a clear mission: to make professional, dentist-supervised teeth whitening accessible and affordable in Central London.",
    "Based at 20 Old Brompton Road in South Kensington, our clinic operates within a CQC-registered dental practice. Every whitening treatment is prescribed and overseen by GDC-registered dental professionals — because in the UK, only registered dentists and dental hygienists/therapists can legally provide teeth whitening.",
    "Over the years, we've helped many patients achieve brighter smiles using the Boutique whitening system — a dentist-led home whitening approach that combines custom-fitted trays with professional-grade gel. We chose to specialise in this method because we believe it offers the best balance of safety, comfort, and long-lasting results for most patients.",
  ],
  storyBadges: ["CQC REGISTERED", "GDC-REGISTERED TEAM", "SOUTH KENSINGTON"],
  valuesEyebrow: "OUR VALUES",
  valuesHeading: "What We Stand For",
  valuesSub: "The principles that guide everything we do at our clinic.",
  values: [
    {
      title: "Patient Safety First",
      body: "Every treatment is prescribed by a GDC-registered dentist after a thorough oral health assessment. We follow all CQC, GDC, and ASA guidelines — if whitening isn't right for you, we'll tell you honestly.",
    },
    {
      title: "Honest Advice",
      body: "We don't oversell or make unrealistic promises. We'll explain what results you can realistically expect based on your starting shade, and we're upfront about the fact that individual results vary.",
    },
    {
      title: "Transparent Pricing",
      body: "Our complete home whitening package is £199 — consultation, custom trays, professional gel, and follow-up included. No hidden fees, no pressure to buy add-ons.",
    },
    {
      title: "Accessible Care",
      body: "We believe professional whitening shouldn't be a luxury. We keep our pricing fair while maintaining the highest clinical standards, and we offer flexible appointment times including evenings.",
    },
  ],
  teamEyebrow: "OUR TEAM",
  teamHeading: "Led by Experienced Dental Professionals",
  teamSub:
    "Our clinic is staffed by 5 GDC-registered dentists and 2 dental hygienists, all dedicated to providing safe, effective care.",
  principalRole: "Principal Dentist & Clinical Director",
  principalBody: [
    "Dr. Shirazi founded Teeth Whitening London with a simple goal: to make professional teeth whitening accessible to everyone in Central London. Since 2010, he has personally overseen many whitening treatments at our South Kensington clinic, and in 2026 we expanded with a second clinic — St Paul's Medical & Dental — in the City of London.",
    "After qualifying from University of Regensburg in Germany, Dr. Shirazi dedicated his career to cosmetic dentistry. He believes in honest, transparent advice – if whitening isn't right for you, he'll tell you.",
  ],
  principalPoints: [
    "University of Regensburg (Germany)",
    "GDC Registration: 195843",
    "15+ Years in Cosmetic Dentistry",
  ],
  principalNote:
    "Our full team of associate dentists and hygienists are ready to help you achieve your smile goals.",
  findUsEyebrow: "FIND US",
  findUsHeading: "Visit Our London Clinics",
  findUsSub: "Two locations in Central London — South Kensington & City of London",
  transportNote: {
    title: "2-minute walk",
    body: "from South Kensington Station",
    lines: "District • Circle • Piccadilly Lines",
  },
  ctaHeading: "Ready to Brighten Your Smile?",
  ctaSub: "Book your appointment today and find out if teeth whitening is right for you.",
  ctaPackage: "HOME WHITENING PACKAGE",
  ctaPackageSub: "Consultation + Custom Trays + Professional Gel + Follow-up",
  ctaNote: "No-obligation consultation • Same-day appointments available",
};

/* ---------------------------------------------------------------- pricing */

export const pricing = {
  eyebrow: "2026 PRICE GUIDE",
  h1a: "Teeth Whitening",
  h1b: "Cost London",
  lead: "How much does teeth whitening cost in London? Our complete 2026 price guide compares all options – from professional dentist whitening (£199-800) to DIY kits (£20-60). Find the best value for your budget.",
  badges: ["✓ CQC Registered Clinic", "✓ No Hidden Costs"],
  heroStats: [
    { value: "£199", label: "OUR PRICE" },
    { value: "£300-500", label: "GENERAL DENTIST" },
    { value: "£400-800", label: "LASER (OTHER CLINICS)" },
    { value: "Same", label: "PRODUCTS" },
  ],
  introHeading: "How Much Does Teeth Whitening Cost in London?",
  introBody:
    "The cost of teeth whitening in London varies dramatically depending on where you go and what treatment you choose. Here's what you can expect to pay in 2026:",
  quickSummaryHeading: "Quick Price Summary",
  quickSummary: [
    "Professional home whitening: typically £199-400",
    "Laser/In-Office Whitening (other clinics): £400-800",
    "Zoom Whitening (other clinics): £300-600",
    "General Dentist (home kit): £300-500",
    "Our price (same products): £199 all-inclusive",
  ],
  understandingHeading: "Understanding Teeth Whitening Prices in London",
  understandingBody:
    "When comparing teeth whitening costs in London, it's crucial to understand what affects the price and what you're actually getting for your money. Looking for top-rated teeth whitening in London? The cheapest option isn't always the greatest value, and the most expensive doesn't always deliver the most effective results.",
  determinantsHeading: "What Determines Teeth Whitening Cost?",
  determinants: [
    {
      title: "Whitening Strength",
      body: "Professional gels (6% HP) cost more but are 60x more concentrated than shop products (0.1% HP)",
    },
    {
      title: "Custom Trays",
      body: "Bespoke trays made from your impressions add to cost but ensure even results",
    },
    {
      title: "Dentist Supervision",
      body: "GDC-registered professionals ensure safety and optimise your treatment",
    },
    {
      title: "Clinic Specialisation",
      body: "General dentists charge more because whitening is a small part of their practice; we only do whitening so our costs are lower.",
    },
    {
      title: "Treatment Type",
      body: "In-office laser (at other clinics) requires expensive equipment; professional home whitening is more cost-effective",
    },
  ],
  comparisonHeading: "Complete Teeth Whitening Price Comparison 2026",
  comparisonHeaders: ["Treatment", "Cost", "Results", "Duration", "Lasts", "Top-Up"],
  comparison: [
    {
      treatment: "Our Professional Home Whitening",
      cost: "£199",
      results: "Up to 6-8 shades*",
      duration: "10-14 days",
      lasts: "1-2 years",
      topUp: "£35",
      featured: true,
    },
    {
      treatment: "In-Office Laser (other clinics)",
      cost: "£400-800",
      results: "Up to 4-8 shades*",
      duration: "1-2 hours",
      lasts: "6-12 months",
      topUp: "£200-400",
      featured: false,
    },
    {
      treatment: "Zoom Whitening (other clinics)",
      cost: "£300-600",
      results: "Up to 4-6 shades*",
      duration: "1 hour",
      lasts: "6-12 months",
      topUp: "£150-300",
      featured: false,
    },
    {
      treatment: "Boutique Whitening",
      cost: "£250-400",
      results: "Up to 6-8 shades*",
      duration: "2-3 weeks",
      lasts: "1-2 years",
      topUp: "£50-80",
      featured: false,
    },
    {
      treatment: "General Dentist (Home Kit)",
      cost: "£300-500",
      results: "Up to 6-8 shades*",
      duration: "2-3 weeks",
      lasts: "1-2 years",
      topUp: "£60-100",
      featured: false,
    },
  ],
  comparisonNote:
    "Note: We specialise exclusively in professional home whitening. In-office laser, Zoom, and other in-clinic options are shown for comparison purposes only and are available at other dental practices.",
  pricesHeading: "Our Teeth Whitening Prices",
  pricesSub: "Exceptional value with no hidden costs. Everything included.",
  mainPackage: {
    title: "Complete Home Whitening Package",
    price: "£199",
    items: [
      "Initial consultation & assessment",
      "Dental impressions",
      "Custom-fitted whitening trays",
      "Full course of professional-grade gel",
      "Detailed instructions",
      "Follow-up appointment",
      "Aftercare advice",
    ],
    cta: "BOOK NOW – £199",
    note: "✓ No hidden fees ✓ Pay nothing until treatment day",
  },
  checkupNotice: {
    title: "Check-Up May Be Required",
    body: "New patients may need a dental check-up (from £30) before whitening to confirm your teeth and gums are healthy. This is charged separately and is not included in the whitening price.",
  },
  extras: [
    {
      title: "Gel Refills",
      price: "£35",
      body: "Top up your whitening anytime with additional prescription gel. Your trays last forever.",
    },
    {
      title: "Hygiene + Whitening",
      price: "£143",
      body: "Combine professional cleaning with whitening for the best possible results.",
    },
  ],
  valueHeading: "Why Our £199 Package is Great Value in London",
  value: [
    {
      title: "Competitive Pricing",
      body: "At £199, our pricing is lower than many in-office whitening treatments offered at other clinics, with results that vary between individuals.",
    },
    {
      title: "Same Professional Products",
      body: "We use the same professional-grade gel as clinics charging £400+. Up to 6-8 shades whiter — individual results vary.",
    },
    {
      title: "Designed to Last",
      body: "Home whitening results typically last 1-2 years, compared with 6-12 months often reported for laser treatments. Individual results vary.",
    },
    {
      title: "Cheap Top-Ups",
      body: "Keep your trays forever. £35 gel refills vs £200-400 repeat laser sessions.",
    },
    {
      title: "Everything Included",
      body: "No hidden costs. Consultation, trays, gel, and follow-up all included in £199.",
    },
    {
      title: "Quality You Can Trust",
      body: "GDC-registered dentists and professional-grade products used by leading London clinics.",
    },
  ],
  halfPriceHeading: "Why Are We Half the Price of Other London Clinics?",
  halfPriceIntro:
    "Most dental practices charge £300–600 for the exact same whitening treatment we offer at £199. Here's how we do it:",
  halfPricePoints: [
    {
      title: "Whitening is all we do",
      body: "We're not a general dentist fitting whitening between fillings and check-ups. This is our entire focus.",
    },
    {
      title: "Same professional-grade products",
      body: "We use the same 6% hydrogen peroxide gels and custom trays as clinics charging twice our price.",
    },
    {
      title: "Volume and efficiency",
      body: "We see more whitening patients in a week than most practices see in a year, so our costs per patient are lower.",
    },
    {
      title: "No upselling",
      body: "We don't use whitening as a gateway to sell you veneers, bonding, or other cosmetic work.",
    },
  ],
  halfPriceBottom:
    "Bottom line: You get the same dentist-led, professional-grade whitening that premium clinics offer — just without the premium price tag.",
  faqHeading: "Teeth Whitening Cost FAQs",
  faqs: [
    {
      q: "How much does teeth whitening cost in London?",
      a: "Teeth whitening costs in London vary significantly: professional home whitening ranges from £199-400, in-office laser whitening (offered at other clinics) typically costs £400-800, and over-the-counter products cost £20-60. At our clinic, we specialise exclusively in professional home whitening from just £199.",
    },
    {
      q: "Why is your price so much lower than other dental clinics?",
      a: "Most dental clinics offer whitening as one of many services — they fit it between check-ups, fillings, and other treatments. We focus exclusively on whitening, which means higher patient volume, streamlined processes, and lower costs per treatment. We use the same professional-grade 6% hydrogen peroxide gel and custom-fitted trays as clinics charging £300-600. You're not getting a cheaper product — you're getting a specialist price.",
    },
    {
      q: "Is £199 teeth whitening as good as £500 laser whitening?",
      a: "Our £199 professional home whitening uses the same professional-grade gel as in-office treatments offered at other clinics and can typically achieve up to 6-8 shades of improvement, though individual results vary. Home whitening also tends to last longer (1-2 years vs 6-12 months often reported for laser). Plus, you keep your trays for affordable £35 top-ups. Please note: we specialise exclusively in professional home whitening — we do not offer in-clinic laser whitening.",
    },
    {
      q: "What's included in the £199 whitening cost?",
      a: "Our £199 package includes: initial consultation, dental impressions, custom-fitted whitening trays, full course of professional-grade whitening gel, detailed instructions, and a follow-up appointment. No hidden costs. Please note: new patients may need a dental check-up (from £30) before whitening to confirm your teeth and gums are healthy — this is charged separately.",
    },
    {
      q: "Are there any hidden costs with teeth whitening?",
      a: "At our clinic, £199 is the complete price. We don't charge extra for consultations, impressions, or follow-ups. Future gel refills are £35 when needed (typically every 1-2 years).",
    },
    {
      q: "Is cheap teeth whitening safe?",
      a: "Our £199 treatment uses the same professional-grade materials as clinics charging £400-600. The treatment is provided by GDC-registered dentists at our CQC-registered clinic and is considered safe under professional supervision. We're able to offer a lower price because whitening is our sole focus — not because we cut corners on products or care.",
    },
  ],
  learnMoreHeading: "Learn More About Teeth Whitening",
  learnMoreSub: "Helpful resources for making your decision:",
  learnMoreLinks: [
    { label: "About Our Clinic", href: "/about-us" },
    { label: "South Kensington Clinic", href: "/south-kensington" },
    { label: "City of London Clinic", href: "/city-of-london" },
  ],
  relatedHeading: "Related Articles",
  related: [
    {
      label: "Complete UK Price Guide",
      href: "/blog/how-much-does-teeth-whitening-cost-in-the-uk",
    },
    {
      label: "How Long Results Last",
      href: "/blog/how-long-does-teeth-whitening-last-expert-maintenance-tips",
    },
    {
      label: "Whitening Mistakes to Avoid",
      href: "/blog/mistakes-people-make-with-teeth-whitening-what-you-need-to-know",
    },
  ],
  ctaHeading: "Get Professional Whitening From £199",
  ctaSub:
    "Professional teeth whitening in London with everything included. GDC-registered dentists, custom trays, and follow-up care.",
  ctaNote: "No obligation • No payment until treatment day • From just £199",
};

/* ------------------------------------------------------------------- faqs */

export const faqPage = {
  eyebrow: "YOUR QUESTIONS ANSWERED",
  h1a: "Frequently Asked",
  h1b: "Questions",
  lead: "Everything you need to know about professional whitening treatment at our London clinics.",
  heading: "Teeth Whitening FAQs",
  sub: "Find answers to the most common questions about teeth whitening London treatments.",
  items: [
    {
      q: "Is teeth whitening safe?",
      a: "Yes, professional teeth whitening supervised by a dentist is considered very safe. We use UK-approved, professional-grade whitening gels that are designed to whiten teeth while minimising any risk to enamel. Our dentists assess your suitability before treatment to help optimise your results.",
    },
    {
      q: "How white will my teeth get?",
      a: "Results vary depending on your starting shade and the natural colour of your teeth. Many patients achieve a smile that is up to 8 shades whiter (individual results vary). We aim for a natural but noticeably brighter result that complements your appearance.",
    },
    {
      q: "How long does teeth whitening last?",
      a: "With proper care, results can last up to 2 years. This depends on your lifestyle – smokers and heavy tea/coffee drinkers may see staining return sooner. We provide aftercare advice and top-up options to maintain your results.",
    },
    {
      q: "Will teeth whitening cause sensitivity?",
      a: "Mild sensitivity is common and usually temporary. We use professional-grade gel with desensitising ingredients and always assess your suitability first. If you experience sensitivity, it typically subsides within a few days of completing treatment.",
    },
    {
      q: "How long does the treatment take?",
      a: "The full home whitening treatment typically takes 10-14 days, wearing the trays for 1-2 hours daily. You'll see initial results within the first few days, with optimal results achieved by the end of the treatment period.",
    },
    {
      q: "Is the treatment done at home or in the clinic?",
      a: "Our standard treatment is a home whitening system. All assessments, fittings, and follow-ups take place in our clinic. The actual whitening is done at home using custom-made trays and professional gel prescribed by our dentists.",
    },
    {
      q: "Can anyone have teeth whitening?",
      a: "Most adults can have teeth whitening, but it's not suitable for everyone. We don't recommend whitening for pregnant or breastfeeding women, people under 18, or those with certain dental conditions. Our dentists will assess your suitability during your consultation.",
    },
    {
      q: "Will whitening work on crowns or veneers?",
      a: "Teeth whitening only works on natural teeth. Crowns, veneers, and fillings will not change colour. If you have visible restorations, we can discuss options during your consultation to achieve a uniform smile.",
    },
    {
      q: "What's included in the £199 package?",
      a: "Our complete package includes: initial consultation and assessment, custom-fitted whitening trays, professional-grade whitening gel (enough for full treatment), detailed instructions, and a follow-up appointment to review your results.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can book online through our website, call us on 02070434315, or visit our South Kensington clinic at 20 Old Brompton Road, SW7 3DL. Our City of London clinic at 5 Ave Maria Lane, EC4M 7AQ is now open. We offer same-day appointments when available.",
    },
  ],
  transformationsEyebrow: "SEE THE RESULTS",
  transformationsHeading: "Real Transformations",
  transformationsSub:
    "Before & after photos showing what professional teeth whitening can achieve.",
  transformationsNote:
    "*Individual results may vary. Shade improvement differs between patients.",
  locationHeading: "Our Location",
  locationSub: "20 Old Brompton Road, South Kensington, London SW7 3DL",
};

/* ---------------------------------------------------------------- gallery */

export const gallery = {
  eyebrow: "BEFORE & AFTER",
  h1: "Teeth Whitening London Results",
  lead: "Real patients, real results. See what professional teeth whitening can do for your smile. All treatments are prescribed and supervised by our highly trained GDC-registered dental professionals.",
  stats: [
    { value: "Many", label: "SMILES TRANSFORMED" },
    { value: "High", label: "PATIENT SATISFACTION" },
    { value: "4.9★", label: "GOOGLE RATING" },
  ],
  expectHeading: "What to Expect from Professional Teeth Whitening",
  expectBody: [
    "Every smile is unique, and so are the results. The before and after photos below show real patients from our South Kensington teeth whitening clinic. Many patients achieve noticeably whiter teeth within 2 weeks using our Boutique home whitening system.",
    "Results vary depending on your starting shade, the type of staining, and how consistently you use the treatment. At your consultation, our dentist will assess your teeth and give you realistic expectations for what whitening can achieve for you.",
  ],
  casesEyebrow: "FEATURED TRANSFORMATIONS",
  casesHeading: "Teeth Whitening Before & After",
  casesSub: "Detailed case studies from our London teeth whitening patients",
  moreEyebrow: "MORE TRANSFORMATIONS",
  moreHeading: "More Teeth Whitening Success Stories",
  factorsEyebrow: "UNDERSTANDING RESULTS",
  factorsHeading: "What Affects Your Whitening Results?",
  factorsSub: "Several factors influence how white your teeth can become",
  factors: [
    {
      title: "Starting Shade",
      body: "Teeth that are yellow or brown typically respond better to whitening than grey-toned teeth. Our dentist will assess your natural shade and predict likely results.",
    },
    {
      title: "Type of Staining",
      body: "Surface stains from coffee, tea, wine, and smoking respond excellently. Deeper intrinsic stains (from medications or fluorosis) may need longer treatment.",
    },
    {
      title: "Treatment Compliance",
      body: "Consistent daily use of your whitening trays produces the best results. Most patients see significant improvement in 10-14 days.",
    },
    {
      title: "Dental Health",
      body: "Healthy teeth and gums whiten more evenly. We'll check your oral health at your consultation and address any issues first.",
    },
  ],
  expectationsEyebrow: "HONEST ADVICE",
  expectationsHeading: "Setting Realistic Expectations",
  expectationsIntro: "We believe in honest, transparent advice. Here's what you should know:",
  expectations: [
    "Many patients achieve up to 6–8 shades improvement – but this varies based on your starting point and stain type.",
    "Natural teeth only – crowns, veneers, and fillings won't change colour with whitening.",
    "Results aren't permanent – expect 1-2 years before a top-up is needed (just £35 for new gel).",
    "Some sensitivity can occur – usually mild and temporary. We can adjust treatment if needed.",
    "Results appear gradually – you'll see changes from day 7-10, with full results at 10-14 days.",
  ],
  expectationsOutro:
    "If whitening isn't suitable for you, or if we think you won't achieve the results you want, we'll tell you honestly at your consultation. We'd rather you make an informed decision than be disappointed.",
  stainTableHeading: "Typical Results by Stain Type",
  stainTable: [
    ["Coffee/Tea Stains", "6-8 shades (Excellent)"],
    ["Wine/Smoking", "6-8 shades (Excellent)"],
    ["Age-Related Yellow", "5-7 shades (Very Good)"],
    ["Tetracycline/Grey", "3-5 shades (Moderate)"],
  ],
  stainTableNote: "*Shade improvement varies between individuals",
  ctaHeading: "Ready to See Your Transformation?",
  ctaSub: "Book your consultation and find out what teeth whitening can do for your smile.",
  ctaPackage: "Complete Whitening Package",
  ctaPoints: [
    "See before & after photos of similar cases",
    "Get a realistic assessment of your results",
    "No obligation – honest advice guaranteed",
  ],
};

export const galleryCases = [
  {
    name: "Female Teeth Whitening Patient",
    location: "📍 South Kensington, London",
    before: `${CLD}/v1766206507/IMG_5127_kwuuhx.jpg`,
    after: `${CLD}/v1766206508/IMG_5133_hw3ccq.jpg`,
    concern:
      "A woman in her 40s came to us feeling unhappy with the overall colour of her teeth. She was particularly troubled by dark marks on her upper incisors that had affected her confidence for years.",
    approach:
      "After a thorough examination, we discussed her options and agreed on a conservative, minimally invasive approach: professional whitening first to brighten the overall shade, followed by composite restorations to address the dark marks while preserving as much natural tooth structure as possible.",
    treatment: [
      "Completed a course of professional home whitening over 2 weeks",
      "Patient noticed significant improvement in brightness and freshness",
      "One week after whitening, proceeded with aesthetic composite restorations",
      "Dark marks were managed with conservative composite restorations where clinically appropriate",
      "High-quality composite shaped and polished for a seamless, natural finish",
    ],
    result:
      "The combination of whitening and precise cosmetic fillings transformed her smile without the need for veneers or other aggressive treatments. The patient was thrilled with how natural the final result looked.",
    quote:
      "I had been self-conscious about my smile for years. The dark marks on my front teeth made me avoid smiling in photos. After the whitening, I was amazed by the brightness – my teeth looked so fresh. Then the composite work seamlessly removed those marks I'd hated for so long. The result is so natural that nobody can tell anything was done. I finally feel confident showing my smile!",
  },
  {
    name: "Male Teeth Whitening Patient",
    location: "📍 Kensington, London",
    before: `${CLD}/v1766077551/home_teeth_Whitening_before_wsnotb.png`,
    after: `${CLD}/v1766077551/home_teeth_Whitening_after_cqigym.jpg`,
    concern:
      "The patient attended a consultation because he was unhappy with the yellowish appearance of his teeth. He also had several existing fillings between his lower teeth, which were more noticeable due to the colour of the surrounding enamel.",
    approach:
      "During the consultation, we assessed the condition of his natural teeth and the existing restorations. We discussed suitable options to safely and effectively brighten his smile. Professional home whitening was recommended to achieve a lighter, fresher overall appearance. Before starting treatment, we clearly explained that composite fillings do not whiten, and after whitening, the fillings can be replaced to match the new tooth shade for an even result. The patient fully understood and was keen to proceed.",
    treatment: [
      "Impressions were taken to create custom whitening trays",
      "Professional-strength whitening gel provided with full instructions",
      "Over the whitening period, teeth gradually became noticeably whiter and brighter",
    ],
    result:
      "The patient was extremely happy with the improvement in the shade of his teeth. The whitening successfully lifted his smile to a brighter, more confident appearance. Unfortunately, shortly after completing the whitening, the patient moved away from the area, so we were unable to proceed with replacing and colour-matching the lower fillings as originally planned.",
    quote: "Best £199 I've ever spent. Everyone at my wedding commented on how great my teeth looked!",
  },
  {
    name: "Female Whitening & Veneers Patient",
    location: "📍 London",
    before: `${CLD}/v1766081028/WhatsApp_Image_2025-12-03_at_16.07.43_rzadyg.jpg`,
    after: `${CLD}/v1766081027/WhatsApp_Image_2025-12-03_at_16.07.43_1_fmjkuh.jpg`,
    concern:
      "A young woman in her 20s came to us requesting to \"fix her awful teeth.\" From the moment she sat down, it was clear that her smile was impacting her confidence—she avoided smiling and often covered her mouth when speaking. She explained that her previous dentist had attempted to improve the appearance of her teeth with fillings, but the results were never satisfying. Her concerns included gaps between the teeth, a darker tooth shade, a poorly shaped veneer on the upper left lateral incisor, and general asymmetry. As she shared her story, she became emotional and started crying in the chair—she felt she had completely lost confidence in her smile.",
    approach:
      "After reassuring her and taking time to put her at ease, we carefully discussed suitable treatment options. To achieve a natural and long-lasting improvement, we agreed on a two-phase approach: Professional Whitening to brighten her overall tooth shade, followed by six porcelain veneers (upper canine to canine) were planned following assessment to improve shape, alignment, symmetry, and overall aesthetics.",
    treatment: [
      "Professional home whitening to uplift the overall colour of her teeth",
      "Detailed smile design and shade analysis",
      "Tooth preparation was kept as conservative as clinically appropriate for this case",
      "Placement of aesthetic temporary veneers to preview the new smile",
      "Fabrication of highly detailed porcelain veneers by the dental laboratory",
      "Final bonding of the veneers for durability and a natural appearance",
    ],
    result:
      "The final transformation was exceptional. When the veneers were fitted, the patient became emotional once again—this time with tears of joy. She hugged the clinician and expressed how the treatment had completely changed how she feels about herself. A few weeks later, her confidence had fully returned. Her smile, posture and overall presence were transformed, reflecting her happiness and renewed self-esteem. She went from feeling withdrawn and insecure to presenting herself as a confident, positive and empowered young woman.",
    quote:
      "This treatment has completely changed how I feel about myself. I went from hiding my smile to showing it off proudly.",
  },
  {
    name: "Teeth Whitening Patient",
    location: "📍 London",
    before: `${CLD}/v1771765267/Teeth_Whitening_By_Dr_Reza_Davari_before_msw1za.jpg`,
    after: `${CLD}/v1771765267/Teeth_Whitening_By_Dr_Reza_Davari_after_k2pmue.jpg`,
    concern:
      "The patient was unhappy with the overall shade of their teeth and wanted a noticeably whiter, brighter smile.",
    approach:
      "After a full clinical examination, Dr Reza Davari recommended professional home whitening with custom-fitted trays and 6% hydrogen peroxide gel.",
    treatment: [
      "Full dental assessment by Dr Reza Davari",
      "Impressions taken for custom-fitted whitening trays",
      "Professional-grade whitening gel provided with detailed instructions",
      "Patient completed the whitening course at home",
    ],
    result:
      "The patient achieved a noticeably whiter, brighter smile. Treatment carried out by Dr Reza Davari.",
    quote: "",
  },
];

export const galleryMore = [
  {
    before: `${CLD}/v1766077914/home_teeth_whitening_before_x4sqbs.jpg`,
    after: `${CLD}/v1766077915/home_teeth_whitening_after_2_ybvpko.jpg`,
  },
  {
    before: `${CLD}/f_auto/v1765885538/IMG_9261_bmkl2u.heic`,
    after: `${CLD}/f_auto/v1765885540/IMG_9265_wecc8u.heic`,
  },
  {
    before: `${CLD}/f_auto/v1765885533/IMG_9233_m70jbq.heic`,
    after: `${CLD}/f_auto/v1765885535/IMG_9235_bf4gbi.heic`,
  },
];

/* -------------------------------------------------------------- locations */

export const howItWorks = [
  {
    n: "1",
    title: "Consultation",
    body: "Visit our clinic for a thorough dental assessment. Your dentist checks suitability and discusses realistic expectations.",
  },
  {
    n: "2",
    title: "Impressions",
    body: "We take impressions of your teeth to create custom-fitted trays that ensure even gel coverage and comfortable wear.",
  },
  {
    n: "3",
    title: "Custom Trays",
    body: "Your trays are professionally fabricated to fit your teeth precisely. You collect them with your whitening gel and full instructions.",
  },
  {
    n: "4",
    title: "Home Whitening",
    body: "Apply the gel using your custom trays at home, typically for 1–2 hours daily over 2–3 weeks. Professional support is available throughout.",
  },
  {
    n: "5",
    title: "Results & Aftercare",
    body: "Enjoy your brighter smile. We provide aftercare guidance and affordable top-up gel to help maintain your results long-term.",
  },
];

export const clinicalCare = [
  {
    title: "Clinical Expertise",
    body: "All treatments provided by GDC-registered dental professionals with extensive experience in professional teeth whitening.",
  },
  {
    title: "CQC Regulated",
    body: "Our clinic is fully regulated by the Care Quality Commission (Provider: Medical and Dental Limited, CQC ID: 1-20629579981).",
  },
  {
    title: "UK-Compliant Materials",
    body: "We use professional-grade, enamel-safe whitening materials meeting strict UK dental regulations (6% H₂O₂ maximum).",
  },
  {
    title: "Suitability Assessed",
    body: "Every patient receives a thorough dental assessment before treatment to ensure whitening is appropriate for them.",
  },
  {
    title: "Sensitivity Managed",
    body: "Our dentists provide sensitivity management plans and use gels with desensitising agents for comfortable treatment.",
  },
  {
    title: "Ongoing Support",
    body: "Professional guidance available throughout your treatment. You are never on your own during the whitening process.",
  },
];

export const locationPackage = {
  eyebrow: "COMPLETE PACKAGE",
  title: "Professional Home Whitening",
  price: "From £199",
  items: [
    "Initial consultation & suitability assessment",
    "Custom-fitted whitening trays",
    "Full course of professional-grade gel (6% H₂O₂)",
    "Dentist supervision throughout treatment",
    "Detailed usage instructions",
    "Aftercare guidance & follow-up support",
  ],
  note: "✓ No hidden fees ✓ Pay nothing until treatment day",
  disclaimer: "Suitability assessed at consultation. Temporary sensitivity may occur.",
};

export const southKen = {
  eyebrow: "⭐ 4.9/5 FROM 300+ GOOGLE REVIEWS",
  h1a: "Teeth Whitening in",
  h1b: "South Kensington",
  lead: "Professional dentist-led teeth whitening from just £199 at our CQC-registered clinic on Old Brompton Road — directly opposite South Kensington tube station. GDC-registered dentists, custom-fitted trays, professional-grade treatment.",
  badges: ["✓ GDC Registered Dentists", "✓ CQC Regulated Clinic", "✓ From £199 All-Inclusive"],
  stats: [
    { value: "£199", label: "COMPLETE PACKAGE" },
    { value: "2 min", label: "FROM SK TUBE" },
    { value: "300+", label: "GOOGLE REVIEWS" },
    { value: "15+ Years", label: "ESTABLISHED" },
  ],
  resultsHeading: "Real Results from Our South Kensington Clinic",
  resultsSub: "Genuine before & after transformations from patients treated at our SW7 clinic.",
  resultsNote:
    "*Individual results vary. Images show actual patient outcomes. Suitability assessed at consultation.",
  aboutHeading: "Professional Teeth Whitening in South Kensington, SW7",
  aboutBody: [
    "Our South Kensington teeth whitening clinic is located at 20 Old Brompton Road, directly opposite South Kensington tube station — one of London's best-connected locations on the District, Circle, and Piccadilly lines. Whether you work near the Natural History Museum, study at Imperial College London, or live in the surrounding SW7 area, professional whitening is right on your doorstep.",
    "Teeth Whitening London is the dedicated whitening clinic of South Kensington Medical & Dental Centre, a CQC-registered practice established for over 15 years. We use the same professional-grade whitening gel as clinics charging £400–600 — products containing up to 6% hydrogen peroxide, the UK legal maximum for dentist-prescribed whitening. The difference? Because whitening is all we do, our GDC-registered dentists see more whitening cases in a week than most practices see in a year, and we pass the volume savings on to you.",
    "Each treatment begins with a thorough consultation to assess your suitability. Your dentist takes impressions for custom-fitted trays, ensuring even gel coverage and comfortable wear. You then complete your whitening at home over 2–3 weeks, with professional support available throughout. Complete teeth whitening packages start from £199, with no hidden fees — that includes consultation, custom trays, a full course of professional gel, and aftercare guidance.",
  ],
  whyHeading: "Why Patients Choose Our South Kensington Clinic",
  why: [
    { title: "2 Minutes from South Kensington Tube", body: "District, Circle & Piccadilly lines" },
    { title: "GDC-Registered Dentists", body: "Professional care from qualified dental professionals" },
    { title: "CQC-Regulated Clinic", body: "Registered with the Care Quality Commission" },
    { title: "Custom-Fitted Trays", body: "Made from your impressions for even, comfortable results" },
    { title: "From £199 All-Inclusive", body: "No hidden fees, consultation to aftercare included" },
    { title: "15+ Years Established", body: "Part of South Kensington Medical & Dental Centre" },
  ],
  insideHeading: "Inside Our South Kensington Clinic",
  insideSub:
    "A modern, welcoming practice at 20 Old Brompton Road — directly opposite South Kensington tube station.",
  insideImages: [
    {
      src: img.skExterior,
      alt: "South Kensington Medical & Dental clinic exterior at 20 Old Brompton Road, London SW7",
    },
    { src: img.skReception, alt: "Reception area inside our South Kensington teeth whitening clinic" },
    { src: img.skTreatmentRoom, alt: "Modern treatment room at South Kensington Medical & Dental clinic" },
  ],
  travelHeading: "Getting to Our South Kensington Clinic",
  travelSub: "Our clinic at 20 Old Brompton Road is one of London's most accessible dental locations.",
  travel: [
    {
      title: "By Tube",
      body: "South Kensington station (District, Circle, Piccadilly) — we are directly opposite the station exit.",
      meta: "2 MINUTES WALK",
    },
    {
      title: "By Bus",
      body: "Routes 14, 49, 70, 74, 345, 414, 430, C1 all stop within 2 minutes of the clinic.",
      meta: "STOPS NEARBY",
    },
    {
      title: "By Car",
      body: "Pay & display parking available on surrounding streets. Several NCP car parks within 5 minutes.",
      meta: "PARKING NEARBY",
    },
    {
      title: "Walking",
      body: "Easy walk from Knightsbridge, Chelsea, Earl's Court, and Kensington via Old Brompton Road.",
      meta: "CENTRAL LOCATION",
    },
  ],
  areasHeading: "Areas We Serve from South Kensington",
  areasSub:
    "Our SW7 clinic welcomes patients from across West and Central London. We are conveniently located for residents and workers in:",
  areas: [
    "Chelsea (SW3)",
    "Knightsbridge (SW1X)",
    "Kensington (W8)",
    "Earl's Court (SW5)",
    "Fulham (SW6)",
    "Belgravia (SW1W)",
    "Brompton (SW3)",
    "Gloucester Road (SW7)",
    "Victoria (SW1)",
    "Battersea (SW11)",
    "Notting Hill (W11)",
    "Mayfair (W1)",
    "Paddington (W2)",
    "Hammersmith (W6)",
    "Westminster (SW1)",
    "Wandsworth (SW18)",
    "Clapham (SW4)",
    "Pimlico (SW1V)",
  ],
  secondClinic: {
    eyebrow: "NOW OPEN",
    title: "Our Second Clinic: City of London",
    body: "We're opening a new clinic at 5 Ave Maria Lane, EC4M 7AQ — bringing the same professional, dentist-led whitening to the Square Mile. Same team, same £199 pricing.",
    cta: "Learn More About Our City Clinic →",
  },
  careHeading: "Expert Care from GDC-Registered Dentists",
  careSub: "Clinical excellence and patient safety are at the heart of everything we do.",
  teamHeading: "Meet Your GDC-Registered Dentists",
  teamSub: "Every whitening treatment is supervised by qualified dental professionals",
  pricingHeading: "Teeth Whitening in South Kensington — Pricing",
  pricingSub:
    "Transparent pricing with no hidden fees. Everything included from consultation to aftercare.",
  howHeading: "How Professional Home Whitening Works",
  howSub: "Simple process — just one clinic visit required, then whiten from the comfort of home.",
  hoursHeading: "Opening Hours",
  reviewsHeading: "What Our Patients Say",
  reviewsSub: "Rated 4.9/5 from 300+ verified Google reviews.",
  faqHeading: "Teeth Whitening South Kensington — FAQs",
  faqs: [
    {
      q: "Where exactly is your South Kensington clinic?",
      a: "We are located at 20 Old Brompton Road, South Kensington, London SW7 3DL — directly opposite South Kensington tube station. The clinic is part of South Kensington Medical & Dental Centre, a CQC-registered practice with over 15 years of experience.",
    },
    {
      q: "What does the £199 teeth whitening package include?",
      a: "The complete package includes your initial consultation and suitability assessment, custom-fitted whitening trays made from your dental impressions, a full course of professional-grade whitening gel (6% hydrogen peroxide — the UK legal maximum), detailed instructions, and aftercare guidance. There are no hidden fees.",
    },
    {
      q: "Is teeth whitening at your South Kensington clinic safe?",
      a: "Yes. All treatments are provided by GDC-registered dentists in our CQC-regulated clinic. We assess suitability at your consultation, use only UK-approved professional materials with desensitising agents, and provide ongoing support throughout your treatment. Temporary sensitivity may occur but is typically mild and short-lived.",
    },
    {
      q: "How white will my teeth get?",
      a: "Results vary between individuals based on factors including natural tooth shade, lifestyle habits, and treatment compliance. Most patients achieve a noticeably whiter smile within 2–3 weeks. We aim for natural-looking results rather than unrealistic expectations, and your dentist will discuss achievable outcomes at your consultation.",
    },
    {
      q: "How long do the whitening results last?",
      a: "With good oral hygiene and sensible dietary habits, results typically last 1–2 years. We provide aftercare guidance and offer affordable top-up gel (from £35) so you can maintain your results long-term without needing a full repeat treatment.",
    },
    {
      q: "Can I whiten my teeth if I have sensitivity?",
      a: "Many patients with mild sensitivity can still whiten safely under professional supervision. Our dentists assess your suitability and can adjust application times and gel concentration to minimise discomfort. We use gels containing desensitising agents for added comfort. Suitability is confirmed at your consultation.",
    },
  ],
  ctaHeading: "Book Your Teeth Whitening in South Kensington",
  ctaSub:
    "Professional, dentist-supervised whitening from £199. Book your consultation at our CQC-regulated clinic today.",
  ctaNote: "Suitability assessed at consultation • Pay nothing until treatment day",
};

export const cityOfLondon = {
  eyebrow: "✨ NOW OPEN",
  h1a: "Teeth Whitening in the",
  h1b: "City of London",
  lead: "Professional dentist-led teeth whitening from just £199, now in the Square Mile. St Paul's Medical & Dental at 5 Ave Maria Lane, EC4M 7AQ — the same GDC-registered team, same clinical standards, same trusted treatment as our South Kensington practice. CQC-registered and taking bookings now.",
  badges: ["✓ GDC Registered Dentists", "✓ CQC Registered", "✓ From £199 All-Inclusive"],
  stats: [
    { value: "£199", label: "COMPLETE PACKAGE" },
    { value: "3 min", label: "FROM ST PAUL'S" },
    { value: "Now Open", label: "CQC REGISTERED" },
    { value: "Same Team", label: "TRUSTED DENTISTS" },
  ],
  notice: {
    title: "✨ St Paul's Medical & Dental is now open",
    body: "Our City of London clinic at 5 Ave Maria Lane is open and CQC-registered. Book your appointment online now — same team, same treatment, same £199 pricing as South Kensington.",
  },
  resultsHeading: "Results from Our South Kensington Clinic",
  resultsSub: "The same GDC-registered dentists delivering these results will be at our City clinic.",
  resultsNote:
    "*Individual results vary. Images show actual patient outcomes from our South Kensington clinic. Suitability assessed at consultation.",
  aboutHeading: "Professional Teeth Whitening for the Square Mile",
  aboutBody: [
    "We've brought professional teeth whitening to the City of London with our clinic at 5 Ave Maria Lane, EC4M 7AQ — in the heart of the Square Mile, just minutes from St Paul's Cathedral, the Old Bailey, and the Barbican. If you work in the City, you no longer need to travel across London for dentist-led whitening.",
    "Our City clinic is operated by the same GDC-registered dentists who deliver results at our established South Kensington practice. The treatment is identical to what you'd receive at any top London dental clinic: your dentist assesses suitability, takes impressions for custom-fitted trays, and prescribes professional-grade whitening gel containing up to 6% hydrogen peroxide. Most dental practices charge £300–600 for this treatment — because we only do whitening, we offer it from £199. The clinic is CQC-registered, and you can book online now.",
    "The City clinic is designed for busy professionals who want to fit whitening around their working day. With opening hours of Monday to Friday, 8am to 8pm, you can visit before work, during lunch, or on your way home. One visit is all that's needed — you then complete your whitening at home over 2–3 weeks with professional support available throughout. Complete teeth whitening packages start from £199, with no hidden fees.",
  ],
  whyHeading: "Why the City of London Clinic",
  why: [
    { title: "3 Minutes from St Paul's Tube", body: "Plus 5 more stations within 8 minutes" },
    { title: "Same GDC-Registered Team", body: "The dentists you trust from South Kensington" },
    { title: "CQC Registered", body: "Regulated by the Care Quality Commission" },
    { title: "Extended Hours for City Workers", body: "Monday to Friday, 8am to 8pm" },
    { title: "From £199 All-Inclusive", body: "Same pricing as South Kensington, no hidden fees" },
    { title: "One Clinic Visit", body: "Then complete whitening from home at your own pace" },
  ],
  insideHeading: "Inside St Paul's Medical & Dental",
  insideSub: "A modern, welcoming practice at 5 Ave Maria Lane — just 3 minutes' walk from St Paul's station.",
  insideImages: [
    {
      src: img.cityShopFront,
      alt: "St Paul's Medical & Dental clinic shop front at 5 Ave Maria Lane, City of London EC4",
    },
    { src: img.cityReception, alt: "Reception at St Paul's Medical & Dental clinic in the City of London" },
    { src: img.cityWaiting, alt: "Waiting area at St Paul's Medical & Dental clinic in the City of London" },
  ],
  travelHeading: "Getting to Our City of London Clinic",
  travelSub:
    "5 Ave Maria Lane is one of the best-connected locations in the City, with six tube stations within walking distance.",
  travel: [
    { title: "St Paul's", body: "Central line — the closest station to our clinic.", meta: "3 MINUTES WALK" },
    {
      title: "City Thameslink",
      body: "Thameslink — direct services from across London and the South East.",
      meta: "4 MINUTES WALK",
    },
    {
      title: "Blackfriars",
      body: "District, Circle lines — walk north across Ludgate Circus.",
      meta: "5 MINUTES WALK",
    },
    {
      title: "Mansion House",
      body: "District, Circle lines — walk west along Queen Victoria Street.",
      meta: "6 MINUTES WALK",
    },
  ],
  travelExtra: [
    { title: "ALSO NEARBY", lines: ["Bank — 8 min walk", "Farringdon — 8 min walk"] },
    { title: "BY BUS", lines: ["Routes 4, 11, 15, 17, 26", "Stops within 3 minutes"] },
  ],
  areasHeading: "Areas We'll Serve from the City",
  areasSub:
    "Our EC4 clinic will be ideally located for workers and residents across the City and East London:",
  areas: [
    "Bank (EC2R)",
    "St Paul's (EC4M)",
    "Barbican (EC2Y)",
    "Liverpool Street (EC2M)",
    "Holborn (WC1V)",
    "Moorgate (EC2R)",
    "Farringdon (EC1A)",
    "Chancery Lane (WC2A)",
    "Shoreditch (EC2A)",
    "Clerkenwell (EC1R)",
    "Fleet Street (EC4A)",
    "Temple (WC2R)",
    "Aldgate (EC3N)",
    "Tower Hill (EC3N)",
    "Monument (EC3R)",
    "Cannon Street (EC4N)",
  ],
  otherClinic: {
    eyebrow: "OPEN NOW — BOOKING AVAILABLE",
    title: "Need an Appointment Now?",
    body: "Our South Kensington clinic at 20 Old Brompton Road, SW7 3DL is open and accepting new patients. Same GDC-registered team, same £199 pricing, same professional results.",
    cta: "Book at South Kensington →",
  },
  careHeading: "Expert Care from GDC-Registered Dentists",
  careSub: "The same clinical excellence you trust at South Kensington, now in the City.",
  teamHeading: "Meet Your GDC-Registered Dentists",
  teamSub: "The same trusted professionals from our South Kensington clinic",
  pricingHeading: "Teeth Whitening in the City of London — Pricing",
  pricingSub: "Same transparent pricing as our South Kensington clinic. No hidden fees.",
  howHeading: "How Professional Home Whitening Works",
  howSub: "Simple process — just one clinic visit required, then whiten from the comfort of home.",
  hoursHeading: "Opening Hours — City of London",
  reviewsHeading: "What Our Patients Say",
  reviewsSub: "Rated 4.9/5 from 300+ verified Google reviews across our practice.",
  faqHeading: "Teeth Whitening City of London — FAQs",
  faqs: [
    {
      q: "Is your City of London clinic open?",
      a: "Yes. St Paul's Medical & Dental at 5 Ave Maria Lane, EC4M 7AQ is now open and CQC-registered. You can book online or call 020 7043 4315. Our established South Kensington clinic at 20 Old Brompton Road, SW7 3DL also remains available — same treatments, same pricing.",
    },
    {
      q: "What does the £199 teeth whitening package include?",
      a: "The complete package includes your initial consultation and suitability assessment, custom-fitted whitening trays made from your dental impressions, a full course of professional-grade whitening gel (6% hydrogen peroxide — the UK legal maximum), detailed instructions, and aftercare guidance. There are no hidden fees.",
    },
    {
      q: "Will the City clinic have the same team?",
      a: "Yes. Our City of London clinic is staffed by the same GDC-registered dentists who work at our South Kensington practice. You will receive the same standard of professional care, using the same proven treatment protocols and UK-approved materials.",
    },
    {
      q: "How do I get to the City of London clinic?",
      a: "Our City clinic at 5 Ave Maria Lane is exceptionally well-connected: St Paul's station is 3 minutes' walk, City Thameslink 4 minutes, Blackfriars 5 minutes, Mansion House 6 minutes, Bank 8 minutes, and Farringdon 8 minutes. Multiple bus routes (4, 11, 15, 17, 26) also serve the area.",
    },
    {
      q: "Is teeth whitening safe?",
      a: "Yes. All treatments are provided by GDC-registered dentists using UK-approved professional materials with desensitising agents. Both of our clinics are CQC-registered. Temporary sensitivity may occur but is typically mild and short-lived.",
    },
    {
      q: "Can I book at the City clinic now?",
      a: "Yes — appointments at St Paul's Medical & Dental are available to book online now. Simply choose your service and pick a time, or call us on 020 7043 4315. You can also book at our South Kensington clinic — it's the same team, same treatment, and same £199 pricing.",
    },
  ],
  ctaHeading: "Professional Teeth Whitening in the City of London",
  ctaSub:
    "St Paul's Medical & Dental at 5 Ave Maria Lane is now open. Book your whitening appointment online from £199.",
  ctaNote: "Suitability assessed at consultation • Pay nothing until treatment day",
};

export const bookUrl = "/book";
export const bookCityUrl = "/book?clinic=stpauls";
