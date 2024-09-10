import { StaticImageData } from "next/image";
import ChefExecutivo from "../public/assets/images/team/chef-executivo.jpg";
import SousChef from "../public/assets/images/team/sous-chef.jpg";
import ChefPatisserie from "../public/assets/images/team/chef-de-patisserie.jpg";
import Sommelier from "../public/assets/images/team/sommelier.jpg";

export type TeamItem = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
};

export const teamMembers: TeamItem[] = [
  {
    id: 1,
    name: "Chef Carlos Oliveira",
    role: "Chef Executivo",
    image: ChefExecutivo,
  },
  {
    id: 2,
    name: "Karen Silveira",
    role: "Sous Chef",
    image: SousChef,
  },
  {
    id: 3,
    name: "Juliana Queiroz",
    role: "Chef de Patisserie",
    image: ChefPatisserie,
  },
  {
    id: 4,
    name: "Karine Almeida",
    role: "Sommelier",
    image: Sommelier,
  },
];
