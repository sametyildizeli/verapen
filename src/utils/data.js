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
          {
            url: "/_images/products/BakisIcOdaKapisi/StokKapilar/sardes.png",
            name: "Sardes",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/StokKapilar/perge.png",
            name: "Perge",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/StokKapilar/cone.png",
            name: "Cone",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/StokKapilar/cubic.png",
            name: "Cubic",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/StokKapilar/roma.png",
            name: "Roma",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/StokKapilar/berlin.png",
            name: "Berlin",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/StokKapilar/country-02.png",
            name: "Country 02",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/StokKapilar/fourplus.png",
            name: "Fourplus",
          },
        ],
        Kapı: [
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/premium-shaker-1.png",
            name: "Premium Shaker 1",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/premium-shaker-2.png",
            name: "Premium Shaker 2",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/premium-sardes.png",
            name: "Premium Sardes",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/premium-perge.png",
            name: "Premium Perge",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/royal-efes.png",
            name: "Royal Efes",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/rotal-cubic.png",
            name: "Rotal Cubic",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/royal-milet.png",
            name: "Royal Milet",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/royal-cone.png",
            name: "Royal Cone",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-verona.png",
            name: "Modern Verona",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-tria.png",
            name: "Modern Tria",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-dante.png",
            name: "Modern Dante",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-rodos.png",
            name: "Modern Rodos",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-berlin.png",
            name: "Modern Berlin",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-country-01.png",
            name: "Modern Country 01",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-country-02.png",
            name: "Modern Country 02",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-tokyo.png",
            name: "Modern Tokyo",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-roma.png",
            name: "Modern Roma",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-riga.png",
            name: "Modern Riga",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-fourplus.png",
            name: "Modern Fourplus",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/modern-kobe.png",
            name: "Modern Kobe",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/basic-fourline.png",
            name: "Basic Fourline",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/basic-polar.png",
            name: "Basix Polar",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapi/surgulu-sardes.png",
            name: "Surgulu Sardes",
          },
        ],
        Kapak: [
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 33.png",
            name: "Membrane 435 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 34.png",
            name: "Membrane 436 | 9300 Soft Touch Ay Gri",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 35.png",
            name: "Membrane 438 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 36.png",
            name: "Membrane 439 | 9330 Soft Touch Vizon",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 37.png",
            name: "Membrane 433 | 9310 Soft Touch Antrasit",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 38.png",
            name: "Membrane 429 | 9330 Soft Touch Vizon",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 39.png",
            name: "Membrane 430 | 1235 Soft Su Yeşili",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 40.png",
            name: "Membrane 423 | 9300 Soft Touch Ay Gri",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 41.png",
            name: "Membrane 431 | 1234 Elit Soft Gri",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 42.png",
            name: "Membrane 432 | 1234 Elit Soft Gri",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 43.png",
            name: "Membrane 424 | 1237 Elit Soft Somon",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 44.png",
            name: "Membrane 180 | 1201 Krem Dişbudak",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 45.png",
            name: "Membrane 133 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 46.png",
            name: "Membrane 416 | 1207 Saten Krem",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 47.png",
            name: "Membrane 417 | 645 Beyaz Dişbudak",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 48.png",
            name: "Membrane 411 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 49.png",
            name: "Membrane 413 | 1239 Elit Soft Inox",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 50.png",
            name: "Membrane 176 | 1606 Saten Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 51.png",
            name: "Membrane 234 | 1235 Elit Soft Su Yeşili",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 52.png",
            name: "Membrane 183 | 1204 Yeşil Dişbudak",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 53.png",
            name: "Membrane 419 | 844 Siva 4",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 54.png",
            name: "Membrane 420 | 1202 Bej Dişbudak",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 55.png",
            name: "Membrane 414 | 1217 Naturel Silver",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 56.png",
            name: "Membrane 149 | 1220 Açık Somon Meşe",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 57.png",
            name: "Membrane 109 | 1214 Özel Mat Aytaşı",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 58.png",
            name: "Membrane 205 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 59.png",
            name: "Membrane 108 | 3219 Milano Ceviz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 60.png",
            name: "Membrane 101 | 564 Nubuk Desen 4",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 61.png",
            name: "Membrane 173 | 1606 Saten Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 62.png",
            name: "Membrane 121 | 1218 Tester 1",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 63.png",
            name: "Membrane 415 | 1216 Naturel New Gold",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 64.png",
            name: "Membrane 410 | 1221 Koyu Somona Meşe",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 65.png",
            name: "Membrane 412 | 1205 Mavi Dişbudak",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 66.png",
            name: "Membrane 176 | 1606 Saten Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 67.png",
            name: "Membrane 418 | 842 Siva 2",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 68.png",
            name: "Membrane 138 | 1236 Elit Soft Antrasit",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 69.png",
            name: "Membrane 118 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 70.png",
            name: "Membrane 101 | 563 Nubuk Desen 3",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 71.png",
            name: "Membrane 411 | 1208 Saten Vizon",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 72.png",
            name: "Membrane 101 | 403 Parlak Akçağaç",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 73.png",
            name: "Membrane 101 | 844 Siva Desen 4",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 74.png",
            name: "Membrane 101 | 842 Siva Desen 2",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 75.png",
            name: "Membrane 101 | 1210 Saten Cappuccino",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 76.png",
            name: "Membrane 133 | 805 Bute Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 77.png",
            name: "Membrane 406 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 78.png",
            name: "Membrane 133 | 805 Bute Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 79.png",
            name: "Membrane 101 | 843 Siva Desen 3",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 80.png",
            name: "Membrane 101 | 562 Nubuk Desen 2",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 81.png",
            name: "Membrane 101 | 225 Eko Parlak Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 82.png",
            name: "Membrane 101 | 90 Parlak Bordo",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 83.png",
            name: "Membrane 205 | 1210 Saten Cappuccino",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 84.png",
            name: "Membrane 204 | 1685 SM Antrasit",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 85.png",
            name: "Membrane 181 | 1215 Açık Natural Ceviz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 86.png",
            name: "Membrane 174 | 1203 Antrasit Dişbudak",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 87.png",
            name: "Membrane 102 | 841 Siva Desen 1",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 88.png",
            name: "Membrane 410 | 1228 Saten Bej",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 89.png",
            name: "Membrane 406 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 90.png",
            name: "Membrane 204 | 1685 Saten Füme",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 91.png",
            name: "Membrane 181 | 1632 Soft Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 92.png",
            name: "Membrane 180 | 1244 Antrasit Dişbudak",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 93.png",
            name: "Membrane 173 | 805 Bute Beyaz",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 94.png",
            name: "Membrane 121 | 1218 Testere Doku 01",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 95.png",
            name: "Membrane 109 | 9320 S.T. Tungsten Gri",
          },
          {
            url: "/_images/products/BakisIcOdaKapisi/Kapak/image 96.png",
            name: "Membrane 108 | 3219 Milano Ceviz",
          },
        ],
      },
    },
    "Albertgenau Balkon Sistemleri": {
      subcategories: {
        "Cambalkon - Katlanır Cam Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Cambalkon/image 97.png",
            name: "Isıcam'lı Cambalkon - Tiara Twinmax",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Cambalkon/image 98.png",
            name: "Tek Camlı Kayar Katlanır Cambalkon",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Cambalkon/image 99.png",
            name: "Ekonomik Cambalkon Statü Optima",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Cambalkon/image 100.png",
            name: "Ekonomik Cambalkon Statü Tango",
          },
        ],
        "Tambalkon Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Tambalkon/tambalkon.png",
            name: "Tambalkon Silinebilir Giyotin Cam Balkon",
          },
        ],
        "Biokimatik Pergola Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Biokimatik/bioklimtik.png",
            name: "Bioklimatik Pergola",
          },
        ],
        "Kış Bahçesi Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/KisBahcesi/kışbahçsi.png",
            name: "Kış Bahçesi",
          },
        ],
        "Sürme Cam Balkon Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Surme/image 104.png",
            name: "Isıcam'lı Sürme Cambalkon",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Surme/image 105.png",
            name: "Yeni Nesil Sürme Sistem",
          },
        ],
        "Giyotin Cam Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Giyotin/image 106.png",
            name: "Vertiflex",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Giyotin/image 107.png",
            name: "Tambalkon Silinebilir Giyotin Cam Balkon",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Giyotin/image 108.png",
            name: "Vertiflex UP",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Giyotin/image 109.png",
            name: "Vertiflex All Glass",
          },
        ],
        "Hareketli Cam Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Hareketli/image 110.png",
            name: "Momentum",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Hareketli/image 111.png",
            name: "Atrium",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Hareketli/image 112.png",
            name: "Centrum",
          },
        ],
        "Küpeşte Korkuluk Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Kupeste/image 113.png",
            name: "Isıcam'lı Küpeşte Sistemi - Balumax",
          },
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/Kupeste/image 114.png",
            name: "Isıcam'lı Entegre Küpeşte Sistemi - Balumax Int",
          },
        ],
        "Rüzgar Kırıcı Cam Sistemleri": [
          {
            url: "/_images/products/AlbertgenauBalkonSistemleri/RuzgarKirici/rüzgarkirici.png",
            name: "Rüzgar Kırıcı Cam Sistemi",
          },
        ],
      },
    },
    "Egepen PVC Sistemleri": {
      subcategories: {
        "PVC Pencere Sistemleri": [
          {
            url: "/_images/products/EgepenPVCSistemleri/Pencere/image 117.png",
            name: "Legend",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Pencere/image 120.png",
            name: "Legend Art",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Pencere/image 121.png",
            name: "Zendow",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Pencere/image 122.png",
            name: "Zendow Plus",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Pencere/image 123.png",
            name: "Zendow Deluxe",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Pencere/image 124.png",
            name: "Fusion",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Pencere/image 125.png",
            name: "Everest Max",
          },
        ],
        "PVC Kapı Sistemleri": [
          {
            url: "/_images/products/EgepenPVCSistemleri/Kapi/image 126.png",
            name: "Legend",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Kapi/image 127.png",
            name: "Legend Art",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Kapi/image 128.png",
            name: "Zendow",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Kapi/image 129.png",
            name: "Zendow Plus",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Kapi/image 130.png",
            name: "Zendow Deluxe",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Kapi/image 131.png",
            name: "Fusion",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Kapi/image 132.png",
            name: "Everest Max",
          },
        ],
        "PVC Sürme Sistemleri": [
          {
            url: "/_images/products/EgepenPVCSistemleri/Surme/image 133.png",
            name: "Legend Sürme",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Surme/image 134.png",
            name: "Sürme",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Surme/image 135.png",
            name: "HS76",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Surme/image 136.png",
            name: "Slimslide",
          },
        ],
        "Storbox Panjur": [
          {
            url: "/_images/products/EgepenPVCSistemleri/Storbox/storbox.png",
            name: "Storbox Panjur",
          },
        ],
        "Deceuninck Cam Balkon Sistemleri": [
          {
            url: "/_images/products/EgepenPVCSistemleri/Deceuninck/image 139.png",
            name: "Zen Duo",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Deceuninck/image 140.png",
            name: "Zen Uno",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Deceuninck/image 141.png",
            name: "Vertex",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Deceuninck/image 142.png",
            name: "Suprem",
          },
          {
            url: "/_images/products/EgepenPVCSistemleri/Deceuninck/image 143.png",
            name: "Performus",
          },
        ],
      },
    },
    "IQ Aluminyum Aluminyum Sistemleri": {
      subcategories: {
        "Sürme Sistemleri": [
          {
            url: "/_images/products/IQAluminyum/Surme/image 144.png",
            name: "Renovatio",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 145.png",
            name: "Ingentis",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 146.png",
            name: "Moventis",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 147.png",
            name: "Srenad",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 148.png",
            name: "Solidum",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 149.png",
            name: "Arma",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 150.png",
            name: "Bellus",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 151.png",
            name: "Limatus",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 152.png",
            name: "Serenad 6",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 153.png",
            name: "Minimal SLT",
          },
          {
            url: "/_images/products/IQAluminyum/Surme/image 154.png",
            name: "Autowin",
          },
        ],
        "Açılır Sistemler": [],
        "Katlanır Sistemler": [],
        "Mimari Sistemler": [],
        "Cephe Sistemleri": [],
        "Akıllı Havalandırma Sistemleri": [],
        "Gölgelendirme Sistemleri": [],
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
