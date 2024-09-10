import { StaticImageData } from "next/image";
import Risoto from "../public/assets/images/food/risotto.jpg"
import Pato from "../public/assets/images/food/fried-foie-gras.jpg"
import Sobremesa from "../public/assets/images/food/close-up-of-fresh-passion-fruit-on-wooden.jpg"

export type HighlightsItem = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
};

export const highlights: HighlightsItem[] = [
  {
    id: 1,
    name: "Risoto de Cogumelos Selvagens",
    description:
      "Um cremoso risoto preparado com uma variedade de cogumelos selvagens e finalizado com trufa negra.",
    image: Risoto
  },
  {
    id: 2,
    name: "Pato com Molho de Frutas Vermelhas",
    description:
      "Peito de pato perfeitamente grelhado, servido com um molho agridoce de frutas vermelhas e purê de batata-doce.",
    image: Pato
  },
  {
    id: 3,
    name: "Sobremesa de Chocolate e Maracujá",
    description:
      "Uma delicada mousse de chocolate amargo combinada com geleia de maracujá e crumble de cacau.",
    image: Sobremesa
  },
];
