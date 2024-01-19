import CSharpImage from "@/assets/Icons/LanguagesSVG/csharp-plain.svg"
import JavaImage from "@/assets/Icons/LanguagesSVG/java-plain.svg"
import TypescriptImage from "@/assets/Icons/LanguagesSVG/typescript-plain.svg"
import ASPnetImage from "@/assets/Icons/LanguagesSVG/ASP file icon.svg"
import JavaEEImage from "@/assets/Icons/LanguagesSVG/java-plain.svg"
import NodeImage from "@/assets/Icons/LanguagesSVG/nodejs-plain-wordmark.svg"
import ReactImage from "@/assets/Icons/LanguagesSVG/react-original.svg"
import SpringBootImage from "@/assets/Icons/LanguagesSVG/spring-plain.svg"
import MYSqlImage from "@/assets/Icons/LanguagesSVG/mysql-plain.svg"
import SQLServerImage from "@/assets/Icons/LanguagesSVG/SQL icon 4219421.svg"
import AWSImage from "@/assets/Icons/LanguagesSVG/amazonwebservices-original.svg"
import DockerImage from "@/assets/Icons/LanguagesSVG/docker-plain.svg"
//Dark
import CSharpImageDark from "@/assets/Icons/LanguagesSVG Dark/csharp-plain.svg"
import JavaImageDark from "@/assets/Icons/LanguagesSVG Dark/java-plain.svg"
import TypescriptImageDark from "@/assets/Icons/LanguagesSVG Dark/typescript-plain.svg"
import ASPnetImageDark from "@/assets/Icons/LanguagesSVG Dark/ASP file icon.svg"
import JavaEEImageDark from "@/assets/Icons/LanguagesSVG Dark/java-plain.svg"
import NodeImageDark from "@/assets/Icons/LanguagesSVG Dark/nodejs-plain-wordmark.svg"
import ReactImageDark from "@/assets/Icons/LanguagesSVG Dark/react-original.svg"
import SpringBootImageDark from "@/assets/Icons/LanguagesSVG Dark/spring-plain.svg"
import MYSqlImageDark from "@/assets/Icons/LanguagesSVG Dark/mysql-plain.svg"
import SQLServerImageDark from "@/assets/Icons/LanguagesSVG Dark/SQL icon 4219421.svg"
import AWSImageDark from "@/assets/Icons/LanguagesSVG Dark/amazonwebservices-original.svg"
import DockerImageDark from "@/assets/Icons/LanguagesSVG Dark/docker-plain.svg"

type Skill = {
  name: string;
  imgUrl: string;
  DarkImgUrl: string;
};

export const skills: Skill[] = [
  {
    name: "C#",
    imgUrl: CSharpImage,
    DarkImgUrl: CSharpImageDark
  }, 
  {
    name: "Java",
    imgUrl: JavaImage,
    DarkImgUrl: JavaImageDark
  }, 
  {
    name: "Node",
    imgUrl: NodeImage,
    DarkImgUrl: NodeImageDark
  },
  {
    name: "ASP.net",
    imgUrl: ASPnetImage,
    DarkImgUrl: ASPnetImageDark
  },
  {
    name: "JavaEE",
    imgUrl: JavaEEImage,
    DarkImgUrl: JavaEEImageDark
  },
  {
    name: "Typescript",
    imgUrl: TypescriptImage,
    DarkImgUrl: TypescriptImageDark
  },
  {
    name: "React",
    imgUrl: ReactImage,
    DarkImgUrl: ReactImageDark
  },
  {
    name: "Spring",
    imgUrl: SpringBootImage,
    DarkImgUrl: SpringBootImageDark
  },
  {
    name: "AWS",
    imgUrl: AWSImage,
    DarkImgUrl: AWSImageDark
  }, 
  {
    name: "Docker",
    imgUrl: DockerImage,
    DarkImgUrl: DockerImageDark
  },
  {
    name: "MySQL",
    imgUrl: MYSqlImage,
    DarkImgUrl: MYSqlImageDark
  },
  {
    name: "SQLServer",
    imgUrl: SQLServerImage,
    DarkImgUrl: SQLServerImageDark
  },
]


export const frameworks = [
  {
    name: "ASP.net",
    imgUrl: ASPnetImage
  },
  {
    name: "JavaEE",
    imgUrl: JavaEEImage
  },
  {
    name: "Node",
    imgUrl: NodeImage
  },
  {
    name: "ReactJS/TS",
    imgUrl: ReactImage
  }, 
  {
    name: "SpringBoot",
    imgUrl: SpringBootImage
  }, 
]

export const databases = [ 
  {
    name: "MySQL",
    imgUrl: MYSqlImage
  },
  {
    name: "SQLServer",
    imgUrl: SQLServerImage
  },
]

export const cloud = [  
  {
    name: "AWS",
    imgUrl: AWSImage
  },
  {
    name: "Docker",
    imgUrl: DockerImage
  },
]