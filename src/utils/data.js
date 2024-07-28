import {
  BiServer,
  BiNews,
  BiDetail,
  BiRocket,
  BiPaperPlane,
  BiHelpCircle,
  BiLogIn,
  BiUser,
  BiError,
} from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsHeadset } from "react-icons/bs";
import { FaLaptopCode, FaRegClock, FaRegTrashAlt } from "react-icons/fa";

const IconBoxData = [
  {
    classOption: "bg-primary",
    icon: "fal fa-layer-group fa-2x text-white",
    title: "Good Performance",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state .",
  },
  {
    id: 2,
    classOption: "bg-danger",
    icon: "fal fa-shield-check fa-2x text-white",
    title: "Highly Secure",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state.",
  },
  {
    id: 3,
    classOption: "bg-dark",
    icon: "fal fa-code fa-2x text-white",
    title: "Fast Development",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state.",
  },
];
const FaqOneData = [
  {
    faqTitle: "How does back pricing work?",
    faqDesc:
      "Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically methods of empowerment for synergistic sound scenarios.",
  },
  {
    id: 2,
    faqTitle: "How do I calculate how much price?",
    faqDesc:
      "Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.",
  },
  {
    id: 3,
    faqTitle: "Can you show me an example?",
    faqDesc:
      "Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.",
  },
];

const TestimonialData = [
  {
    authorImg: "/testimonial/1.jpg",
    authorName: "Mr.Rupan Oberoi",
    authorTitle: "Founder and CEO at Amaara Herbs",
    quoteTitle: "The Best Template You Got to Have it!",
    authorQuote:
      "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical",
  },
  {
    id: 2,
    authorImg: "/testimonial/2.jpg",
    authorName: "Joan Dho",
    authorTitle: "Founder and CTO",
    quoteTitle: "Best Template for SAAS Company!",
    authorQuote:
      "Dynamically create innovative core competencies with effective best practices promote innovative infrastructures.",
  },
  {
    id: 3,
    authorImg: "/testimonial/3.jpg",
    authorName: "Ranu Mondal",
    authorTitle: "Lead Developer",
    quoteTitle: "It is undeniably good!",
    authorQuote:
      "Rapidiously supply client-centric e-markets and maintainable processes progressively engineer",
  },
  {
    id: 4,
    authorImg: "/testimonial/4.jpg",
    authorName: "Mr.Rupan Oberoi",
    authorTitle: "Founder and CEO at Amaara Herbs",
    quoteTitle: "The Best Template You Got to Have it!",
    authorQuote:
      "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical",
  },
];

const TestimonialOneData = [
  {
    id: "#testimonial-tab-1",
    activeClass: "active",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-1.jpg",
    authorAvatar: "/testimonial/1.jpg",
  },
  {
    id: "#testimonial-tab-2",
    title: "Embarrassed by the First Version.",
    desc: "Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leveraother backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.",
    authorName: "Rupan Oberoi",
    authorDesn: "Web Designer",
    authorThumb: "/testimonial/t-2.jpg",
    authorAvatar: "/testimonial/2.jpg",
  },
  {
    id: "#testimonial-tab-3",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-3.jpg",
    authorAvatar: "/testimonial/3.jpg",
  },
  {
    id: "#testimonial-tab-4",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-4.jpg",
    authorAvatar: "/testimonial/4.jpg",
  },
  {
    id: "#testimonial-tab-5",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-5.jpg",
    authorAvatar: "/testimonial/5.jpg",
  },
];

const registerTestimonial = [
  {
    active: "active show",
    target: "testimonial-tab-1",
    header: "The Best Template You Got to Have it!",
    info: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global.",
    name: "Joe Richard",
    title: "Visual Designer",
  },
  {
    target: "testimonial-tab-2",
    header: "Amazing  template!",
    info: "Distinctively engineer client-centered information. Progressively customize client-centered repurpose viral e-services whereas before 24/7 total linkage.",
    name: "Oberoi R.",
    title: "CEO at Herbs",
  },
  {
    target: "testimonial-tab-3",
    header: "Embarrassed by the First Version!",
    info: " Efficiently whiteboard cross-unit meta-services. Quickly transition standardized schemas via leveraged users. Assertively actualize mission-critical supply chains through.",
    name: "Joan Dho",
    title: "Founder and CTO",
  },
];
const registerTestimonialTarget = [
  {
    active: "active",
    target: "#testimonial-tab-1",
    image: "/testimonial/1.jpg",
  },
  {
    target: "#testimonial-tab-2",
    image: "/testimonial/2.jpg",
  },
  {
    target: "#testimonial-tab-3",
    image: "/testimonial/3.jpg",
  },
];

