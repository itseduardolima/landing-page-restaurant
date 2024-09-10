import Image from "next/image";
import Banner from "../public/assets/images/banner.jpg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <Image
        src={Banner}
        alt="Imagem do restaurante"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 brightness-75"
      />
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Bem-vindo ao Sabor & Arte
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Uma experiência gastronômica única
        </p>
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
          size="lg"
        >
          Reserve uma Mesa
        </Button>
      </div>
    </section>
  );
}
