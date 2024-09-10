import Feijoada from "../public/assets/images/food/feijoada.jpg";
import Moqueca from "../public/assets/images/food/moqueca.jpg";
import Picanha from "../public/assets/images/food/picanha.jpg";
import Coxinha from "../public/assets/images/food/coxinha.jpg";
import BolinhoBacalhau from "../public/assets/images/food/bolinho_bacalhau.jpg";
import Pastel from "../public/assets/images/food/pastel.jpg";
import CaldoVerde from "../public/assets/images/food/caldo_verde.jpg";
import Pudim from "../public/assets/images/food/pudim.jpg";
import Brigadeiro from "../public/assets/images/food/brigadeiro.jpg";
import TortaLimao from "../public/assets/images/food/torta-limao.jpg";
import Acai from "../public/assets/images/food/acai.jpg";

import SucoLaranja from "../public/assets/images/drinks/suco_laranja.jpg";
import BatidaCoco from "../public/assets/images/drinks/batida_coco.jpg";
import Mate from "../public/assets/images/drinks/mate.jpg";
import Caipirinha from "../public/assets/images/drinks/caipirinha.jpg";

import { StaticImageData } from "next/image";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  image: StaticImageData;
};

export const menuItems: MenuItem[] = [
  // Principais
  {
    id: 1,
    name: "Feijoada Completa",
    description:
      "Prato tradicional brasileiro com feijão preto, carne de porco e acompanhamentos.",
    price: 45.9,
    image: Feijoada,
    category: "Principais",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Moqueca de Peixe",
    description:
      "Delicioso ensopado de peixe com leite de coco, pimentões e dendê.",
    price: 52.9,
    image: Moqueca,
    category: "Principais",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Picanha na Brasa",
    description:
      "Corte nobre de carne bovina grelhada, acompanhada de farofa e vinagrete.",
    price: 68.9,
    image: Picanha,
    category: "Principais",
    rating: 4.9,
  },
  // Entradas
  {
    id: 4,
    name: "Coxinha",
    description: "Salgado frito recheado com frango desfiado.",
    price: 8.9,
    image: Coxinha,
    category: "Entradas",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Bolinho de Bacalhau",
    description: "Bolinho frito de bacalhau desfiado e temperos.",
    price: 12.5,
    image: BolinhoBacalhau,
    category: "Entradas",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Pastel de Carne",
    description: "Pastel frito recheado com carne moída temperada.",
    price: 6.9,
    image: Pastel,
    category: "Entradas",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Caldo Verde",
    description:
      "Sopa cremosa de couve com batata e pedaços de linguiça portuguesa.",
    price: 14.9,
    image: CaldoVerde,
    category: "Entradas",
    rating: 4.8,
  },
  // Sobremesas
  {
    id: 8,
    name: "Pudim de Leite",
    description: "Sobremesa cremosa de leite condensado com calda de caramelo.",
    price: 12.9,
    image: Pudim,
    category: "Sobremesas",
    rating: 4.9,
  },
  {
    id: 9,
    name: "Brigadeiro Gourmet",
    description: "Docinho de chocolate com leite condensado e granulado.",
    price: 5.5,
    image: Brigadeiro,
    category: "Sobremesas",
    rating: 4.8,
  },
  {
    id: 10,
    name: "Torta de Limão",
    description:
      "Torta com base crocante, recheio de creme de limão e cobertura de merengue.",
    price: 14.9,
    image: TortaLimao,
    category: "Sobremesas",
    rating: 4.7,
  },
  {
    id: 11,
    name: "Sorvete de Açaí",
    description: "Sorvete cremoso de açaí com acompanhamentos variados.",
    price: 10.9,
    image: Acai,
    category: "Sobremesas",
    rating: 4.6,
  },
  // Bebidas
  {
    id: 12,
    name: "Caipirinha",
    description: "Coquetel brasileiro feito com cachaça, limão, açúcar e gelo.",
    price: 15.9,
    image: Caipirinha,
    category: "Bebidas",
    rating: 4.7,
  },
  {
    id: 13,
    name: "Suco de Laranja Natural",
    description: "Suco fresco de laranja, sem adição de açúcar.",
    price: 7.9,
    image: SucoLaranja,
    category: "Bebidas",
    rating: 4.4,
  },
  {
    id: 14,
    name: "Batida de Coco",
    description:
      "Bebida cremosa com coco e leite condensado, com ou sem álcool.",
    price: 13.9,
    image: BatidaCoco,
    category: "Bebidas",
    rating: 4.5,
  },
  {
    id: 15,
    name: "Mate Gelado com Limão",
    description: "Chá mate gelado com suco de limão e um toque de hortelã.",
    price: 6.5,
    image: Mate,
    category: "Bebidas",
    rating: 4.6,
  },
];