///footer data
const footerPrimaryPages = [
  {
    title: "Bakış İç Oda Kapısı",
    href: "/products",
  },
  {
    title: "Alber Genau Cam Balkon",
    href: "/products",
  },
  {
    title: "Egepen PVC Sistemleri",
    href: "/products",
  },
  {
    title: "Aliminyum Sistemleri",
    href: "/products",
  },
];

const footerPages = [
  {
    title: "Anasayfa",
    href: "/",
  },
  {
    title: "Kurumsal",
    href: "/about-us",
  },
  {
    title: "Ürünler",
    href: "/products",
  },
  {
    title: "Galeri",
    href: "/campaigns",
  },
  {
    title: "İletişim",
    href: "/contact-us",
  },
];
const footerTemplate = [
  {
    title: "Contact",
    href: "/contact-us",
  },
  {
    title: "Support",
    href: "/help-center",
  },
  {
    title: "Support Single",
    href: "/help-center-single",
  },
  {
    title: "Request for Demo",
    href: "/request-demo",
  },
  {
    title: "Coming Soon",
    href: "/coming-soon",
  },
  {
    title: "Career Single",
    href: "/career-single",
  },
];

//navbar data
const navHomeOne = [
  {
    title: "Sass Company 1",
    info: "It's for SaaS Software Company",
    href: "/",
  },
  {
    title: "Verapen",
    info: "Verapen",
    href: "/daglar-makine",
  },
  {
    title: "Sass Company 2",
    info: " Modern Sass agency",
    href: "sass-company-two",
  },
  {
    title: "Desktop App",
    info: "Web Software Company",
    href: "desktop-app",
  },

  {
    title: "App Landing",
    info: " App and Software Landing",
    href: "app-landing",
  },
  {
    title: "Software Application",
    info: "IT solutions and SaaS Application",
    href: "software-application",
  },
  {
    title: "Startup Agency",
    info: "Different type of Agency",
    href: "startup-agency",
  },
  {
    title: "Data Analysis",
    info: " Software & Data Analysis",
    href: "data-analysis",
  },
  {
    title: "App Landing Two",
    info: "Software & Data Analysis",
    href: "app-landing-two",
  },
  {
    title: "IT Solution",
    info: "IT Solution and Sass Application",
    href: "it-solution",
  },
];

const navHomeTwo = [
  {
    title: "Cyber Security",
    info: "Cyber Security Landing Page",
    href: "cyber-security",
  },
  {
    title: "Crypto Currency",
    info: "Crypto Currency Landing Page",
    href: "crypto-currency",
  },
  {
    title: "Game Solution",
    info: "Crypto Server Landing Page",
    href: "game-solution",
  },
  {
    title: "Payment Gatway",
    info: "Payment Landing Page",
    href: "payment-gateway",
  },
  {
    title: "Digital Marketing",
    info: "Digital Landing Page",
    href: "digital-marketing",
  },
  {
    title: "Conference",
    info: "Conference Landing Page",
    href: "conference",
  },

  {
    title: " Insurance",
    info: " Landing Page",
    href: "-insurance",
  },

  {
    title: "Sass Marketing",
    info: "Sass Marketing Landing Page",
    href: "sass-marketing",
  },
];

