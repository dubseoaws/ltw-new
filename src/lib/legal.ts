export type LegalListItem = string | { label: string; text: string };

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: readonly LegalListItem[] };

export type LegalSection = {
  heading: string;
  blocks: readonly LegalBlock[];
};

export type LegalDoc = {
  h1: string;
  lead: string;
  intro: string;
  sections: readonly LegalSection[];
  footerLink: { label: string; href: string };
};

export const privacyPolicy: LegalDoc = {
  h1: "Privacy Policy",
  lead: "How we collect, use, and protect your information",
  intro:
    'South Kensington Medical and Dental ("the Clinic", "we", "us", or "our") is committed to protecting your privacy and ensuring your personal data is handled in accordance with UK data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.',
  sections: [
    {
      heading: "Who We Are",
      blocks: [
        {
          type: "p",
          text: "South Kensington Medical and Dental is a private healthcare provider offering medical and dental services. We are the data controller for the personal information we collect from you.",
        },
        { type: "p", text: "Contact Details:" },
        {
          type: "ul",
          items: [
            "Address: 20 Old Brompton Road, South Kensington, London SW7 3DL",
            "Phone: 020 7043 4315",
            "Email: info@teethwhitening.london",
          ],
        },
      ],
    },
    {
      heading: "Information We Collect",
      blocks: [
        {
          type: "p",
          text: "We may collect and process the following types of personal information:",
        },
        { type: "h3", text: "Personal Identification Information" },
        {
          type: "ul",
          items: [
            "Name, date of birth, and contact details",
            "NHS number (if applicable)",
            "Emergency contact information",
            "Proof of identity documents",
          ],
        },
        { type: "h3", text: "Health Information" },
        {
          type: "ul",
          items: [
            "Medical history and current health conditions",
            "Dental records and treatment history",
            "Test results and diagnostic images",
            "Prescription and medication details",
            "Allergies and adverse reactions",
          ],
        },
        { type: "h3", text: "Financial Information" },
        {
          type: "ul",
          items: [
            "Payment card details (processed securely)",
            "Insurance information",
            "Billing records",
          ],
        },
        { type: "h3", text: "Technical Information" },
        {
          type: "ul",
          items: [
            "IP address and browser type",
            "Pages visited on our website",
            "Cookies and similar technologies",
          ],
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      blocks: [
        { type: "p", text: "We use your personal information for the following purposes:" },
        {
          type: "ul",
          items: [
            {
              label: "Healthcare provision:",
              text: "To provide medical and dental care, including diagnosis, treatment, and follow-up care",
            },
            {
              label: "Appointment management:",
              text: "To schedule, confirm, and remind you of appointments",
            },
            {
              label: "Communication:",
              text: "To respond to enquiries and provide relevant healthcare information",
            },
            {
              label: "Legal obligations:",
              text: "To comply with legal and regulatory requirements",
            },
            {
              label: "Service improvement:",
              text: "To improve our services and patient experience",
            },
            {
              label: "Billing and payments:",
              text: "To process payments and manage accounts",
            },
            {
              label: "Safety and security:",
              text: "To maintain a safe environment for patients and staff",
            },
          ],
        },
      ],
    },
    {
      heading: "Legal Basis for Processing",
      blocks: [
        { type: "p", text: "We process your personal data under the following legal bases:" },
        {
          type: "ul",
          items: [
            {
              label: "Contract:",
              text: "Processing necessary to provide healthcare services you have requested",
            },
            {
              label: "Legal obligation:",
              text: "Processing required by law (e.g., maintaining medical records)",
            },
            {
              label: "Vital interests:",
              text: "Processing necessary to protect your life or health in emergencies",
            },
            {
              label: "Legitimate interests:",
              text: "Processing for clinic administration and service improvement",
            },
            {
              label: "Consent:",
              text: "Where you have given explicit consent for specific purposes",
            },
          ],
        },
        {
          type: "p",
          text: "For special category data (health information), we rely on the exemption for healthcare purposes under UK GDPR Article 9(2)(h).",
        },
      ],
    },
    {
      heading: "Sharing Your Information",
      blocks: [
        { type: "p", text: "We may share your information with:" },
        {
          type: "ul",
          items: [
            {
              label: "Healthcare providers:",
              text: "GPs, specialists, hospitals, and other medical professionals involved in your care",
            },
            {
              label: "Insurance companies:",
              text: "Where you have authorised us to share information for claims",
            },
            { label: "Laboratories:", text: "For diagnostic testing and analysis" },
            {
              label: "Regulatory bodies:",
              text: "Such as the CQC, GDC, or GMC where required",
            },
            { label: "Legal authorities:", text: "Where required by law or court order" },
            {
              label: "Service providers:",
              text: "IT support, payment processors, and administrative services (under strict confidentiality agreements)",
            },
          ],
        },
        {
          type: "p",
          text: "We will never sell your personal information to third parties for marketing purposes.",
        },
      ],
    },
    {
      heading: "Data Security",
      blocks: [
        {
          type: "p",
          text: "We implement appropriate security measures to protect your personal information, including:",
        },
        {
          type: "ul",
          items: [
            "Encrypted storage of electronic records",
            "Secure access controls and authentication",
            "Regular security audits and staff training",
            "Physical security measures for paper records",
            "Secure disposal of confidential information",
          ],
        },
      ],
    },
    {
      heading: "Data Retention",
      blocks: [
        {
          type: "p",
          text: "We retain your personal information in accordance with legal requirements and professional guidelines:",
        },
        {
          type: "ul",
          items: [
            {
              label: "Adult medical records:",
              text: "8 years after last treatment or until age 25, whichever is longer",
            },
            {
              label: "Children's records:",
              text: "Until the patient reaches age 25 or 8 years after last treatment",
            },
            {
              label: "Dental records:",
              text: "11 years from the date of last treatment",
            },
            { label: "Financial records:", text: "7 years for tax purposes" },
          ],
        },
      ],
    },
    {
      heading: "Your Rights",
      blocks: [
        { type: "p", text: "Under UK data protection law, you have the right to:" },
        {
          type: "ul",
          items: [
            { label: "Access:", text: "Request a copy of your personal information" },
            { label: "Rectification:", text: "Request correction of inaccurate information" },
            {
              label: "Erasure:",
              text: "Request deletion of your information (subject to legal retention requirements)",
            },
            {
              label: "Restriction:",
              text: "Request limited processing of your information",
            },
            { label: "Portability:", text: "Receive your data in a portable format" },
            { label: "Objection:", text: "Object to certain types of processing" },
            { label: "Withdraw consent:", text: "Where processing is based on consent" },
          ],
        },
        {
          type: "p",
          text: "To exercise any of these rights, please contact us using the details above. We will respond within one month of receiving your request.",
        },
      ],
    },
    {
      heading: "Cookies",
      blocks: [
        {
          type: "p",
          text: "Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device that help us understand how you use our website.",
        },
        { type: "p", text: "We use:" },
        {
          type: "ul",
          items: [
            {
              label: "Essential cookies:",
              text: "Required for the website to function properly",
            },
            {
              label: "Analytics cookies:",
              text: "To understand how visitors use our website",
            },
            {
              label: "Marketing cookies:",
              text: "To deliver relevant advertisements (with your consent)",
            },
          ],
        },
        {
          type: "p",
          text: "You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
        },
      ],
    },
    {
      heading: "CCTV",
      blocks: [
        {
          type: "p",
          text: "CCTV cameras operate in public and communal areas of the clinic for security purposes. Footage is stored securely and retained for up to 30 days unless required for investigation. CCTV is never used in private treatment rooms.",
        },
      ],
    },
    {
      heading: "Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
        },
        { type: "p", text: "Last updated: December 2025" },
      ],
    },
    {
      heading: "Complaints",
      blocks: [
        {
          type: "p",
          text: "If you are unhappy with how we have handled your personal information, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):",
        },
        { type: "ul", items: ["Website: ico.org.uk", "Phone: 0303 123 1113"] },
        {
          type: "p",
          text: "We would appreciate the opportunity to address your concerns before you contact the ICO. Please contact us first at info@teethwhitening.london.",
        },
      ],
    },
  ],
  footerLink: { label: "← Read our Terms and Conditions", href: "/terms" },
};

