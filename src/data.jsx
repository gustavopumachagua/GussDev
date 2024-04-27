//  icons
import { FiGithub, FiMail, FiMapPin, FiXCircle } from "react-icons/fi";
import { SiCoursera } from "react-icons/si";
// icons modal
import { GrDeploy } from "react-icons/gr";
// icons notion
import { SiNotion } from "react-icons/si";
import { SiPlatzi } from "react-icons/si";

//modal
import Modal1 from "./components/modal/Modal1";
import Modal2 from "./components/modal/Modal2";
import Modal3 from "./components/modal/Modal3";
import Modal4 from "./components/modal/Modal4";
import Modal5 from "./components/modal/Modal5";
import Modal6 from "./components/modal/Modal6";
import Modal7 from "./components/modal/Modal7";
import Modal8 from "./components/modal/Modal8";

//modal imagen
import ModalImg1 from "./assets/modal-img/terremoto.png";
import ModalImg2 from "./assets/modal-img/monitores.png";
import ModalImg3 from "./assets/modal-img/felicidad.jpg";
import ModalImg4 from "./assets/modal-img/laptops.jpg";
import ModalImg5 from "./assets/modal-img/terremotoP.jpg";
import ModalImg6 from "./assets/modal-img/billboard.png";
import ModalImg7 from "./assets/modal-img/terremotoA.jpg";
import ModalImg8 from "./assets/modal-img/terremotoAA.jpg";

// projects images
import Project1 from "./assets/projects/terremoto_logo.jpg";
import Project2 from "./assets/projects/monitores_logo.png";
import Project3 from "./assets/projects/felicidad_logo.webp";
import Project4 from "./assets/projects/laptop_logo.png";
import Project5 from "./assets/projects/terremotoP_logo.png";
import Project6 from "./assets/projects/billboard_logo.png";
import Project7 from "./assets/projects/terremotoA_logo.jpg";
import Project8 from "./assets/projects/terremotoAA_logo.jpg";
// navigation
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Portfolio",
    href: "portfolio",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <SiCoursera />,
    href: "https://www.coursera.org/user/4b8bbe1b9d7daa6b574ef3d6e409c5e4",
    alt: "coursera",
  },
  {
    icon: <SiNotion />,
    href: "https://www.notion.so/gussdev/Apuntes-3abec46a55c04b92ba7ea40f0ab117ba",
    alt: "notion",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/gustavopumachagua",
    alt: "github",
  },
  {
    icon: <SiPlatzi />,
    href: "https://platzi.com/p/gustavopumachagua/",
    alt: "platzi",
  },
];

//projectsModal
export const projectsModal1 = [
  {
    name: "Analisis de Terremoto",
    hrefReport: "https://github.com/gustavopumachagua/Analisis_de_Terremoto",
    description:
      "El Siguiente proyectos se basa de los datos de los terremotos desde 1900 hasta 2023. El proyecto de Data Science sobre el análisis de los terremotos tiene como objetivo utilizar técnicas de análisis de datos para estudiar la actividad sísmica en una región geográfica determinada. Para ello, se recopilará un conjunto de datos históricos de terremotos, que incluirá información sobre la fecha, la hora, la ubicación, la magnitud y otros factores relacionados con los terremotos.",
    modalimage: ModalImg1,
    icon: <FiXCircle />,
    iconModal: <GrDeploy />,
    iconReport: <FiGithub />,
    hrefModal:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_de_Terremoto/blob/main/Estadisticas_graficos.ipynb",
  },
];

export const projectsModal2 = [
  {
    name: "Análisis de Monitores",
    hrefReport:
      "https://github.com/gustavopumachagua/Analisis_de_Monitores_Amazon",
    description:
      "El Siguiente proyectos se basa extraer los datos de la pagina web se Amazon por medio de Web Scraping. El procedimiento para la extracción de datos para un análisis de la página web de Amazon utilizando web scraping con Beautiful Soup en Python.",
    modalimage: ModalImg2,
    icon: <FiXCircle />,
    iconModal: <GrDeploy />,
    iconReport: <FiGithub />,
    hrefModal:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_de_Monitores_Amazon/blob/main/Estadisticas_Graficas.ipynb",
  },
];

export const projectsModal3 = [
  {
    name: "Análisis de Encuestas",
    hrefReport: "https://github.com/gustavopumachagua/Analisis_Encuestas",
    description:
      "El Siguiente proyectos se basa de los datos del Índice global de felicidad de 2015 - 2022. El índice mundial de la felicidad es una medida que se utiliza para evaluar el nivel de felicidad de los ciudadanos de diferentes países. Este índice se basa en una encuesta que se realiza cada año, en la que se pregunta a las personas sobre su percepción de la felicidad y bienestar en su vida.",
    modalimage: ModalImg3,
    icon: <FiXCircle />,
    iconModal: <GrDeploy />,
    iconReport: <FiGithub />,
    hrefModal:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_Encuestas/blob/main/Estadistica_Graficas.ipynb",
  },
];

