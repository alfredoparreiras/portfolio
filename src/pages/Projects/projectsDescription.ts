import TaskTraceLogin from "@/assets/Projects/TaskTrace/Login.png"
import TaskTraceHomePage from "@/assets/Projects/TaskTrace/Homepage.png"
import TaskTraceDashboard from "@/assets/Projects/TaskTrace/Dashboard.png"
import TaskTraceAddTask from "@/assets/Projects/TaskTrace/AddTask.png"
import TaskTraceMobile from "@/assets/Projects/TaskTrace/Mobile.png"
//FoodNinjaDocumentation
import FoodDocsHomeWhite from "@/assets/Projects/FoodNinjaDocs/Home-White.jpeg"
import FoodDocsHomeDark from "@/assets/Projects/FoodNinjaDocs/Home-Dark.jpeg"
import FoodDocsEndpointWhite from "@/assets/Projects/FoodNinjaDocs/Endpoint - Light.jpeg"
import FoodDocsEndpointDark from "@/assets/Projects/FoodNinjaDocs/Endpoint - Dark.jpeg"
import FoodDocsTeamWhite from "@/assets/Projects/FoodNinjaDocs/Team - Light.jpeg"
import FoodDocsTeamDark from "@/assets/Projects/FoodNinjaDocs/Team - Dark.jpeg"
//FoodNinjaAPI
import FoodAPILogin from "@/assets/Projects/FoodNinjaApi/Login.png"
import FoodAPISignUp from "@/assets/Projects/FoodNinjaApi/Signup.png"
import FoodAPIRecipes from "@/assets/Projects/FoodNinjaApi/Recipes.png"
import FoodAPIRemoveFavorite from "@/assets/Projects/FoodNinjaApi/RemoveFavorite.png"
import FoodAPIFavorites from "@/assets/Projects/FoodNinjaApi/Favorites.png"
import FoodAPIChefs from "@/assets/Projects/FoodNinjaApi/chefs.png"
//Moshify
import MoshifyHome from "@/assets/Projects/Moshify/Home.jpeg"
import MoshifyPage1 from "@/assets/Projects/Moshify/Page1.jpeg"
import MoshifyPage2 from "@/assets/Projects/Moshify/Page2.jpeg"
import MoshifyPage3 from "@/assets/Projects/Moshify/Page3.jpeg"
import MoshifyPage4 from "@/assets/Projects/Moshify/Page4.jpeg"
import MoshifyPage5 from "@/assets/Projects/Moshify/Page5.jpeg"
//DatingApp
import DatingAppHome from "@/assets/Projects/DatingApp/Home.jpeg"
import DatingAppMenu from "@/assets/Projects/DatingApp/SignUp.jpeg"
import DatingAppLogin from "@/assets/Projects/DatingApp/login.jpeg"
import DatingAppAuthentication  from "@/assets/Projects/DatingApp/Authentication.jpeg"
import DatingAppProfile from "@/assets/Projects/DatingApp/Profile.jpeg"
import DatingAppMatches from "@/assets/Projects/DatingApp/Matches.jpeg"

