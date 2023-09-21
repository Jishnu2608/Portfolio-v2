import { Github, Twitter, Linkedin, Instagram, Facebook} from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNextjsLight from '/public/images/logos/icon-nextjs-light.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoHTML from '/public/images/logos/icon-html.svg';
import LogoAWS from '/public/images/logos/icon-aws.svg';
import LogoAWSLight from '/public/images/logos/icon-aws-light.svg';
import LogoSalesforce from '/public/images/logos/icon-salesforce.svg';
import LogoMySQL from '/public/images/logos/icon-mysql.svg';
import LogoJava from '/public/images/logos/icon-java.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoCSS from '/public/images/logos/icon-css.svg';
import LogoGCP from '/public/images/logos/icon-gcp.svg';
import LogoPostman from '/public/images/logos/icon-postman.svg';

import Smartbridge from '/public/images/logos/smartbridge.png';
import Devtown from '/public/images/logos/devtown.png';

import LogoSchool from '/public/images/logos/logo-school.svg';
import LogoCollege from '/public/images/logos/logo-college.svg';
import LogoUniversity from '/public/images/logos/logo-university.svg';

import ProjectHeritageTrails from '/public/images/project-heritage trails.png';
import ProjectSnapscape from '/public/images/project-snapscape.png';
import ProjectCryptotracker from '/public/images/project-cryptotracker.png';
import ProjectWeather from '/public/images/project-weather analysis.png';

import CertificateAWS from '/public/images/Certificate-AWS.png';
import CertificateSQL from '/public/images/Certificate-SQL.png';
import CertificateAI from '/public/images/Certificate-Helsinki.png';
import CertificateSalesforce from '/public/images/Certificate-Salesforce Developer.png';


import {
  EducationDetails,
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  CertificateDetails,
} from '@/lib/types';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Career',
    href: '#career',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Certificates',
    href: '#certificates',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Jishnu2608',
  },
  
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/jishnudeep-borah/',
  },
];


export const SOCIAL_LINKS_II= [
  {
    icon: Instagram,
    url: 'https://www.instagram.com/_reonnie_/',
  },
  {
    icon: Facebook,
    url: 'https://www.facebook.com/jishnudeep.borah.7/',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/JishnudeepBorah',
  },
];
export const TECHNOLOGIES: TechDetails[] = [

  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.java.com/en/',
  },

  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'HTML',
    logo: LogoHTML,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },

  {
    label: 'CSS',
    logo: LogoCSS,
    url: 'https://www.css3.com/',
  },

  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
 
  
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    darkModeLogo: LogoNextjsLight,
    url: 'https://nextjs.org/',
  },
  
  
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },

  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },

  {
    label: 'MySQL',
    logo: LogoMySQL,
    url: 'https://www.mysql.com/',
  },
  
  {
    label: 'AWS',
    logo: LogoAWS,
    darkModeLogo: LogoAWSLight,
    url: 'https://aws.amazon.com/',
  },

  {
    label: 'Google Cloud',
    logo: LogoGCP,
    url: 'https://cloud.google.com/',
  },

  {
    label: 'Salesforce',
    logo: LogoSalesforce,
    url: 'https://www.salesforce.com/in/',
  },
  
  
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
 
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },

  {
    label: 'Postman',
    logo: LogoPostman,
    url: 'https://www.postman.com/',
  },
];

