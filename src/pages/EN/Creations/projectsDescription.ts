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
    description: `TaskTrace is an intuitive task management application designed to streamline task tracking for individuals. It offers a clear and user-friendly interface, allowing users to easily monitor the progress of their tasks from initiation to completion. This tool enhances productivity by providing a comprehensive view of task statuses, thereby facilitating efficient management and timely completion of tasks.`,
    tools: ['JavaEE', 'Docker','TomCat', 'Bootstrap', 'MySQL', 'VPS'],
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
    live: 'https://tasktrace.app',
    github: 'https://github.com/alfredoparreiras/TaskTrace'
  },
  {
    id: 2, 
    title: "FoodNinja API Documentation",
    mainLanguage: "Typescript",
    description: `The website offers detailed documentation for the FoodNinja API, serving as a vital tool for developers who aim to integrate FoodNinja's services into their own applications. This resource provides thorough guidance, covering various aspects of the API, to ensure seamless implementation and effective utilization of FoodNinja's functionalities in diverse application environments.`,
    tools: ['Typescript', 'React', 'Vercel', 'Tawilwind'],
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
    description: `This backend service, developed with MySQL, NodeJS, and Sequelize, is the cornerstone of an innovative recipe application. It's intricately built in JavaScript, providing a strong and interactive platform for users to explore and enjoy a diverse range of recipes. This dynamic project is a collaborative effort, featuring significant contributions from Gabriela Franco, Jared Chevalier, and Rehman Basharat, enhancing its functionality and user experience.`,
    tools: ['Javascript','NodeJS','MySQL','Sequelize'],
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
    live: undefined,
    github: 'https://github.com/alfredoparreiras/FoodNinjaBackEnd',
    contributors: ['Gabriela Franco', 'Jared Chevalier', 'Rehman Basharat']
  },
  {
    id: 4, 
    title: "Moshify",
    mainLanguage: "Javascript - HTML - CSS",
    description: "The Moshify project involves creating a sleek and engaging landing page for a cloud service provider. Utilizing HTML, CSS, and JavaScript, the page showcases Moshify's cloud services with a focus on attracting and retaining customers. The design is user-friendly, featuring interactive elements and a responsive layout that adapts to various devices, ensuring a seamless user experience. This project effectively blends aesthetics with functionality to highlight Moshify's offerings and encourage customer engagement.",
    tools: ['HTML5', 'CSS3', 'Javascript'],
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
    tools: ['ASP.net','Angular','SQLite', 'Entity Framework'],
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
    live: undefined,
    github: 'https://github.com/alfredoparreiras/Studies/tree/main/DatingApp'
  }
]