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
    description: `TaskTrace est une application intuitive de gestion des tâches conçue pour simplifier le suivi des tâches pour les individus. Elle offre une interface claire et conviviale, permettant aux utilisateurs de surveiller facilement la progression de leurs tâches de l'initiation à l'achèvement. Cet outil améliore la productivité en fournissant une vue complète des statuts des tâches, facilitant ainsi une gestion efficace et une réalisation en temps opportun des tâches.`,
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
    description: `Le site web offre une documentation détaillée pour l'API FoodNinja, servant d'outil essentiel pour les développeurs qui cherchent à intégrer les services de FoodNinja dans leurs propres applications. Cette ressource fournit des orientations complètes, couvrant divers aspects de l'API, pour garantir une mise en œuvre sans faille et une utilisation efficace des fonctionnalités de FoodNinja dans des environnements d'application diversifiés.`,
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
    description: `Ce service backend, développé avec MySQL, NodeJS et Sequelize, est la pierre angulaire d'une application de recettes innovante. Il est minutieusement construit en JavaScript, offrant une plateforme solide et interactive pour que les utilisateurs explorent et apprécient une gamme variée de recettes. Ce projet dynamique est le fruit d'un effort collaboratif, avec des contributions significatives de Gabriela Franco, Jared Chevalier et Rehman Basharat, améliorant sa fonctionnalité et l'expérience utilisateur.`,
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
    description: "Le projet Moshify implique la création d'une page d'atterrissage élégante et attrayante pour un fournisseur de services cloud. Utilisant HTML, CSS et JavaScript, la page met en avant les services cloud de Moshify avec un accent sur l'attraction et la fidélisation des clients. Le design est convivial, avec des éléments interactifs et une mise en page réactive qui s'adapte à divers appareils, garantissant une expérience utilisateur fluide. Ce projet mélange efficacement esthétique et fonctionnalité pour mettre en lumière les offres de Moshify et encourager l'engagement des clients.",
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
    description: `Dating App est une plateforme de rencontre minimaliste conçue pour concentrer votre expérience de trouver l'amour et l'amitié à l'ère numérique. Notre application intuitive se concentre sur la simplicité et les connexions instantanées, à l'image de Tinder, mais avec notre touche unique.`,
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