export const EDUCATION: EducationDetails[] = [
  {
    logo: LogoUniversity,
    logoAlt: 'VIT Bhopal',
    position: 'Vellore Institute of Technology, Bhopal',
    startDate: new Date(2020, 8),
    endDate: new Date(2024, 8),
    summary: [
      'CGPA : 8.74',
      'Relevant Coursework: Software Engineering; Operating Systems; DBMS; Algorithms',
    ],
  },
  {
    logo: LogoCollege,
    logoAlt: 'darrang college',
    position: 'Darrang College, Tezpur',
    startDate: new Date(2018, 4),
    endDate: new Date(2020, 4),
    summary: [
      'Percentage: 85.4%',
      'Relevant Coursework: Physics; Chemistry; Mathematics; Biology; English',
    ],
  },
  {
    logo: LogoSchool,
    logoAlt: 'don bosco high school',
    position: 'Don Bosco High School, Tezpur',
    startDate: new Date(2008, 0),
    endDate: new Date(2018, 4),
    summary: [
      'Percentage: 95%',
      'Relevant Coursework: Mathematics; Science; Social Science; English; Adv. Mathematics; Assamese',
    ],
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: Smartbridge,
    logoAlt: 'smartbridge',
    position: 'Salesforce Developer Externship',
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 6),
    summary: [
      'Excelled in Salesforce CRM, optimizing operations and workflows through comprehensive training and practical experience.',
      'Customized and integrated Salesforce functionalities, enhancing platform capabilities and user experiences.',
      'Developed impactfulreports and dashboards, delivering actionable insights to stakeholders forinformed decisions.',
    ],
  },
  {
    logo: Devtown,
    logoAlt: 'devtown',
    position: 'Full stack Web Dev Internship',
    startDate: new Date(2021, 6),
    endDate: new Date(2021, 8),
    summary: [
      'Collaborated in a dynamic team to conceive, design, and implement innovative website features, enhancing web development proficiency during an intensive training program.',
      "Thoroughly ensured the smooth functionality of the company's website through rigorous testing and troubleshooting, gaining practical experience in website performance maintenance.",
      'Contributed to suggesting and implementing user-centric improvements, thereby enhancing skills in optimizing the user experience and increasing engagement.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Heritage Trails',
    description:
      'Heritage Trails is a comprehensive cultural archive app that provides one-stop information on the rich heritage of North-East India, including music, art and traditions.',
    url: 'https://heritage-trails-main.vercel.app/',
    previewImage: ProjectHeritageTrails,
    technologies: [
      'React',
      'Vitejs',
      'Spinners',
      'Swiper',
    ],
  },
  {
    name: 'Snapscape',
    description:
      'Snapscape is a photographer - focused social media app that connects photographers around the world, enabling them to showcase their work and engage with other photographers in a supportive community.',
    url: 'https://github.com/Jishnu2608/SnapScape',
    previewImage: ProjectSnapscape,
    technologies: [
      'React',
      'Emotion',
      'Material UI',
      'Redux Toolkit',
      'Yup',
      'Dropzone',
      'Node.js',
      'Express.js',
      'Jsonwebtoken',
      'Helmet',
      'Morgan',
      'Bcrypt',
      'Multer',
    ],
  },
  {
    name: 'Cryptotracker',
    description:
      'Crypto Tracker is a user-friendly app that displays real-time cryptocurrency prices and interactive charts, powered by React and Material UI with data from the Coingecko API.',
    url: 'https://cryptotracker-ji2608re.netlify.app/',
    previewImage: ProjectCryptotracker,
    technologies: [
      'React',
      'Emotion',
      'Material UI',
      'Axios',
      'Load Spinners',
      'TradingView Widget',
      'CoinGecko API',
    ],
  },
  {
    name: 'Weather Analysis',
    description:
      "The Weather Analysis Project conducts detailed research on weather patterns, collecting data on temperature, precipitation, humidity, and more in key regions. This project offers valuable insights through data visualizations, helping users understand India's climate and make informed decisions.",
    url: 'https://github.com/Jishnu2608/Weather-Analysis',
    previewImage: ProjectWeather,
    technologies: [
      'Jupyter Notebook',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Numpy',
      'Plotly Express',
    ],
  },
];

export const CERTIFICATES: CertificateDetails[] = [
  {
    name: 'AWS Cloud Practitioner',
    description:
      'The AWS Cloud Practitioner Certificate is a foundational credential that demonstrates a solid understanding of Amazon Web Services (AWS) essentials, including services, pricing, and cloud computing fundamentals. It serves as a great starting point for a career in AWS, validating my proficiency in cloud technology.',
    previewImage: CertificateAWS,
    technologies: [
      'Amazon EC2',
      'Amazon S3',
      'Amazon RDS',
      'Amazon VPC',
      'AWS IAM',
      'AWS Lambda',
      'AWS CloudWatch',
      'AWS SNS',
    ],
  },
  {
    name: 'Hackerrank SQL Intermediate',
    description:
      'The HackerRank SQL Intermediate Certificate is a professional acknowledgment of my competence in SQL, demonstrating my ability to solve complex database queries and perform data analysis tasks effectively. It showcases my expertise in using SQL to tackle real-world data challenges.',
    previewImage: CertificateSQL,
    technologies: [
      'Data Filtering',
      'Joins and Relationships',
      'Aggregate Functions',
      'Indexing',
      'Subqueries',
      'Grouping Data',
      'Working with Dates',
      'Data Modification',
    ],
  },
  {
    name: 'Introduction to AI - Reaktor',
    description:
      "The Introduction to AI course from the University of Helsinki is an enriching learning experience that delves into the fundamental principles of Artificial Intelligence (AI), equipping me with valuable insights into machine learning, neural networks, and AI applications. It's a comprehensive foundation for understanding and working with AI technologies.",
    previewImage: CertificateAI,
    technologies: [
      'Machine Learning',
      'Neural Networks',
      'AI Applications',
      'Data Analysis',
      'Statistics',
      'AI Foundations',
      'AI Ethics',
    ],
  },
  {
    name: 'Weather Analysis',
    description:
      "The Salesforce Developer Externship Certificate by Smartbridge signifies my successful completion of a hands-on externship program, during which I gained practical experience in developing solutions on the Salesforce platform. It validates my ability to design and implement Salesforce applications effectively.",
    previewImage: CertificateSalesforce,
    technologies: [
      'Lightning App Builder',
      'Custom Objects',
      'Profiles and Permission Sets',
      'Data Validation Rules',
      'Record Types',
      'Formula Fields',
      'Reports and Dashboard Permissions',
    ],
  },
];