//Offcanvas Menu
const offcanvasMenuData = [
  {
    title: "Sass Company 1",
    info: "It's for SaaS Software Company",
    href: "/home",
  },
  {
    title: "Daglar Makine",
    info: "Daglar Makine",
    href: "/daglar-makine",
  },
  {
    title: "Sass Company 2",
    info: " Modern Sass agency",
    href: "sass-company-two",
  },
  {
    title: "Desktop App",
    info: "Web Software Company",
    href: "desktop-app",
  },

  {
    title: "App Landing",
    info: " App and Software Landing",
    href: "app-landing",
  },
  {
    title: "Software Application",
    info: "IT solutions and SaaS Application",
    href: "software-application",
  },
  {
    title: "Startup Agency",
    info: "Different type of Agency",
    href: "startup-agency",
  },
  {
    title: "Data Analysis",
    info: " Software & Data Analysis",
    href: "data-analysis",
  },
  {
    title: "App Landing Two",
    info: "Software & Data Analysis",
    href: "app-landing-two",
  },
  {
    title: "IT Solution",
    info: "IT Solution and Sass Application",
    href: "it-solution",
  },
  {
    title: "Cyber Security",
    info: "Cyber Security Landing Page",
    href: "cyber-security",
  },
  {
    title: "Crypto Currency",
    info: "Crypto Currency Landing Page",
    href: "crypto-currency",
  },
  {
    title: "Game Solution",
    info: "Crypto Server Landing Page",
    href: "game-solution",
  },
  {
    title: "Payment Gatway",
    info: "Payment Landing Page",
    href: "payment-gateway",
  },
  {
    title: "Digital Marketing",
    info: "Digital Landing Page",
    href: "digital-marketing",
  },
  {
    title: "Conference",
    info: "Conference Landing Page",
    href: "conference",
  },
  {
    title: " Insurance",
    info: " Landing Page",
    href: "-insurance",
  },
  {
    title: "Sass Marketing",
    info: "Sass Marketing Landing Page",
    href: "sass-marketing",
  },
];

const navCompanyLinks = [
  {
    title: "Contact Us",
    icon: <BiLogIn />,
    href: "contact-us",
  },
  {
    title: "Service Single",
    icon: <BiServer />,
    href: "single-service",
  },
  {
    title: "Our Latest News",
    icon: <BiNews />,
    href: "blogs",
  },
  {
    title: "News Details",
    icon: <BiDetail />,
    href: "blog-single",
  },
  {
    title: "Career",
    icon: <HiOutlineAcademicCap />,
    href: "career",
  },
  {
    title: "Career Single",
    icon: <HiOutlineAcademicCap />,
    href: "career-single",
  },
  {
    title: "Integrations",
    icon: <BiRocket />,
    href: "integrations",
  },
  {
    title: "Integrations Single",
    icon: <BiPaperPlane />,
    href: "integration-single",
  },
];

const navCompanyPage = [
  {
    title: "Help Center",
    icon: <BiHelpCircle />,
    href: "help-center",
  },
  {
    title: "Help Details",
    icon: <BsHeadset />,
    href: "help-center-single",
  },
  {
    title: "Request for Demo",
    icon: <FaLaptopCode />,
    href: "request-demo",
  },
  {
    title: "User Login",
    icon: <BiLogIn />,
    href: "login",
  },
  {
    title: "User SignUp",
    icon: <BiUser />,
    href: "register",
  },
  {
    title: "Recovery Account",
    icon: <FaRegTrashAlt />,
    href: "password-reset",
  },
  {
    title: "404 Page",
    icon: <BiError />,
    href: "404",
  },
  {
    title: "Coming Soon",
    icon: <FaRegClock />,
    href: "coming-soon",
  },
];

//
const testimonialAuthor = [
  {
    name: "Joe Richard",
    title: "Visual Designer",
    image: "/testimonial/1.jpg",
    target: "#testimonial-tab-1",
  },
  {
    name: "Rupan Oberoi",
    title: "Web Designer",
    image: "/testimonial/2.jpg",
    target: "#testimonial-tab-2",
  },
  {
    name: "Jon Doe",
    title: "Software Engineer",
    image: "/testimonial/3.jpg",
    target: "#testimonial-tab-3",
  },
  {
    name: "Hanry Luice",
    title: "App Developer",
    image: "/testimonial/4.jpg",
    target: "#testimonial-tab-4",
  },
  {
    name: "Ami Nijai",
    title: "Customer Support",
    image: "/testimonial/5.jpg",
    target: "#testimonial-tab-5",
  },
];

