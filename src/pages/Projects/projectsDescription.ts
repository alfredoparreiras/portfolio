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


export const projectsDescriptions = [
  {
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
        id: 1,
      }
    ],
    mobileImages: [TaskTraceHomePage,TaskTraceDashboard,TaskTraceLogin,TaskTraceMobile,TaskTraceAddTask],
    live: 'http://tasktrace.app',
    github: 'https://github.com/alfredoparreiras/TaskTrace'
  },
  {
    title: "FoodNinja API Documentation",
    mainLanguage: "Typescript",
    description: `The website provides documentation for the FoodNinja API, a comprehensive resource for developers looking to integrate or utilize FoodNinja's services in their applications`,
    tools: ['IntelliJ', 'Docker', 'TomCat', 'Bootstrap', 'MySQL', 'VPS'],
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
    live: 'http://tasktrace.app',
    github: 'https://github.com/alfredoparreiras/TaskTrace'
  }
]