export const projectsModal4 = [
  {
    name: "Analisis de Laptops",
    hrefReport: "https://github.com/gustavopumachagua/Analisis_Laptops",
    description:
      "El Siguiente proyectos se basa extraer los datos de la pagina web se Amazon por medio de Web Scraping.El procedimiento para la extracción de datos para un análisis de la página web de Amazon utilizando web scraping con Beautiful Soup en Python.",
    modalimage: ModalImg4,
    icon: <FiXCircle />,
    iconModal: <GrDeploy />,
    iconReport: <FiGithub />,
    hrefModal:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_Laptops/blob/main/Estadisticas_Graficas.ipynb",
  },
];

export const projectsModal5 = [
  {
    name: "Prediccion de Terremoto",
    hrefReport: "https://github.com/gustavopumachagua/Prediccion_Terremotos",
    description:
      "El Siguiente proyectos se basa de los datos de los terremotos desde 1900 hasta 2023. El proyecto de Data Science sobre el análisis de los terremotos tiene como objetivo utilizar técnicas de análisis de datos para estudiar la actividad sísmica en una región geográfica determinada. Para ello, se recopilará un conjunto de datos históricos de terremotos, que incluirá información sobre la fecha, la hora, la ubicación, la magnitud y otros factores relacionados con los terremotos.",
    modalimage: ModalImg5,
    icon: <FiXCircle />,
    iconModal: <GrDeploy />,
    iconReport: <FiGithub />,
    hrefModal:
      "https://nbviewer.org/github/gustavopumachagua/Prediccion_Terremotos/blob/main/Estadisticas_graficos.ipynb",
  },
];

export const projectsModal6 = [
  {
    name: "Analisis de Billboard",
    hrefReport: "https://github.com/gustavopumachagua/Analisis_Billboard",
    description:
      "El Siguiente proyectos se basa de los datos de las listad de los Hot 100 Billboard desde 1965 hasta 2023. El Billboard Hot 100 es la lista de discos estándar de la industria musical en los Estados Unidos para canciones, publicada semanalmente por la revista Billboard. Las clasificaciones de las listas se basan en las ventas (físicas y digitales), la reproducción de radio y la transmisión en línea en los Estados Unidos.",
    modalimage: ModalImg6,
    icon: <FiXCircle />,
    iconModal: <GrDeploy />,
    iconReport: <FiGithub />,
    hrefModal:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_Billboard/blob/main/Analisis_Datos.ipynb",
  },
];

export const projectsModal7 = [
  {
    name: "App Analisis de Terremotos",
    hrefReport: "https://github.com/gustavopumachagua/app_Terremotos",
    description:
      "El Siguiente proyectos se basa de los datos de los terremotos desde 1900 hasta 2023. El proyecto de Data Science sobre el análisis de los terremotos tiene como objetivo utilizar técnicas de análisis de datos para estudiar la actividad sísmica en una región geográfica determinada. Para ello, se recopilará un conjunto de datos históricos de terremotos, que incluirá información sobre la fecha, la hora, la ubicación, la magnitud y otros factores relacionados con los terremotos.",
    modalimage: ModalImg7,
    icon: <FiXCircle />,
    iconModal: <GrDeploy />,
    iconReport: <FiGithub />,
    hrefModal: "https://app-terremotos.vercel.app/",
  },
];

export const projectsModal8 = [
  {
    name: "App Prediccion de Terremotos",
    hrefReport: "https://github.com/gustavopumachagua/app_predicciones",
    description:
      "El Siguiente proyectos se basa de los datos de los terremotos desde 1900 hasta 2023. El proyecto de Data Science sobre el análisis de los terremotos tiene como objetivo utilizar técnicas de análisis de datos para estudiar la actividad sísmica en una región geográfica determinada. Para ello, se recopilará un conjunto de datos históricos de terremotos, que incluirá información sobre la fecha, la hora, la ubicación, la magnitud y otros factores relacionados con los terremotos.",
    modalimage: ModalImg8,
    icon: <FiXCircle />,
    iconModal: <GrDeploy />,
    iconReport: <FiGithub />,
    hrefModal: "https://app-predicciones.onrender.com/",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Analisis de Terremoto",
    category: "Analysis",
    modal: <Modal1 />,
  },
  {
    id: "2",
    image: Project2,
    name: "Análisis de Monitores",
    category: "Analysis",
    modal: <Modal2 />,
  },
  {
    id: "3",
    image: Project3,
    name: "Análisis de Encuestas",
    category: "Analysis",
    modal: <Modal3 />,
  },
  {
    id: "4",
    image: Project4,
    name: "Analisis de Laptops",
    category: "Analysis",
    modal: <Modal4 />,
  },
  {
    id: "5",
    image: Project5,
    name: "Prediccion de Terremoto",
    category: "Prediction",
    modal: <Modal5 />,
  },
  {
    id: "6",
    image: Project6,
    name: "Analisis de Billboard",
    category: "Analysis",
    modal: <Modal6 />,
  },
  {
    id: "7",
    image: Project7,
    name: "App Analisis de Terremotos",
    category: "Application",
    modal: <Modal7 />,
  },
  {
    id: "8",
    image: Project8,
    name: "App de Terremotos",
    category: "Application",
    modal: <Modal8 />,
  },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Prediction",
  },
  {
    name: "Application",
  },
  {
    name: "Analysis",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "¿Tienes alguna duda?",
    subtitle: "Puedes escribirme",
    description: "Enviar un Email rpumachaguahuertas@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Ubicame",
    subtitle: "Lima, Peru",
    description: "2024",
  },
];
