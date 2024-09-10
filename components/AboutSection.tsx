"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Img from "../public/assets/images/restaurant.jpg";

export function AboutSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-10 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-yellow-500">
              Sobre o Restaurante Arte & Sabor
            </h2>
            <p className="text-gray-600 mb-6">
              O Restaurante é um oásis gastronômico no coração da
              cidade. Fundado em 2010, nosso estabelecimento se dedica a
              oferecer uma experiência culinária única, combinando sabores
              tradicionais brasileiros com técnicas modernas de preparo.
            </p>
            <p className="text-gray-600 mb-6">
              Nossa equipe de chefs talentosos trabalha com ingredientes frescos
              e sazonais, garantindo que cada prato seja uma obra-prima de sabor
              e apresentação. Valorizamos a sustentabilidade e apoiamos
              produtores locais, trazendo o melhor da região para sua mesa.
            </p>
            <p className="text-gray-600">
              Acreditamos que uma refeição é mais do que
              apenas comida - é uma experiência para ser compartilhada e
              lembrada. Venha nos visitar e descubra por que somos considerados
              um dos melhores restaurantes da cidade.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative lg:h-[600px] w-full rounded-lg">
              <div
                className="absolute inset-0"
                style={{
                  transform: `translateY(${offset * 0.3}px)`,
                }}
              >
                <Image
                  src={Img}
                  alt="Restaurant ambiance"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