const testimonialOne = [
  {
    name: "Joe Richard",
    title: "Visual Designer",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-1.jpg",
    target: "testimonial-tab-1",
    active: "active show",
  },
  {
    name: "Rupan Oberoi",
    title: "Web Designer",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-2.jpg",
    target: "testimonial-tab-2",
  },
  {
    name: "Jon Doe",
    title: "Software Engineer",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-3.jpg",
    target: "testimonial-tab-3",
  },
  {
    name: "Hanry Luice",
    title: "App Developer",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-4.jpg",
    target: "testimonial-tab-4",
  },
  {
    name: "Ami Nijai",
    title: "Customer Support",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-5.jpg",
    target: "testimonial-tab-5",
  },
];

//pricing data
const pricingData = [
  {
    title: "Stater",
    price: "$25",
    time: "/month",
    bgColor: "bg-white",
    textColor: "text-primary",
    btnColor: "btn-outline-primary",
    shape: "left--40 bottom--40",
    listItem: [
      {
        li: "1 Team",
      },
      {
        li: "1 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },

  {
    title: "Advanced",
    price: "$45",
    time: "/month",
    bgColor: "bg-gradient",
    textColor: "text-warning",
    btnColor: "btn-primary",

    listItem: [
      {
        li: "5 Team",
      },
      {
        li: "3 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "24 Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },

  {
    title: "Premium",
    price: "$75",
    time: "/month",
    bgColor: "bg-white",
    textColor: "text-primary",
    btnColor: "btn-outline-primary",
    shape: "right--40 top--40",
    listItem: [
      {
        li: "6 Team",
      },
      {
        li: "8 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "40 Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },
];

//integration data
const integrationOneRight = [
  {
    image: "/integations/7.png",
    className: "integration-7",
  },
  {
    image: "/integations/8.png",
    className: "integration-8",
  },
  {
    image: "/integations/9.png",
    className: "integration-9",
  },
  {
    image: "/integations/10.png",
    className: "integration-10",
  },
  {
    image: "/integations/11.png",
    className: "integration-11",
  },
  {
    image: "/integations/12.png",
    className: "integration-12",
  },
];

const integrationFeature = [
  {
    logo: "/integations/1.png",
    type: "Popular",
    class: "bg-primary-soft text-primary",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/2.png",
    type: "Free",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/3.png",
    type: "Advanced",
    class: "bg-success-soft text-success",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/4.png",
    type: "Premium",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/5.png",
    type: "Popular",
    class: "bg-primary-soft text-primary",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/6.png",
    type: "Basic",
    class: "bg-danger-soft text-danger",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/7.png",
    type: "Free",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/8.png",
    type: "Advanced",
    class: "bg-success-soft text-success",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/9.png",
    type: "Premium",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
];

const integrationOneLeft = [
  {
    image: "/integations/1.png",
    className: "integration-1",
  },
  {
    image: "/integations/2.png",
    className: "integration-2",
  },
  {
    image: "/integations/3.png",
    className: "integration-3",
  },
  {
    image: "/integations/4.png",
    className: "integration-4",
  },
  {
    image: "/integations/5.png",
    className: "integration-5",
  },
  {
    image: "/integations/6.png",
    className: "integration-6",
  },
];

//ourTeam data
const ourTeam = [
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-1.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-2.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-3.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-4.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-5.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-6.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-7.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-8.jpg",
  },
];

//blog data
const blogFeatureData = [
  {
    image: "/news-1.jpeg",
    type: "Design",
    header: "Kayseri Tarım Fuarı",
    info: "22-26 Şubat 2024 tarihlerinde düzenlenen Kayseri Tarım Fuarı’nda Dağlar Makine olarak biz de vardık. Standımızı ziyaret eden, ürünlerimize ilgi gösteren tüm misafirlerimize teşekkür eder, yeniden buluşmayı temenni ederiz.",
    profilePic: "/news-cover-1.jpeg",
    author: "Jane Martin",
    data: "April 24, 2021",
    class: "bg-warning-soft",
  },
  // {
  //   image: "/blog/blog-1.jpg",
  //   type: "Design",
  //   header: "Kayseri Tarım Fuarı",
  //   info: "22-26 Şubat 2024 tarihlerinde düzenlenen Kayseri Tarım Fuarı’nda Dağlar Makine olarak biz de vardık. Standımızı ziyaret eden, ürünlerimize ilgi gösteren tüm misafirlerimize teşekkür eder, yeniden buluşmayı temenni ederiz.",
  //   profilePic: "/news-cover-1.jpeg",
  //   author: "Jane Martin",
  //   data: "April 24, 2021",
  //   class: "bg-warning-soft",
  // },
  // {
  //   image: "/blog/blog-1.jpg",
  //   type: "Design",
  //   header: "Kayseri Tarım Fuarı",
  //   info: "22-26 Şubat 2024 tarihlerinde düzenlenen Kayseri Tarım Fuarı’nda Dağlar Makine olarak biz de vardık. Standımızı ziyaret eden, ürünlerimize ilgi gösteren tüm misafirlerimize teşekkür eder, yeniden buluşmayı temenni ederiz.",
  //   profilePic: "/news-cover-1.jpeg",
  //   author: "Jane Martin",
  //   data: "April 24, 2021",
  //   class: "bg-warning-soft",
  // },
];

//career data
const careerJobCard = [
  {
    type: "Remote - Full Time",
    position: "Developer",
    title: "Jr Frontend Developer",
    className: "bg-primary-soft text-primary",
    listItem: [
      {
        media: "Google",
        location: "London, UK",
        salary: "$35-$45k",
      },
    ],
  },
  {
    type: "Remote - Full Time",
    position: "Designer",
    title: "UI/UX and Product Designer",
    className: "bg-danger-soft text-danger",
    listItem: [
      {
        media: "Figma",
        location: "San Francissco",
        salary: "$25-$35k",
      },
    ],
  },
  {
    type: "Full Time",
    position: "Manager",
    title: "Senior Office Manager",
    className: "bg-success-soft text-success",
    listItem: [
      {
        media: "Dribble",
        location: "California",
        salary: "$55-$65k",
      },
    ],
  },
  {
    type: "Remote",
    position: "Developer",
    title: "Senior Backend Developer",

    listItem: [
      {
        media: "Slack",
        location: "United State US",
        salary: "$55-$62k",
      },
    ],
  },
];

//help center data
const helpCenterFaqDetails = [
  {
    title: "All Support Articles",
    target: "support-tab-1",
    class: "show active",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },

  {
    title: "Payments Query",
    target: "support-tab-2",
    listItem: [
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical with high standards in e-markets. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },

  {
    title: "Setup or Installment",
    target: "support-tab-3",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Technical Support",
    target: "support-tab-4",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Retailers & Customer",
    target: "support-tab-5",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Security Issues",
    target: "support-tab-6",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Brand Creation",
    target: "support-tab-7",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Legal Support",
    target: "support-tab-8",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
];

//desktop app integration two
const brandName = [
  {
    image: "/integations/airbnb.png",
    brand: "Airbnb",
  },
  {
    image: "/integations/figma.png",
    brand: "Figma",
  },
  {
    image: "/integations/facebook.png",
    brand: "Facebook",
  },
  {
    image: "/integations/sales-force.png",
    brand: "Sales Force",
  },
  {
    image: "/integations/atlassian.png",
    brand: "Atlassion",
  },
  {
    image: "/integations/dropbox-2.png",
    brand: "Dropbox",
  },
  {
    image: "/integations/dynamic-365.png",
    brand: "Dynamic-365",
  },
  {
    image: "/integations/erecruiter.png",
    brand: "Erecruiter",
  },
  {
    image: "/integations/evernote.png",
    brand: "Evernote",
  },
  {
    image: "/integations/google-icon.png",
    brand: "Google",
  },
  {
    image: "/integations/slack.png",
    brand: "Slack",
  },
  {
    image: "/integations/google-analytics.png",
    brand: "Google Analytics",
  },
  {
    image: "/integations/google-drive.png",
    brand: "Google Drive",
  },
  {
    image: "/integations/hubspot.png",
    brand: "Hubspot",
  },
  {
    image: "/integations/instagram.png",
    brand: "Instagram",
  },
  {
    image: "/integations/linkedin.png",
    brand: "Linkedin",
  },
  {
    image: "/integations/mailchimp.png",
    brand: "Mailchimp",
  },
  {
    image: "/integations/marekto.png",
    brand: "Merekto",
  },
];
//Service IT
const ItServiceData = [
  {
    serviceImg: "/service/coding.png",
    serviceTitle: "Web Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom border-end",
  },
  {
    serviceImg: "/service/app-development.png",
    serviceTitle: "App Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom border-end",
  },
  {
    serviceImg: "/service/shield.png",
    serviceTitle: "Data Security",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom",
  },
  {
    serviceImg: "/service/curve.png",
    serviceTitle: "UI/UX Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-end",
  },
  {
    serviceImg: "/service/graphic-design.png",
    serviceTitle: "Graphics Design",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-end",
  },
  {
    serviceImg: "/service/promotion.png",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "",
  },
];
const testimonialFourData = [
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-1.png",
    authorName: "Noah L. Paulsen",
    quoateDate: "Feb 19, 2022",
  },
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-2.png",
    authorName: "Noah L. Paulsen",
    quoateDate: "Feb 19, 2022",
  },
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-3.png",
    authorName: "Ariya Stark",
    quoateDate: "June 24, 2022",
  },
];
const cryptoBlogData = [
  {
    blogThumb: "/cbl-1.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-1.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
  {
    blogThumb: "/cbl-2.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-2.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
  {
    blogThumb: "/cbl-3.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-3.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
];
const cyberBlogData = [
  {
    blogThumb: "/blog/c-blog-1.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "The Steps to GainingPrivileged Access Security",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-2.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Protect Your Workplace FromCyber Attacks",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-3.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Mid-Market Businesses, Don’tSmall about Security",
    linkText: "Read more",
  },
];

const insuranceBrands = [
  {
    url: "/clients/2.svg",
  },
  {
    url: "/clients/3.svg",
  },
  {
    url: "/clients/4.svg",
  },
  {
    url: "/clients/5.svg",
  },
  {
    url: "/clients/6.svg",
  },
  {
    url: "/clients/7.svg",
  },
  {
    url: "/clients/8.svg",
  },
];

const insuranceGallery = [
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
];

const productsGallery = {
  categories: {
    "Bakış İç Oda Kapısı": {
      subcategories: {
        "Stok Kapılar": [
          "/_images/products/BakisIcOdaKapisi/StokKapilar/image1.png",
          "/_images/products/BakisIcOdaKapisi/StokKapilar/image2.png",
        ],
        Kapı: [
          "/_images/products/BakisIcOdaKapisi/Kapi/image1.png",
          "/_images/products/BakisIcOdaKapisi/Kapi/image2.png",
        ],
        Kapak: [
          "/_images/products/BakisIcOdaKapisi/Kapak/image1.png",
          "/_images/products/BakisIcOdaKapisi/Kapak/image2.png",
        ],
      },
    },
    "Albertgenau Balkon Sistemleri": {
      subcategories: {
        "Cambalkon - Katlanır Cam Sistemleri": [
          "/_images/products/AlbertgenauBalkonSistemleri/Cambalkon/image1.png",
          "/_images/products/AlbertgenauBalkonSistemleri/Cambalkon/image2.png",
        ],
        "Tambalkon Sistemleri": [
          "/_images/products/AlbertgenauBalkonSistemleri/Tambalkon/image1.png",
          "/_images/products/AlbertgenauBalkonSistemleri/Tambalkon/image2.png",
        ],
        "Biokimatik Pergola Sistemleri": [
          "/_images/products/AlbertgenauBalkonSistemleri/Biokimatik/image1.png",
          "/_images/products/AlbertgenauBalkonSistemleri/Biokimatik/image2.png",
        ],
        "Kış Bahçesi Sistemleri": [
          "/_images/products/AlbertgenauBalkonSistemleri/KisBahcesi/image1.png",
          "/_images/products/AlbertgenauBalkonSistemleri/KisBahcesi/image2.png",
        ],
        "Giyotin Cam Sistemleri": [
          "/_images/products/AlbertgenauBalkonSistemleri/Giyotin/image1.png",
          "/_images/products/AlbertgenauBalkonSistemleri/Giyotin/image2.png",
        ],
        "Hareketli Cam Sistemleri": [
          "/_images/products/AlbertgenauBalkonSistemleri/Hareketli/image1.png",
          "/_images/products/AlbertgenauBalkonSistemleri/Hareketli/image2.png",
        ],
        "Küpeşte Korkuluk Sistemleri": [
          "/_images/products/AlbertgenauBalkonSistemleri/Kupeşte/image1.png",
          "/_images/products/AlbertgenauBalkonSistemleri/Kupeşte/image2.png",
        ],
        "Rüzgar Kırıcı Cam Sistemleri": [
          "/_images/products/AlbertgenauBalkonSistemleri/RuzgarKirici/image1.png",
          "/_images/products/AlbertgenauBalkonSistemleri/RuzgarKirici/image2.png",
        ],
      },
    },
    "Egepen PVC Sistemleri": {
      subcategories: {
        "PVC Pencere Sistemleri": [
          "/_images/products/EgepenPVCSistemleri/Pencere/image1.png",
          "/_images/products/EgepenPVCSistemleri/Pencere/image2.png",
        ],
        "PVC Kapı Sistemleri": [
          "/_images/products/EgepenPVCSistemleri/Kapi/image1.png",
          "/_images/products/EgepenPVCSistemleri/Kapi/image2.png",
        ],
        "PVC Sürme Sistemleri": [
          "/_images/products/EgepenPVCSistemleri/Surme/image1.png",
          "/_images/products/EgepenPVCSistemleri/Surme/image2.png",
        ],
        "Storbox Panjur": [
          "/_images/products/EgepenPVCSistemleri/Storbox/image1.png",
          "/_images/products/EgepenPVCSistemleri/Storbox/image2.png",
        ],
        "Deceuninck Cam Balkon Sistemleri": [
          "/_images/products/EgepenPVCSistemleri/Deceuninck/image1.png",
          "/_images/products/EgepenPVCSistemleri/Deceuninck/image2.png",
        ],
      },
    },
    "IQ Aluminyum Aluminyum Sistemleri": {
      subcategories: {
        "Sürme Sistemleri": [
          "/_images/products/IQAluminyum/Sürme/image1.png",
          "/_images/products/IQAluminyum/Sürme/image2.png",
        ],
        "Açılır Sistemler": [
          "/_images/products/IQAluminyum/Acilir/image1.png",
          "/_images/products/IQAluminyum/Acilir/image2.png",
        ],
        "Katlanır Sistemler": [
          "/_images/products/IQAluminyum/Katlanir/image1.png",
          "/_images/products/IQAluminyum/Katlanir/image2.png",
        ],
        "Mimari Sistemler": [
          "/_images/products/IQAluminyum/Mimari/image1.png",
          "/_images/products/IQAluminyum/Mimari/image2.png",
        ],
        "Cephe Sistemleri": [
          "/_images/products/IQAluminyum/Cephe/image1.png",
          "/_images/products/IQAluminyum/Cephe/image2.png",
        ],
        "Akıllı Havalandırma Sistemleri": [
          "/_images/products/IQAluminyum/Havalandirma/image1.png",
          "/_images/products/IQAluminyum/Havalandirma/image2.png",
        ],
        "Gölgelendirme Sistemleri": [
          "/_images/products/IQAluminyum/Golgelendirme/image1.png",
          "/_images/products/IQAluminyum/Golgelendirme/image2.png",
        ],
      },
    },
  },
};

export {
  offcanvasMenuData,
  cyberBlogData,
  cryptoBlogData,
  testimonialFourData,
  ItServiceData,
  IconBoxData,
  FaqOneData,
  TestimonialData,
  TestimonialOneData,
  registerTestimonial,
  registerTestimonialTarget,
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
  footerPrimaryPages,
  footerPages,
  footerTemplate,
  testimonialOne,
  testimonialAuthor,
  pricingData,
  integrationOneLeft,
  integrationOneRight,
  integrationFeature,
  ourTeam,
  blogFeatureData,
  careerJobCard,
  helpCenterFaqDetails,
  brandName,
  insuranceBrands,
  insuranceGallery,
  productsGallery,
};
