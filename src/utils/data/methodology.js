import { FaCampground, FaChalkboardTeacher, FaLaptopCode, FaUsers } from "react-icons/fa";
import { v4 } from "uuid";

export const dataMethodology = [
  {
    id: v4(),
    title: "Campamento Virtual",
    description: "Enseñanza de cursos con estilo de campamento. Adaptamos esta actividad y lo llevamos a un entorno virtual.",
    component: <FaCampground/>
  },
  {
    id: v4(),
    title: "Tutores",
    description: "Cada campamento cuenta con tutores preseleccionados y capacitados para brindar una experiencia satisfactoria.",
    component: <FaChalkboardTeacher/>
  },
  {
    id: v4(),
    title: "Sinergia",
    description: "Contamos con una metodología dinámica y grupal, con la intención de que puedan trabajar en equipo.",
    component: <FaUsers/>
  },
  {
    id: v4(),
    title: "Edullhack",
    description: "Antes de finalizar cada campamento se realiza un concurso con increíbles premios.",
    component: <FaLaptopCode/>
  },
]