export const projectsDescriptions = [
  {
    id: 1, 
    title: "TaskTrace",
    mainLanguage: "Java - JavaEE",
    description: `TaskTrace is a task management tool that simplifies tracking tasks for both individuals. It provides an easy overview of each task's progress from start to end, improving efficiency.`,
    tools: ['IntelliJ', 'Docker', 'TomCat', 'Bootstrap', 'MySQL', 'VPS'],
    homeTools: ['JavaEE','Docker'],
    images: [
      {
        src: TaskTraceHomePage,
        title: "Homepage",
        id: 1,
      },
      {
        src: TaskTraceDashboard,
        title: "Dashboard",
        id: 2,
      },
      {
        src: TaskTraceLogin,
        title: "Login",
        id: 3,
      },
      {
        src: TaskTraceMobile,
        title: "Mobile Dashboard",
        id: 4,
      },
      {
        src: TaskTraceAddTask,
        title: "Adding a Task",
        id: 5,
      }
    ],
    mobileImages: [TaskTraceHomePage,TaskTraceDashboard,TaskTraceLogin,TaskTraceMobile,TaskTraceAddTask],
    live: 'http://tasktrace.app',
    github: 'https://github.com/alfredoparreiras/TaskTrace'
  },
  {
    id: 2, 
    title: "FoodNinja API Documentation",
    mainLanguage: "Typescript",
    description: `The website provides documentation for the FoodNinja API, a comprehensive resource for developers looking to integrate or utilize FoodNinja's services in their applications`,
    tools: ['VSCode', 'Vercel', 'Tawilwind', 'MarkDown'],
    homeTools: ['Typescript', 'React'],
    images: [
      {
        src: FoodDocsHomeWhite,
        title: "Homepage - White Mode",
        id: 1,
      },
      {
        src: FoodDocsHomeDark,
        title: "Homepage - Dark Mode",
        id: 2,
      },
      {
        src: FoodDocsEndpointWhite,
        title: "Endpoint Documentation - White Mode",
        id: 3,
      },
      {
        src: FoodDocsEndpointDark,
        title: "Endpoint Documentation - Dark Mode",
        id: 4,
      },
      {
        src: FoodDocsTeamWhite,
        title: "Team - White Mode",
        id: 5,
      },
      {
        src: FoodDocsTeamDark,
        title: "Team - Dark Mode",
        id: 6,
      }
    ],
    mobileImages: [FoodDocsHomeWhite,FoodDocsHomeDark,FoodDocsEndpointWhite,FoodDocsEndpointDark,FoodDocsTeamWhite,FoodDocsTeamDark],
    live: 'https://foodninja-api.vercel.app/',
    github: 'https://github.com/alfredoparreiras/FoodNinjaDocumentation'
  },
  {
    id: 3, 
    title: "FoodNinja API",
    mainLanguage: "Javascript",
    description: `This backend service, crafted using MySQL, NodeJS, and Sequelize, forms the core of a dynamic recipe application. Built primarily in JavaScript, it offers a robust platform for users to engage with a wide array of culinary delights.`,
    tools: ['ExpressJS','MySQL', 'DataGrip', 'Sequelize', 'VSCode'],
    homeTools: ['Javascript', 'NodeJS'],
    images: [
      {
        src: FoodAPILogin,
        title: "Login",
        id: 1,
      },
      {
        src: FoodAPISignUp,
        title: "SignUp",
        id: 2,
      },
      {
        src: FoodAPIRecipes,
        title: "Recipes",
        id: 3,
      },
      {
        src: FoodAPIFavorites,
        title: "Favorites",
        id: 4,
      },
      {
        src: FoodAPIRemoveFavorite,
        title: "Remove Favorites",
        id: 5,
      },
      {
        src: FoodAPIChefs,
        title: "Chefs",
        id: 6,
      }
    ],
    mobileImages: [FoodAPILogin,FoodAPISignUp,FoodAPIRecipes,FoodAPIFavorites,FoodAPIRemoveFavorite,FoodAPIChefs],
    live: 'not yet',
    github: 'https://github.com/alfredoparreiras/FoodNinjaBackEnd',
    contributors: ['Gabriela Franco', 'Jared Chevalier', 'Rehman Basharat']
  },
  {
    id: 4, 
    title: "Moshify",
    mainLanguage: "Javascript - HTML - CSS",
    description: `Webtemplate for a company who sells clouding plans. `,
    tools: ['VSCode'],
    homeTools: ['Javascript', 'VSCode'],
    images: [
      {
        src: MoshifyHome,
        title: "Home",
        id: 1,
      },
      {
        src: MoshifyPage1,
        title: "Plans",
        id: 2,
      },
      {
        src: MoshifyPage2,
        title: "Functionalities",
        id: 3,
      },
      {
        src: MoshifyPage3,
        title: "Functionalities",
        id: 4,
      },
      {
        src: MoshifyPage4,
        title: "Testimonials",
        id: 5,
      },
      {
        src: MoshifyPage5,
        title: "Footer",
        id: 6,
      }
    ],
    mobileImages: [MoshifyHome,MoshifyPage1,MoshifyPage2,MoshifyPage3,MoshifyPage4,MoshifyPage5],
    live: 'https://themoshify.netlify.app/',
    github: 'https://github.com/alfredoparreiras/Moshify'
  },
  {
    id: 5, 
    title: "Dating App",
    mainLanguage: "Typescript - C#",
    description: `Dating App is a minimalist dating platform designed to focus your experience of finding love and friendship in the digital age. Our intuitive app focuses on simplicity and instant connections, much like Tinder, but with our unique twist.`,
    tools: ['ASP.net','Angular', 'VSCode', 'SQLite', 'Entity Framework'],
    homeTools: ['ASP.net', 'Angular'],
    status: "In progress",
    images: [
      {
        src: DatingAppHome,
        title: "Home",
        id: 1,
      },
      {
        src: DatingAppMenu,
        title: "SignUp",
        id: 2,
      },
      {
        src: DatingAppMatches,
        title: "Maches",
        id: 3,
      },
      {
        src: DatingAppLogin,
        title: "Login",
        id: 4,
      },
      {
        src: DatingAppAuthentication,
        title: "Authentication",
        id: 5,
      },
      {
        src: DatingAppProfile,
        title: "Profile",
        id: 6,
      },
    ],
    mobileImages: [DatingAppHome,DatingAppMenu,DatingAppMatches,DatingAppLogin,DatingAppAuthentication, DatingAppProfile],
    live: 'Not Yet',
    github: 'https://github.com/alfredoparreiras/Studies/tree/main/DatingApp'
  }
]