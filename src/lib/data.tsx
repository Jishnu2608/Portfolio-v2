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

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  EducationDetails,
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
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
    position: 'Darrang College',
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
    position: 'Don Bosco High School',
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
    startDate: new Date(2021, 10),
    endDate: new Date(2021, 9),
    summary: [
      'Excelled in Salesforce CRM, optimizing operations and workflows through comprehensive training and practical experience.',
      'Customized and integrated Salesforce functionalities, enhancing platform capabilities and user experiences.',
      'Developed impactfulreports and dashboards, delivering actionable insights to stakeholders forinformed decisions.',
    ],
  },
  {
    logo: Devtown,
    logoAlt: 'Greenapex logo',
    position: 'Full stack Internship',
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      'Collaborated in a dynamic team to conceive, design, and implement innovative website features, enhancing web development proficiency during an intensive training program.',
      "Thoroughly ensured the smooth functionality of the company's website through rigorous testing and troubleshooting, gaining practical experience in website performance maintenance.",
      'Contributed to suggesting and implementing user-centric improvements, thereby enhancing skills in optimizing the user experience and increasing engagement.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Wingie',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://www.wingie.com',
    previewImage: ProjectWingie,
    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'Fiskil',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://fiskil.com.au',
    previewImage: ProjectFiskil,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
  {
    name: 'Pepehousing',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];