export const termsAndConditions: LegalDoc = {
  h1: "Terms and Conditions",
  lead: "Please read these terms carefully before using our services",
  intro:
    'Welcome to South Kensington Medical and Dental, referred to in this document as "the Clinic." By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.',
  sections: [
    {
      heading: "About Us",
      blocks: [
        {
          type: "p",
          text: "The Clinic is a private medical and dental centre located in South Kensington, London. We provide a wide range of healthcare services, including GP consultations, health screening, diagnostic testing, and general and specialist dental care.",
        },
      ],
    },
    {
      heading: "Use of the Website",
      blocks: [
        {
          type: "p",
          text: "You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights or restrict the use of the website by any other person.",
        },
        {
          type: "p",
          text: "The Clinic reserves the right to suspend or withdraw website access at any time without notice.",
        },
      ],
    },
    {
      heading: "Medical Disclaimer",
      blocks: [
        {
          type: "p",
          text: "The information on our website is provided for general guidance and does not constitute medical advice. It is not a substitute for consultation with a qualified healthcare professional. If you have any health concerns, please contact a clinician directly.",
        },
      ],
    },
    {
      heading: "Self-Request Tests",
      blocks: [
        {
          type: "p",
          text: "If you undergo any tests on a self-request basis, i.e., without prior consultation with one of our clinicians, the following terms apply:",
        },
        {
          type: "ul",
          items: [
            "The test results will not be reviewed or interpreted by a doctor unless you book and pay for a separate consultation.",
            "The Clinic is not responsible for providing a clinical diagnosis or advising on your general health based solely on self-request test results.",
            "This service is not intended for clinically urgent cases, as blood samples are sent to an external laboratory. Turnaround times are estimates and not guarantees.",
            "The Clinic accepts no responsibility for self-referral tests performed without proper medical consultation, or for results affected by omission, dishonesty, or misrepresentation of relevant medical history.",
            "We strongly recommend booking a consultation with a UK-registered medical practitioner if you have any symptoms or concerns.",
          ],
        },
      ],
    },
    {
      heading: "Appointments and Cancellations",
      blocks: [
        {
          type: "p",
          text: "Appointments may be booked online, by phone, or in person. While we aim to accommodate your preferences, we cannot guarantee the availability of specific dates, times, or clinicians.",
        },
        {
          type: "p",
          text: "Please give at least 24 hours' notice for cancellations. Missed appointments or cancellations made with insufficient notice may incur a charge.",
        },
      ],
    },
    {
      heading: "Fees and Payment",
      blocks: [
        {
          type: "p",
          text: "Service fees are made clear at the time of booking or enquiry. Full payment is due at the time of service, unless agreed otherwise in writing. We accept most major debit and credit cards. Refunds for missed appointments are issued only at the Clinic's discretion.",
        },
      ],
    },
    {
      heading: "Confidentiality and Data Protection",
      blocks: [
        {
          type: "p",
          text: "We take your right to confidentiality seriously. All personal and medical information is handled in accordance with the UK GDPR and our Privacy Policy. Your information will only be shared when necessary for your care or where legally required.",
        },
        {
          type: "ul",
          items: [
            "Information may be shared with GPs, insurance providers, or other healthcare professionals directly involved in your care.",
            "Your data may be stored securely in both digital and paper formats.",
            "CCTV is used in public and communal areas for safety. It is never used in private treatment rooms without prior consent.",
          ],
        },
      ],
    },
    {
      heading: "Our Staff",
      blocks: [
        { type: "p", text: "All our staff are:" },
        {
          type: "ul",
          items: [
            "Fully trained and experienced for their roles",
            "Registered with the appropriate professional bodies",
            "Subject to thorough background checks",
            "Required to follow strict clinical and ethical standards",
            "Committed to ongoing professional development and delivering high-quality patient care",
          ],
        },
      ],
    },
    {
      heading: "Behavioural Expectations",
      blocks: [
        { type: "p", text: "To ensure a safe and respectful environment:" },
        {
          type: "ul",
          items: [
            "We ask all patients to treat staff and other service users with courtesy and respect.",
            "Loud, abusive, or aggressive behaviour will not be tolerated.",
            "Patients under the influence of alcohol or illegal substances may be refused treatment.",
            "Children must be supervised at all times. Your appointment may be cancelled if children are left unattended.",
            "The Clinic reserves the right to refuse service or future appointments if a patient is abusive or repeatedly breaches clinic policies.",
            "Any individual who acts inappropriately may be asked to leave and may be permanently barred. Medical records may be deleted in such circumstances, in accordance with applicable regulations.",
          ],
        },
      ],
    },
    {
      heading: "Making a Complaint or Giving Feedback",
      blocks: [
        {
          type: "p",
          text: "We value feedback as an opportunity to improve. You are encouraged to raise concerns, no matter how small.",
        },
        {
          type: "ul",
          items: [
            "Complaints will be taken seriously and acknowledged within 3 working days.",
            "A full response will be provided within 10 working days. If this is not possible, you will be informed regarding the timeline of the response.",
            "If upheld, a written apology will be issued and appropriate corrective action taken.",
            "You may involve an impartial third party at any stage of the process.",
          ],
        },
        {
          type: "p",
          text: "Your privacy and dignity are of utmost importance to us. Please speak to a senior staff member if at any time you feel these are not being respected.",
        },
      ],
    },
    {
      heading: "External Links",
      blocks: [
        {
          type: "p",
          text: "Links to external websites are provided for convenience only. The Clinic does not endorse and is not responsible for the content, policies, or practices of any third-party sites.",
        },
      ],
    },
    {
      heading: "Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "While we make every effort to ensure the accuracy and reliability of the content on our website, the Clinic does not accept liability for errors or omissions. We are not liable for any loss or damage resulting from your reliance on information found on this website or from services provided without full clinical oversight.",
        },
      ],
    },
    {
      heading: "Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: "The Clinic may amend these Terms and Conditions from time to time. Any updates will be posted on this page and are effective from the date of publication. Continued use of our website or services implies your acceptance of the revised terms.",
        },
      ],
    },
    {
      heading: "Governing Law",
      blocks: [
        {
          type: "p",
          text: "These Terms and Conditions are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.",
        },
      ],
    },
  ],
  footerLink: { label: "Read our Privacy Policy →", href: "/privacy" },
};
